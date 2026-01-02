import { toast } from "react-toastify"
import { Axios, GetUserName } from "../../utils/axios"
import { create } from "zustand"


export const useProfile = create((set, get: any) => ({
    Profile: {},
    GetProfile: async () => {
        const userName = GetUserName()
        try {
            const { data } = await Axios.get(`https://store-api.softclub.tj/UserProfile/get-user-profiles?UserName=${userName}`)
            set(() => ({Profile: data.data[0]}))
        } catch (error) {
            toast.error("Something goes wrong")
        }
    },
    EditProfile: async (form: any) => {
        try {
            await Axios.put("https://store-api.softclub.tj/UserProfile/update-user-profile", form)
            get().GetProfile()
            toast.success("Successfuly edited!")
            return "success"
        } catch (error: any) {
            toast.error("Something goes wrong")
        }
    },
}))