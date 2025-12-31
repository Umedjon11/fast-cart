import { CircularProgress, TextField } from "@mui/material"
import { Link, useNavigate } from "react-router"
import { useCart } from "../store/cart"
import { useEffect, useState } from "react"
import Cards from "../assets/Cards.png"

const Checkout = () => {

  const { cartProducts, isLoadingCart, GetCartProducts, totalPrice, RemoveAll } = useCart((state: any) => state)

  const [payed, setPayed] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    GetCartProducts()
  }, [])

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      setPayed(true)
      RemoveAll()
      setTimeout(() => {
        navigate("/")
      }, 4000)
    }} className="flex justify-between items-start flex-col gap-y-[5vh] w-[90%] m-[-15vh_auto]">
      {!payed && (
        <section className="flex flex-col w-full gap-[5vh]">
          <section className="flex gap-4 items-center">
            <Link to="/" className="text-[#00000090] font-semibold">Home /</Link>
            <Link to="/cart" className="text-[#00000090] font-semibold">View Cart /</Link>
            <h1>CheckOut</h1>
          </section>
          <h1 className="text-2xl sm:text-5xl font-semibold">Billing Details</h1>
          <div className="flex flex-col sm:flex-row w-full justify-between gap-[6vh]">
            <aside className="flex flex-col shadow-2xl w-full rounded-md p-[4vh] sm:w-[38%] gap-[3vh]">
              <TextField label="First name" required />
              <TextField label="Last  name" required />
              <TextField label="Street address" required />
              <TextField label="Apartment, floor, etc. (optional)" required />
              <TextField label="Town/City" required />
              <TextField label="Phone number" required />
              <TextField label="Email address" type="email" required />
              <div className="flex gap-3 items-center">
                <input checked type="checkbox" />
                <h1 className="font-semibold">Save this information for faster check-out next time</h1>
              </div>
            </aside>
            <aside className="flex flex-col gap-[4vh] items-start w-full sm:w-[40%]">
              {
                cartProducts?.map((prod: any) => {
                  return <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img className="w-10 h-13" src={`https://store-api.softclub.tj/images/${prod.product.image}`} />
                      <h1 className="font-semibold">{prod.product.productName}</h1>
                    </div>
                    <h1 className="font-semibold text-md">${prod.product.discountPrice}</h1>
                  </div>
                })
              }
              {isLoadingCart && (<CircularProgress className="m-[0_auto]" size={50} />)}
              <p className="flex w-full justify-between">Subtotal: <span>${totalPrice}</span></p>
              <p className="flex w-full justify-between border-b-2 pb-[2vh]">Shipping: <span>Free</span></p>
              <p className="flex w-full font-bold justify-between">Total: <span>${totalPrice}</span></p>
              <div className="flex w-full justify-between">
                <input name="radio" type="radio" />
                <img src={Cards} />
              </div>
              <div className="flex w-full gap-5">
                <input name="radio" type="radio" />
                <p className="font-semibold">Cash on delivery</p>
              </div>
              <div className="flex justify-between w-full p-[3vh] shadow-2xl rounded-md">
                <TextField className="w-[62%]" label="Coupon Code" />
                <button type="button" className="border border-[#DB4444] text-[#DB4444] font-semibold rounded-md w-[35%]">Apply</button>
              </div>
              <button className="bg-[#DB4444] text-white font-semibold cursor-pointer rounded-md p-[2vh_30px]">Place Order</button>
            </aside>
          </div>
        </section>
      )}
      {payed && (
        <div id="animationContainer" className={payed ? "active m-[10vh_auto]" : "hiddenn"}>
            <div className="checkmark-container">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor:"#D4E157"}} />
                            <stop offset="100%" style={{stopColor:"#4CAF50"}} />
                        </linearGradient>
                    </defs>
                    <path className="checkmark__arc" d="M 90, 50 A 40, 40 0 1 1 50, 10" fill="none" stroke="url(#gradient)" stroke-width="10" stroke-linecap="round"/>
                    <path className="checkmark__check" d="M30 55 L45 70 L75 40" fill="none" stroke="#4CAF50" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="message" style={{fontWeight: "600", fontSize: "23px", backgroundImage: "linear-gradient(to right, #4CAF50, #D4E157)", color: "rgba(255, 255, 255, 0)", backgroundClip: "text"}}>Payment Successful!</div>
        </div>
      )}
    </form>
  )
}

export default Checkout