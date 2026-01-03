import { useProducts, type IProduct } from "../store/products";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { GetToken } from "../../utils/axios";
import { CircularProgress, Rating } from "@mui/material";
import { Eye, Heart, Minus, Plus, RefreshCcw, StarIcon, Van } from "lucide-react";
import { useCart } from "../store/cart";

const Info = () => {

  const {isLoadingById, productById, GetProductsById} = useProducts((state: any) => state)
  const { products, GetProducts, isLoading } = useProducts((state: any) => state)
  const [image, setImage] = useState<null | string>(null)
  const { AddProductToCart } = useCart((state: any) => state)
  const { id } = useParams()
  const [quty, setQuty] = useState(1)
  const token = GetToken()
  const navigate = useNavigate()

  useEffect(() => {
    GetProductsById(id)
    GetProducts()
  }, [])

  return (
    <main className="flex w-[90%] m-[-15vh_auto] flex-col gap-[15vh]">
      {!isLoadingById && (
        <div className="flex flex-col gap-[8vh] sm:flex-row justify-between">
        <div className="flex flex-col-reverse sm:flex-row gap-[4vh] sm:gap-[10vh]">
          <div className="flex flex-row gap-[2vh] max-h-150 overflow-auto sm:flex-col">
            {
              productById?.images?.map((img: any) => {
                return <img className="w-25 h-35 cursor-pointer rounded-xl" onClick={() => setImage(img.images)} key={img.id} src={`https://store-api.softclub.tj/images/${img.images}`} />
              })
            }
          </div>
          <img className="w-full sm:w-125 h-150 rounded-xl" src={`https://store-api.softclub.tj/images/${image ? image : productById?.images?.slice(0, 1)[0]?.images}`} />
        </div>
        <div className="flex flex-col sm:w-[44%] gap-[4vh] items-start">
          <h1 className="text-2xl font-semibold">{productById?.productName}</h1>
          <div className="flex gap-5">
            <Rating
              name="text-feedback"
              value={Math.floor(Math.random() * 5)}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <p className="text-[#00000090]">(150 Reviews)</p>
            <p className="text-[#00000090]">|</p>
            <p className="text-[lime] text-md font-semibold">In Stock</p>
          </div>
          <h2 className="text-3xl font-bold">${productById?.discountPrice?.toFixed(2)}</h2>
          <p className="text-[#00000090] border-b-2 pb-[2vh] w-full sm:w-[90%]">{productById?.description}</p>
          <p className="flex gap-7 items-center text-xl"><span>Colours:</span> <div className={`bg-[${productById?.color}] mt-2 w-6 h-6 rounded-4xl`}></div></p>
          {productById?.size && (<p className="flex gap-7 items-center text-xl"><span>Size:</span> <div className="p-[0.5vh_15px] rounded-xl border border-[#00000080] text-[#00000080]">{productById?.size}</div></p>)}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex">
              <button onClick={() => {
                if(quty>0) {
                  setQuty(quty-1)
                }
              }} className="p-[2vh_20px] border border-[#00000090] text-[#00000090] cursor-pointer rounded-l-xl"><Minus /></button>
              <p className="p-[2vh_50px] border-t border-t-[#00000090] border-b border-b-[#00000090]">{quty}</p>
              <button onClick={() => setQuty(quty+1)} className="p-[2vh_20px] border border-[#DB4444] bg-[#DB4444] text-white cursor-pointer rounded-r-xl"><Plus /></button>
            </div>
            <button onClick={() => {
              if (token) {
                AddProductToCart(productById?.id)
                navigate("/checkout")
              }
              else {
                navigate("/register")
              }
            }} className="sm:p-[2vh_60px] p-[2vh_100px] border border-[#DB4444] bg-[#DB4444] font-semibold text-white cursor-pointer rounded-xl">Buy Now</button>
            <button className="p-[2vh] border border-[#00000090] text-[#00000090] cursor-pointer rounded-xl"><Heart /></button>
          </div>
          <div className="flex flex-col sm:w-[90%]">
            <div className="p-[3vh_5%] flex justify-between items-center rounded-t-xl border-2 border-[#00000090]">
              <Van size={60} />
              <div className="flex flex-col gap-[1vh] w-[70%] sm:w-[80%]">
                <h1 className="font-bold text-[16px]">Free Delivery</h1>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="p-[3vh_5%] flex justify-between items-center rounded-b-xl border-2 border-[#00000090]">
              <RefreshCcw size={60} />
              <div className="flex flex-col gap-[1vh] w-[70%] sm:w-[80%]">
                <h1 className="font-bold text-[16px]">Return Delivery</h1>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      {isLoadingById && (<CircularProgress className="m-[5vh_auto]" size={80} />)}
      
      <section className='flex flex-col gap-[4vh] items-start'>
        <h1 className='pl-4 border-l-8 rounded-l-[5px] text-[#DB4444] font-bold text-xl border-l-[#DB4444] pt-[1vh] pb-[1vh]'>Related Item</h1>
        <aside className="w-full flex-wrap flex gap-[8vh_1%]">
          {
            products?.slice(0, 4).map((prod: IProduct) => {
                return <div key={prod.id} className="flex hover:*:flex hover:transition-all w-full sm:w-[24%] duration-1000 flex-col items-start text-start gap-[2vh]">
                  {prod.hasDiscount && (<h2 className='absolute mt-[2vh] ml-4 bg-[#DB4444] p-[1vh_15px] text-white font-semibold rounded-xl'>{Math.floor(100 - prod.price/(prod.discountPrice/100))}%</h2>)}
                  <div className='absolute mt-[2vh] flex-col ml-74 sm:ml-68 flex gap-[2vh]'>
                    <button onClick={() => {
                      if (token) {
                        navigate("/wishlist")
                      }
                      else {
                        navigate("/register")
                      }
                    }} className='bg-[white] cursor-pointer p-2 rounded-4xl'><Heart /></button>
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
                      value={Math.floor(Math.random() * 5)}
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
  );
};

export default Info;
