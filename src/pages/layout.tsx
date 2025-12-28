import { Outlet } from "react-router"
import Header from "../components/header"
import Footer from "../components/footer"


const Layout = () => {
  return (
    <div className='flex flex-col gap-[15vh]'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout