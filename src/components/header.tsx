import Logo from "../assets/Logo.png"
import { Link, useLocation, useNavigate } from "react-router"
import { Heart, LogOut, Menu as MenuDes, Search, ShoppingBag, ShoppingCart, User } from "lucide-react"
import { useEffect, useState } from "react"
import { Drawer, Menu, MenuItem } from "@mui/material"
import { GetToken } from "../../utils/axios"
import { useCart } from "../store/cart"
import { GetWishList } from "../api/request/wishlist"

const Header = () => {
  const location = useLocation()
  const navigation = useNavigate()

  const { cartProducts, GetCartProducts } = useCart((state: any) => state)

  const [open, setOpen] = useState(false);
  
  const AccwishList = GetWishList()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const token = GetToken()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (token) {
      GetCartProducts()
    }
  }, [token])

  return (
    <div className="flex p-[2vh_5%] w-full border-b-[#0000001A] border-b justify-between m-[0_auto] items-center">
        <img className="hidden sm:block" src={Logo} />
        <button className="block sm:hidden" onClick={toggleDrawer(true)}><MenuDes /></button>
        <h1 className="block mr-auto ml-4 text-2xl font-bold sm:hidden">Exlusive</h1>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <div className="flex flex-col gap-[2vh] bg-white items-start p-[2vh_60px_2vh_40px]">
                <img className="mb-[4vh]" src={Logo} />
                <Link onClick={() => setOpen(false)} className={location.pathname == "/" ? "font-semibold border-b-2 border-b-[#0000001A]" : "font-semibold hover:border-b-2 hover:border-b-[#0000001A]"} to="/">Home</Link>
                <Link onClick={() => setOpen(false)} className={location.pathname == "/contact" ? "font-semibold border-b-2 border-b-[#0000001A]" : "font-semibold hover:border-b-2 hover:border-b-[#0000001A]"} to="/contact">Contact</Link>
                <Link onClick={() => setOpen(false)} className={location.pathname == "/about" ? "font-semibold border-b-2 border-b-[#0000001A]" : "font-semibold hover:border-b-2 hover:border-b-[#0000001A]"} to="/about">About</Link>
                {!token && (<Link onClick={() => setOpen(false)} className={location.pathname == "/register" ? "font-semibold border-b-2 border-b-[#0000001A]" : "font-semibold hover:border-b-2 hover:border-b-[#0000001A]"} to="/register">Sign Up</Link>)}
            </div>
        </Drawer>
        <aside className="hidden sm:flex gap-10 items-center font-semibold">
            <Link className={location.pathname == "/" ? "border-b-2 border-b-[#0000001A]" : "hover:border-b-2 hover:border-b-[#0000001A]"} to="/">Home</Link>
            <Link className={location.pathname == "/contact" ? "border-b-2 border-b-[#0000001A]" : "hover:border-b-2 hover:border-b-[#0000001A]"} to="/contact">Contact</Link>
            <Link className={location.pathname == "/about" ? "border-b-2 border-b-[#0000001A]" : "hover:border-b-2 hover:border-b-[#0000001A]"} to="/about">About</Link>
            {!token && (<Link className={location.pathname == "/register" ? "border-b-2 border-b-[#0000001A]" : "hover:border-b-2 hover:border-b-[#0000001A]"} to="/register">Sign Up</Link>)}
        </aside>
        <aside className="flex gap-10 items-center font-semibold">
            <div className="bg-[#F5F5F5] hidden sm:flex rounded-xl p-[2vh_15px] gap-5">
                <input className="outline-0" placeholder="What are you looking for?" />
                <Search className="cursor-pointer" />
            </div>
            <Heart onClick={() => {
              if(token) {
                navigation("/wishlist")
              } 
              else {
                navigation("/register")
              }
            }} className="hidden sm:block" />
            {AccwishList && AccwishList.length > 0 && (<p className="hidden sm:block bg-[red] absolute ml-[3.4%] sm:ml-[21.2%] mt-[-3vh] text-white p-[2px_7px] text-[10px] rounded-4xl">{AccwishList.length}</p>)}
            <ShoppingCart onClick={() => {
              if(token) {
                navigation("/cart")
              }
              else {
                navigation("/register")
              }
            }} />
            {cartProducts.length > 0 && (<p className="bg-[red] absolute ml-[3.4%] sm:ml-[25.3%] mt-[-3vh] text-white p-[2px_7px] text-[10px] rounded-4xl">{cartProducts.length}</p>)}
            {token && (<button onClick={(e: any) => handleClick(e)} className={openMenu ? "cursor-pointer text-white bg-[#DB4444] p-3 rounded-4xl" : "cursor-pointer text-black p-3 rounded-4xl"}><User /></button>)}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                sx: {
                  backgroundColor: "#00000099",
                  color: "white",
                  boxShadow: "5px 5px 10px #00000059",
                  padding: "2vh 10px",
                  width: "200px"
                }
              }}
              className="ml-[-3%] sm:ml-[-5%] mt-[2vh] font-bold sm:mt-[5vh] "
            >
              <MenuItem className="flex gap-6 items-center" onClick={() => {
                navigation("/account")
                handleClose()
              }}><User /> Account</MenuItem>
              <MenuItem className="flex gap-6 items-center" onClick={() => {
                navigation("/notfound")
                handleClose()
              }}><ShoppingBag /> My Order</MenuItem>
              <div className="block sm:hidden">
                <MenuItem className="hidden gap-6 items-center" onClick={() => {
                  navigation("/wishlist")
                  handleClose()
                }}><Heart /> Wishlist</MenuItem>
              </div>
              <MenuItem className="flex gap-6 items-center" onClick={() => {
                localStorage.clear()
                handleClose()
              }}><LogOut /> Logout</MenuItem>
            </Menu>
        </aside>
    </div>
  )
}

export default Header