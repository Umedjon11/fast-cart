import { CircularProgress } from '@mui/material'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import Layout from './pages/layout'

const Home = lazy(() => import('./pages/home'))
const Login = lazy(() => import('./pages/login'))
const Register = lazy(() => import('./pages/register'))
const Products = lazy(() => import('./pages/products'))
const Wishlist = lazy(() => import('./pages/wishlist'))
const Info = lazy(() => import('./pages/info'))
const Cart = lazy(() => import('./pages/cart'))
const Checkout = lazy(() => import('./pages/checkout'))
const Account = lazy(() => import('./pages/account'))
const About = lazy(() => import('./pages/about'))
const Contact = lazy(() => import('./pages/contact'))
const Notfound = lazy(() => import('./pages/notfound'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress className='m-[20vh_aut0]' size={200} />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/products' element={<Products />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/info/:id' element={<Info />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/account' element={<Account />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/notfound' element={<Notfound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App