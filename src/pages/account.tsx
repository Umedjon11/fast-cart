import { TextField } from "@mui/material"
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"
import * as Yup from 'yup';
import { useProfile } from "../store/profile";
import { GetToken } from "../../utils/axios";

const Account = () => {

  const [avatar, setAvatar] = useState<null | any>(null)

  const { Profile, GetProfile, EditProfile } = useProfile((state: any) => state)

  const navigate = useNavigate()
  const token = GetToken()

  const formShema = Yup.object().shape({
    firstName: Yup.string()
    .matches(/^[A-Z]/, "First letter must be Upper Case!")
    .min(3, "To short")
    .max(30, "Too long")
    .required("Fill Your first name!"),
    lastName: Yup.string()
    .matches(/^[A-Z]/, "First letter must be Upper Case!")
    .min(3, "To short")
    .max(30, "Too long")
    .required("Fill Your last name!"),
    email: Yup.string()
    .email("Invalid Email address")
    .required("Fill Your name!"),
    phoneNumber: Yup.string()
    .min(9, "To short")
    .max(9, "Too long")
    .required("Fill Your phone number!")
  })

  const {setFieldValue, handleChange, handleSubmit, resetForm, errors, touched, values} = useFormik({
    initialValues: {
      firstName: Profile?.firstName,
      lastName: Profile?.lastName,
      email: Profile?.email,
      phoneNumber: Profile?.phoneNumber
    },
    validationSchema: formShema,
    onSubmit: async (values: any) => {
      const date = new Date
      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      const form = new FormData
      form.append("Image", values.image)
      form.append("FirstName", values.firstName)
      form.append("LastName", values.lastName)
      form.append("Email", values.email)
      form.append("PhoneNumber", values.phoneNumber)
      form.append("Dob", month+1+"-"+day+"-"+year)
      const res = await EditProfile(form)

      if (res) {
        navigate("/")
      }
    }
  })

  const handleAvatar = (e: any) => {
    const image = e.target.files[0]

    const rider = new FileReader
    rider.readAsDataURL(image)
    rider.onload = () => {
      setAvatar(rider.result)
    }
    setFieldValue("image", image)
  } 

  useEffect(() => {
    GetProfile()
    resetForm()
    if (!token) {
      navigate("/register")
    }
  }, [])

  return (
    <main className="flex flex-col gap-[10vh] w-[90%] m-[-15vh_auto]">
      <section className="flex gap-4 items-center">
        <Link to="/" className="text-[#00000090] font-semibold">Home /</Link>
        <h1 className="font-semibold">My Account</h1>
      </section> 
      <section className="flex items-start justify-between flex-col gap-[5vh] sm:flex-row">
        <aside className="flex flex-col gap-[2vh]">
          <h1 className="font-bold text-xl">Manange My Account</h1>
          <div className="flex flex-col ml-5">
            <h1 className="text-xl text-[red] cursor-pointer">My Profile</h1>
            <h1 className="text-xl text-[#00000090] cursor-pointer">Address Book</h1>
            <h1 className="text-xl text-[#00000090] cursor-pointer">My Payment Options</h1>
          </div>
          <h1 className="font-bold text-xl">My Orders</h1>
          <div className="flex flex-col ml-5">
            <h1 className="text-xl text-[#00000090] cursor-pointer">My Returns</h1>
            <h1 className="text-xl text-[#00000090] cursor-pointer">My Cancellations</h1>
          </div>
          <Link to="/wishlist" className="font-bold text-xl">My WishList</Link>
        </aside>
        <form onSubmit={handleSubmit} className="w-full sm:w-[70%] flex flex-col gap-[3vh] shadow-2xl rounded-md p-[4vh]">
          <h1 className="text-[#DB4444] font-semibold text-2xl">Profile</h1>
          <div className="flex justify-between flex-wrap w-full gap-y-[3vh]">
            <img className="w-50 h-50 rounded-full m-[0_auto]" src={avatar ? avatar : "https://www.footaj.ru/assets/img/noavatar.png"} />
            <input onChange={handleAvatar} type="file" className="w-full border-2 rounded-md p-[2vh_5%] border-[#E5E5E5]" />
            <div className="flex w-full sm:w-[48%] flex-col gap-[1vh]">
              <TextField name="firstName" value={values.firstName} onChange={handleChange} className="w-full" label="First name" />
              {errors.firstName && touched.firstName ? (<p className="text-[red] font-semibold">{errors.firstName + ""}</p>) : null}
            </div>
            <div className="flex w-full sm:w-[48%] flex-col gap-[1vh]">
              <TextField name="lastName" value={values.lastName} onChange={handleChange} className="w-full" label="Last name" />
              {errors.lastName && touched.lastName ? (<p className="text-[red] font-semibold">{errors.lastName + ""}</p>) : null}
            </div>
            <div className="flex w-full sm:w-[48%] flex-col gap-[1vh]">
              <TextField name="email" value={values.email} onChange={handleChange} className="w-full" label="Email" />
              {errors.email && touched.email ? (<p className="text-[red] font-semibold">{errors.email + ""}</p>) : null}
            </div>
            <div className="flex w-full sm:w-[48%] flex-col gap-[1vh]">
              <TextField name="phoneNumber" value={values.phoneNumber} onChange={handleChange} className="w-full" label="Phone number" />
              {errors.phoneNumber && touched.phoneNumber ? (<p className="text-[red] font-semibold">{errors.phoneNumber + ""}</p>) : null}
            </div>
          </div>
          <div className="flex ml-auto gap-4 items-center">
            <button type="button" onClick={() => navigate("/")} className="cursor-pointer">Cancel</button>
            <button type="submit" className="text-white bg-[#DB4444] rounded-md p-[2vh_40px] cursor-pointer">Save Changes</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Account