import { Outlet } from "react-router"
import Header from "../components/header"
import Footer from "../components/footer"
import { ToastContainer } from "react-toastify"


const Layout = () => {
  return (
    <div className='flex flex-col gap-[15vh]'>
        <Header />
        <ToastContainer />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout