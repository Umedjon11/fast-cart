import { Link, useNavigate } from "react-router"
import { useCart } from "../store/cart"
import { CircularProgress, TextField } from "@mui/material"
import { useEffect } from "react"
import { X } from "lucide-react"

const Cart = () => {

  const { cartProducts, GetCartProducts, isLoadingCart, RemoveFromCart, RemoveAll, totalPrice } = useCart((state: any) => state)

  const navigate = useNavigate()

  useEffect(() => {
    GetCartProducts()
  }, [])


  return (
    <main className="flex flex-col w-[90%] m-[-10vh_auto] gap-[10vh]">
      <section className="flex gap-4">
        <Link to="/" className="font-semibold text-[#00000090]">Home /</Link>
        <p className="font-semibold">Cart</p>
      </section>
      <table className="w-full text-center">
        <thead className="text-[#00000099]">
          <tr>
            <th className="p-[2vh_3%] text-start"><h1 className="hidden sm:block">Product</h1></th>
            <th className="p-[2vh_0]"><h1 className="hidden sm:block">Price</h1></th>
            <th className="p-[2vh_0]"><h1 className="hidden sm:block">Quantity</h1></th>
            <th className="p-[2vh_0]"><h1 className="hidden sm:block">Subtotal</h1></th>
            <th className="p-[2vh_0]"></th>
          </tr>
        </thead>
        <tbody className="">
          {
            cartProducts.map((prod: any) => {
              return <tr key={prod.id} className="shadow-2xl rounded-xl">
                <td>
                  <div className="flex m-[3vh_3%] flex-col sm:flex-row gap-3 items-center">
                    <img className="w-13.5 h-13.5 rounded-2xl" src={`https://store-api.softclub.tj/images/${prod.product.image}`} />
                    <h1 className="font-semibold">{prod.product.productName}</h1>
                    <div className="flex sm:hidden gap-5">
                      <button onClick={() => RemoveFromCart(prod.id)} className="w-6 h-6 cursor-pointer rounded-4xl font-semibold text-white bg-[red]"><X /></button>
                      <h1>${prod.product.discountPrice}</h1>
                    </div>
                  </div>
                </td>
                <td><h1 className="hidden sm:block">${prod.product.discountPrice}</h1></td>
                <td><TextField type="number" className="w-17" value={1} variant="outlined" /></td>
                <td className="font-bold">${prod.product.discountPrice}</td>
                <td><button onClick={() => RemoveFromCart(prod.id)} className="w-6 hidden sm:block h-6 cursor-pointer rounded-4xl font-semibold text-white bg-[red]"><X /></button></td>
              </tr>
            })
          }
        </tbody>
      </table>
      {isLoadingCart && (<CircularProgress className="m-[3vh_auto]" size={100} />)}
      <div className="flex w-full flex-wrap gap-y-[2vh] items-center justify-between">
        <button onClick={() => navigate("/products")} className="p-[2vh_30px] rounded-xl border-2 cursor-pointer border-[#00000080] text-[#00000080] font-semibold">Return To Shop</button>
        <div className="flex gap-3 items-center">
          <button onClick={() => GetCartProducts()} className="p-[2vh_30px] rounded-xl border-2 cursor-pointer border-[#00000080] text-[#00000080] font-semibold">Update Cart</button>
          <button onClick={() => RemoveAll()} className="p-[2vh_30px] rounded-xl border-2 cursor-pointer border-[red] text-[red] font-semibold">Remove all</button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-y-[4vh] justify-between items-start">
        <div className="flex gap-4">
          <TextField className="w-55 sm:w-70" label="Coupon Code" variant="outlined" />
          <button className="p-[2vh_30px] rounded-md border cursor-pointer border-[red] text-[red] font-semibold">Apply</button>
        </div>
        <div className="p-4 rounded-md flex flex-col gap-[2vh] w-full sm:w-100 border-2">
          <h1 className="font-bold text-xl">Cart Total</h1>
          <p className="flex justify-between">Subtotal: <span>${totalPrice}</span></p>
          <p className="flex justify-between border-b-2 pb-[2vh]">Shipping: <span>Free</span></p>
          <p className="flex font-bold justify-between">Total: <span>${totalPrice}</span></p>
          <button onClick={() => navigate("/checkout")} className="bg-[#DB4444] font-semibold text-white p-[2vh_0] cursor-pointer w-[80%] m-[0_auto] rounded-md">Procees to checkout</button>
        </div>
      </div>
    </main>
  )
}

export default Cart