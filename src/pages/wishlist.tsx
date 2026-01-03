import { useEffect, useState } from "react"
import { AddToWish, GetWishList, RemoveFromWish, SetNewWihList } from "../api/request/wishlist"
import { GetToken } from "../../utils/axios"
import { useNavigate } from "react-router"
import { Eye, Heart, StarIcon, Trash } from "lucide-react"
import { CircularProgress, Rating } from "@mui/material"
import { useCart } from "../store/cart"
import { useProducts, type IProduct } from "../store/products"

const Wishlist = () => {
  const AccwishList = GetWishList()
  const [liked, setLiked] = useState(AccwishList ? AccwishList : [])
  const token = GetToken()
  const navigate = useNavigate()
  const { AddProductToCart } = useCart((state: any) => state)
  const { products, GetProducts, isLoading } = useProducts((state: any) => state)
  useEffect(() => {
    if (!token) {
      navigate("/register")
    }
    GetProducts()
  }, [])
  return (
    <main className="flex flex-col gap-[10vh] w-[90%] m-[-15vh_auto]">
      <section className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-semibold">Wishlist ({liked.length})</h1>
        <button className="border border-[#00000090] rounded-md text-xl p-[1.5vh_30px] cursor-pointer" onClick={() => {
          SetNewWihList()
          const newWish = GetWishList()
          setLiked(newWish)
        }}>Move All To Bag</button>
      </section>
      <aside className="w-full flex-wrap flex gap-[8vh_1%]">
          {
            liked?.map((prod: IProduct) => {
                return <div key={prod.id} className="flex hover:*:flex hover:transition-all w-full sm:w-[24%] duration-1000 flex-col items-start text-start gap-[2vh]">
                  {prod.hasDiscount && (<h2 className='absolute mt-[2vh] ml-4 bg-[#DB4444] p-[1vh_15px] text-white font-semibold rounded-xl'>{Math.floor(100 - prod.price/(prod.discountPrice/100))}%</h2>)}
                  <div className='absolute mt-[2vh] flex-col ml-74 sm:ml-68 flex gap-[2vh]'>
                    <button onClick={() => {
                      if (token) {
                        if (liked.some((prodd: any) => prodd.id == prod.id)) {
                          RemoveFromWish(prod.id)
                        }
                        else {
                          AddToWish(prod)
                        }
                        const NewWish = GetWishList()
                        setLiked(NewWish)
                      }
                      else {
                        navigate("/register")
                      }
                    }} className={ "bg-[white] cursor-pointer p-2 rounded-4xl"}><Trash /></button>
                    <button onClick={() => navigate(`/info/${prod.id}`)} className='bg-[white] cursor-pointer p-2 rounded-4xl'><Eye /></button>
                  </div>
                  <div className='w-full h-75.5'><img className="rounded-2xl h-75.5 w-full bg-[#F5F5F5]" src={`https://store-api.softclub.tj/images/${prod.image}`} /></div>
                  <button onClick={() => {
                    if (token) {
                      AddProductToCart(prod.id)
                    }
                    else {
                      navigate("/register")
                    }
                  }} className='font-semibold rounded-b-2xl bg-black p-[1vh_36%] sm:p-[1vh_8%] w-[90%] sm:w-[21.6%] absolute mt-[36vh] cursor-pointer text-white adding hidden'>Add Cart</button>
                  <h1 className='text-2xl font-semibold'>{prod.productName}</h1>
                  <div className="flex gap-4">
                      <p className="text-[#DB4444] font-semibold text-[15px]">${prod.hasDiscount ? prod.discountPrice : prod.price}</p>
                      {prod.hasDiscount && (<p className='font-semibold text-[15px] line-through text-[#000000c0]'>${prod.price}</p>)}
                  </div>
                  <div className='flex gap-3 items-center'>
                    <Rating
                      name="text-feedback"
                      value={4}
                      readOnly
                      precision={0.5}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <h1 className='text-[#000000bd] font-semibold text-[15px]'>(88)</h1>
                  </div>
                </div>
            })
          }
        </aside>
        <section className='flex flex-col gap-[4vh] items-start'>
          <aside className='flex w-full items-center gap-[17%] sm:gap-[67%] justify-between'>
            <h1 className='pl-4 border-l-8 rounded-l-[5px] text-[#DB4444] font-bold text-xl border-l-[#DB4444] pt-[1vh] pb-[1vh]'>Just For You</h1>
            <button onClick={() => navigate("/products")} className='border-2 rounded-md font-semibold sm:text-xl text-[#00000090] p-[2vh_40px] m-[0_auto] cursor-pointer'>View All</button>
          </aside>
          <aside className="w-full flex flex-wrap gap-[8vh_1%]">
            {
              products?.slice(0, 4).map((prod: IProduct) => {
                  return <div key={prod.id} className="flex hover:*:flex hover:transition-all w-full sm:w-[24%] duration-1000 flex-col items-start text-start gap-[2vh]">
                  {prod.hasDiscount && (<h2 className='absolute mt-[2vh] ml-4 bg-[#DB4444] p-[1vh_15px] text-white font-semibold rounded-xl'>{Math.floor(100 - prod.price/(prod.discountPrice/100))}%</h2>)}
                    <div className='absolute mt-[2vh] flex-col ml-74 sm:ml-68 flex gap-[2vh]'>
                      <button onClick={() => {
                        if (token) {
                          if (liked.some((prodd: any) => prodd.id == prod.id)) {
                            RemoveFromWish(prod.id)
                          }
                          else {
                            AddToWish(prod)
                          }
                          const NewWish = GetWishList()
                          setLiked(NewWish)
                        }
                        else {
                          navigate("/register")
                        }
                      }} className={liked.some((prodd: any) => prodd.id == prod.id) ? "bg-[red] text-white cursor-pointer p-2 rounded-4xl" : "bg-[white] cursor-pointer p-2 rounded-4xl"}><Heart /></button>
                      <button  onClick={() => navigate(`/info/${prod.id}`)} className='bg-[white] cursor-pointer p-2 rounded-4xl'><Eye /></button>
                    </div>
                    <div className='w-full h-62.5'><img className="rounded-2xl h-62.5 w-full bg-[#F5F5F5]" src={`https://store-api.softclub.tj/images/${prod.image}`} /></div>
                    <button onClick={() => {
                      if (token) {
                        AddProductToCart(prod.id)
                      }
                      else {
                        navigate("/register")
                      }
                    }} className='font-semibold rounded-b-2xl bg-black p-[1vh_35%] sm:p-[1vh_8%] w-[90%] sm:w-[21.6%] absolute mt-[29vh] cursor-pointer text-white adding hidden'>Add Cart</button>
                    <h1 className='text-2xl font-semibold'>{prod.productName}</h1>
                    <div className="flex gap-4">
                      <p className="text-[#DB4444] font-semibold text-[15px]">${prod.hasDiscount ? prod.discountPrice : prod.price}</p>
                      {prod.hasDiscount && (<p className='font-semibold text-[15px] line-through text-[#000000c0]'>${prod.price}</p>)}
                    </div>
                    <div className='flex gap-3 items-center'>
                      <Rating
                        name="text-feedback"
                        value={4}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      <h1 className='text-[#000000bd] font-semibold text-[15px]'>(88)</h1>
                    </div>
                  </div>
              })
            }
            {isLoading && (<CircularProgress className='m-[3vh_auto]' />)}
          </aside>
        </section>
    </main>
  )
}

export default Wishlist