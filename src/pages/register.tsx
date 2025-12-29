import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import GoogleIcon from "../assets/Icon-Google.png";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { SignUp } from "../api/request/acount";

const Register = () => {


  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  
    const handleMouseDownConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const handleMouseUpConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const formScema = Yup.object().shape({
      userName: Yup.string()
      .required("Fill your user name"),
      phoneNumber: Yup.string()
      .required("Fill your phone number"),
      email: Yup.string()
      .email("Invalid email account")
      .required("Fill your phone number"),
      password: Yup.string()
      .required("Fill your password"),
      confirmPassword: Yup.string()
      .required("Fill your confirm password")
    })
  
    const {handleSubmit, handleChange, resetForm, errors, touched, values} = useFormik({
      initialValues: {
        userName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      validationSchema: formScema,
      onSubmit: async (values: {userName: string, phoneNumber: string, email: string, password: string, confirmPassword: string}) => {
        const result = await SignUp (values)
        if (result) {
          navigate("/login")
        }
      }
    })

    useEffect(() => {
      resetForm()
    }, [])

  return (
    <div className="flex w-[90%] m-[0_auto] sm:w-[45%] items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 border border-gray-200 rounded-lg shadow-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Create an account
          </h1>
          <p className="text-gray-500 mt-2">Enter your details below</p>
        </div>
          <form  onSubmit={handleSubmit} className="flex flex-col gap-[3vh]">
            <TextField value={values.userName} name="userName" onChange={handleChange}  id="outlined-basic" label="User name" variant="outlined" />
            {errors.userName && touched.userName ? (<p className="text-[red] font-semibold text-[16px]">{errors.userName}</p>) : null}
            <TextField value={values.phoneNumber} name="phoneNumber" onChange={handleChange}  id="outlined-basic" label="Phone number" variant="outlined" />
            {errors.phoneNumber && touched.phoneNumber ? (<p className="text-[red] font-semibold text-[16px]">{errors.phoneNumber}</p>) : null}
            <TextField value={values.email} name="email" onChange={handleChange}  id="outlined-basic" label="Email" variant="outlined" />
            {errors.email && touched.email ? (<p className="text-[red] font-semibold text-[16px]">{errors.email}</p>) : null}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                value={values.password}
                name="password"
                onChange={handleChange}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {errors.password && touched.password ? (<p className="text-[red] font-semibold text-[16px]">{errors.password}</p>) : null}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm password</InputLabel>
              <OutlinedInput
                value={values.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                id="outlined-adornment-password"
                type={showConfirmPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showConfirmPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                      onMouseUp={handleMouseUpConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm password"
              />
            </FormControl>
            {errors.confirmPassword && touched.confirmPassword ? (<p className="text-[red] font-semibold text-[16px]">{errors.confirmPassword}</p>) : null}
            <button type="submit" className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
              Create Account
            </button>
            <button type="button" className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
              <span>Sign up with Google</span>
            </button>
          </form>

        <div className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
