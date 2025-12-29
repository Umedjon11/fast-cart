import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import * as Yup from "yup"
import { useFormik } from 'formik'
import { LogIn } from "../api/request/acount";
import { useNavigate } from "react-router";

const login = () => {

  useEffect(() => {
    resetForm()
  }, [])

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formScema = Yup.object().shape({
    userName: Yup.string()
    .required("Fill your user name"),
    password: Yup.string()
    .required("Fill your password")
  })

  const {handleSubmit, handleChange, resetForm, errors, touched, values} = useFormik({
    initialValues: {
      userName: "",
      password: ""
    },
    validationSchema: formScema,
    onSubmit: async (values: {userName: string, password: string}) => {
      const result = await LogIn(values)
      if (result) {
        navigate("/")
      }
    }
  })

  return <div className="flex flex-col gap-[3vh] w-[90%] sm:w-[30%] m-[0_auto]">
    <h1 className="text-3xl font-bold">Log in to Exclusive</h1>
    <p>Enter your details below</p>
    <form onSubmit={handleSubmit} className="flex flex-col gap-[3vh]">
      <TextField value={values.userName} name="userName" onChange={handleChange}  id="outlined-basic" label="User name" variant="outlined" />
      {errors.userName && touched.userName ? (<p className="text-[red] font-semibold text-[16px]">{errors.userName}</p>) : null}
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
      <h2 className="text-[#DB4444] font-semibold text-center text-[17px] cursor-pointer">Forget Password?</h2>
      <button className="bg-[#DB4444] w-full text-center p-[1.5vh_0] rounded-lg text-white font-semibold cursor-pointer" type="submit">Log In</button>
    </form>
  </div>;
};

export default login;
