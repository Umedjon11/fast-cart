import Logo from "../assets/Logo.png"
import { Link, useLocation } from "react-router"
import { Heart, Menu, Search, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { Drawer } from "@mui/material"

const Header = () => {
  const location = useLocation()

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex p-[2vh_5%] w-full border-b-[#0000001A] border-b justify-between m-[0_auto] items-center">
        <img className="hidden sm:block" src={Logo} />
        <button className="block sm:hidden" onClick={toggleDrawer(true)}><Menu /></button>
        <h1 className="block mr-auto ml-4 text-2xl font-bold sm:hidden">Exlusive</h1>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <div className="flex flex-col gap-[2vh] bg-white items-start p-[2vh_60px_2vh_40px]">
                <img className="mb-[4vh]" src={Logo} />
                <Link onClick={() => setOpen(false)} className={location.pathname == "/" ? "font-semibold border-b-2 border-b-[#0000001A]" : "font-semibold hover:border-b-2 hover:border-b-[#0000001A]"} to="/">Home</Link>
                <Link onClick={() => setOpen(false)} className={location.pathname == "/contact" ? "font-semibold border-b-2 border-b-[#0000001A]" : "font-semibold hover:border-b-2 hover:border-b-[#0000001A]"} to="/contact">Contact</Link>
                <Link onClick={() => setOpen(false)} className={location.pathname == "/about" ? "font-semibold border-b-2 border-b-[#0000001A]" : "font-semibold hover:border-b-2 hover:border-b-[#0000001A]"} to="/about">About</Link>
                <Link onClick={() => setOpen(false)} className={location.pathname == "/register" ? "font-semibold border-b-2 border-b-[#0000001A]" : "font-semibold hover:border-b-2 hover:border-b-[#0000001A]"} to="/register">Sign Up</Link>
            </div>
        </Drawer>
        <aside className="hidden sm:flex gap-10 items-center font-semibold">
            <Link className={location.pathname == "/" ? "border-b-2 border-b-[#0000001A]" : "hover:border-b-2 hover:border-b-[#0000001A]"} to="/">Home</Link>
            <Link className={location.pathname == "/contact" ? "border-b-2 border-b-[#0000001A]" : "hover:border-b-2 hover:border-b-[#0000001A]"} to="/contact">Contact</Link>
            <Link className={location.pathname == "/about" ? "border-b-2 border-b-[#0000001A]" : "hover:border-b-2 hover:border-b-[#0000001A]"} to="/about">About</Link>
            <Link className={location.pathname == "/register" ? "border-b-2 border-b-[#0000001A]" : "hover:border-b-2 hover:border-b-[#0000001A]"} to="/register">Sign Up</Link>
        </aside>
        <aside className="flex gap-10 items-center font-semibold">
            <div className="bg-[#F5F5F5] hidden sm:flex rounded-xl p-[2vh_15px] gap-5">
                <input placeholder="What are you looking for?" />
                <Search className="cursor-pointer" />
            </div>
            <Heart className="hidden sm:block" />
            <ShoppingCart />
        </aside>
    </div>
  )
}

export default Header