import { Bounce, toast } from "react-toastify";
import axios from 'axios'
import { SetToken } from './../../../utils/axios';

export const LogIn = async (account: {userName: string, password: string}) => {
    try {
        const { data } = await axios.post("https://store-api.softclub.tj/Account/login", account)
        toast.success(`Welcome back ${account.userName}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        SetToken(data.data)
        return data.data
    } catch (error: any) {
        console.log(error.response.data)
        toast.error(error.response.data.errors+"", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
}

export const SignUp = async (newAcc: {userName: string, phoneNumber: string, email: string, password: string, confirmPassword: string}) => {
    try {
        const { data } = await axios.post("https://store-api.softclub.tj/Account/register", newAcc)
        toast.success(data.data, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        return data.data
    } catch (error: any) {
        toast.error(error.response.data.errors+"", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
}