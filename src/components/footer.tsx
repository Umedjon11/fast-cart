import { SendHorizontal } from 'lucide-react'
import { Link, useLocation } from 'react-router'


const Footer = () => {
  const location = useLocation()

  return (
    <footer className='bg-black p-[5vh_5%] flex text-white justify-between flex-wrap gap-y-[5vh]'>
        <aside className='flex flex-col gap-[3vh]'>
            <h1 className='text-3xl font-bold'>Exclusive</h1>
            <h3 className='text-xl font-semibold'>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className='border-2 border-white rounded-xl flex gap-4 p-[2vh_15px]'>
                <input placeholder='Enter your email' />
                <SendHorizontal />
            </div>
        </aside>
        <aside className='flex flex-col sm:w-[20%] gap-[3vh]'>
            <h1 className='text-3xl font-bold'>Support</h1>
            <p className='w-[55%] sm:w-full'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </aside>
        <aside className='flex flex-col gap-[2vh]'>
            <h1 className='text-3xl font-bold'>Account</h1>
            <Link className={location.pathname == "/account" ? "font-semibold text-[red]" : "font-semibold hover:text-[red]"} to="/account">My Account</Link>
            <Link className={location.pathname == "/cart" ? "font-semibold text-[red]" : "font-semibold hover:text-[red]"} to="/cart">Cart</Link>
            <Link className={location.pathname == "/wishlist" ? "font-semibold text-[red]" : "font-semibold hover:text-[red]"}  to="/wishlist">WishList</Link>
            <Link className={location.pathname == "/products" ? "font-semibold text-[red]" : "font-semibold hover:text-[red]"} to="/products">Shop</Link>
        </aside>
        <aside className='flex flex-col gap-[2vh]'>
            <h1 className='text-3xl font-bold'>Quick Link</h1>
            <Link className='font-semibold hover:text-[red]' to="/">Privacy Policy</Link>
            <Link className='font-semibold hover:text-[red]' to="/">Terms Of Use</Link>
            <Link className='font-semibold hover:text-[red]' to="/">FAQ</Link>
            <Link className={location.pathname == "/contact" ? "font-semibold text-[red]" : "font-semibold hover:text-[red]"} to="/contact">Contact</Link>
        </aside>
    </footer>
  )
}

export default Footer