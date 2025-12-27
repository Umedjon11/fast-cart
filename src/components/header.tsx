import { useState } from "react"
import Logo from "../assets/Logo.png"
import { Link } from "react-router"
import { Heart, Search, ShoppingCart } from "lucide-react"

const Header = () => {
    const [page, setPage] = useState("home")
  return (
    <div className="flex p-[2vh_5%] w-full border-b-[#0000001A] border-b justify-between m-[0_auto] items-center">
        <img src={Logo} />
        <aside className="flex gap-10 items-center font-semibold">
            <Link onClick={() => setPage("home")} className={page=="home" ? "border-b-2 border-b-[#0000001A]" : ""} to="/">Home</Link>
            <Link onClick={() => setPage("contact")} className={page=="contact" ? "border-b-2 border-b-[#0000001A]" : ""} to="/contact">Contact</Link>
            <Link onClick={() => setPage("about")} className={page=="about" ? "border-b-2 border-b-[#0000001A]" : ""} to="/about">About</Link>
            <Link onClick={() => setPage("register")} className={page=="register" ? "border-b-2 border-b-[#0000001A]" : ""} to="/register">Sign Up</Link>
        </aside>
        <aside className="flex gap-10 items-center font-semibold">
            <div className="bg-[#F5F5F5] rounded-xl p-[2vh_15px] flex gap-5">
                <input placeholder="What are you looking for?" />
                <Search className="cursor-pointer" />
            </div>
            <Heart />
            <ShoppingCart />
        </aside>
    </div>
  )
}

export default Header