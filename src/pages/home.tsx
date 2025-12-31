import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight, Eye, Headset, Heart, ShieldCheck, StarIcon, Van } from 'lucide-react';
import { useProducts, type IProduct } from '../store/products';
import { useEffect, useRef } from 'react';
import { CircularProgress, Rating } from '@mui/material';
import { GetToken } from '../../utils/axios';
import { useNavigate } from 'react-router';
import { useCategories } from '../store/categories';
import Boombox from "../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
import { useCart } from '../store/cart';
import { useSubCategory } from '../store/subCategory';

const Home = () => {

  const { products, GetProducts, isLoading } = useProducts((state: any) => state)
  const { categories, GetCateries } = useCategories((state: any) => state)
  const { subCategories, isLoadingSubCategory, GetSubCategories } = useSubCategory((state: any) => state)
  const { AddProductToCart } = useCart((state: any) => state)

  const token = GetToken()
  const navigate = useNavigate()

  const SwiperRef = useRef<null | any>(null)
  const CategoriesSwiperRef = useRef<null | any>(null)

  useEffect(() => {
    GetProducts()
    GetCateries()
    GetSubCategories()
  }, [])

  return (
    <main className="flex flex-col gap-[15vh] w-[90%] m-[-25vh_auto_-10vh_auto]">
      <section className="flex flex-col gap-[5vh] sm:flex-row items-center justify-between">
        <aside className="hidden sm:flex flex-col pr-14 border-r pt-[3vh] w-[15%] pb-[3vh] border-r-[#0000001A] gap-[2vh]">
          {
            subCategories.slice(0, 9).map((sub: any) => {
              <p key={sub.id} className='cursor-pointer line-clamp-1'>{sub.subCategoryName}</p>
            })
          }
          {isLoadingSubCategory && (<CircularProgress className='m-auto' size={50} />)}
        </aside>
        <Swiper
        cssMode={true}
        pagination={{clickable: true}}
        mousewheel={true}
        keyboard={true}
        autoplay={{delay: 3000}}
        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
        className='w-full sm:w-[80%] rounded-2xl h-[70vh] text-white'
      >
        <SwiperSlide style={{backgroundImage: "url(https://www.shutterstock.com/image-illustration/iphone-15-pro-max-render-260nw-2410630323.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex sm:w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 11 Pro Max</p>
            </div>
            <h1 className='text-2xl sm:text-6xl/[10vh] text-start font-bold sm:w-[35%]'>Up to 10% off Voucher</h1>
            <button onClick={() => navigate("/products")} className='flex gap-4 cursor-pointer'>  
              <h2 className='sm:text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qXRAuYbMnBeT8L2iS1N3vqNLk6NEWyLvQQ&s)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex sm:w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 14 Pro Max</p>
            </div>
            <h1 className='text-2xl sm:text-6xl/[10vh] text-start font-bold sm:w-[35%]'>Up to 15% off Voucher</h1>
            <button onClick={() => navigate("/products")} className='flex gap-4 cursor-pointer'>  
              <h2 className='sm:text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(https://www.indiaistore.com/files/uploads/products/iphone-15-pro/iphone-15-new/1-d.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex sm:w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 15 Pro Max</p>
            </div>
            <h1 className='text-2xl sm:text-6xl/[10vh] text-start font-bold sm:w-[35%]'>Up to 20% off Voucher</h1>
            <button onClick={() => navigate("/products")} className='flex gap-4 cursor-pointer'>  
              <h2 className='sm:text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PSRtURuhkYROY06mzw_-EIpGuAkcfARSyw&s)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex sm:w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 16 Pro </p>
            </div>
            <h1 className='text-2xl sm:text-6xl/[10vh] text-start font-bold sm:w-[35%]'>Up to 5% off Voucher</h1>
            <button onClick={() => navigate("/products")} className='flex gap-4 cursor-pointer'>  
              <h2 className='sm:text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(https://s1.dmcdn.net/v/Z0cZU1e_7UigN_A2B/x1080)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex sm:w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 17 Pro Max</p>
            </div>
            <h1 className='text-2xl sm:text-6xl/[10vh] text-start font-bold sm:w-[35%]'>Up to 10% off Voucher</h1>
            <button onClick={() => navigate("/products")} className='flex gap-4 cursor-pointer'>  
              <h2 className='sm:text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(https://i.ytimg.com/vi/bAtPuYR8Ulk/maxresdefault.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex sm:w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 17 Air</p>
            </div>
            <h1 className='text-2xl sm:text-6xl/[10vh] text-start font-bold sm:w-[35%]'>Up to 10% off Voucher</h1>
            <button onClick={() => navigate("/products")} className='flex gap-4 cursor-pointer'>  
              <h2 className='sm:text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
      </Swiper>
      </section>
      <section className='flex flex-col gap-[4vh] items-start'>
        <h1 className='pl-4 border-l-8 rounded-l-[5px] text-[#DB4444] font-bold text-xl border-l-[#DB4444] pt-[1vh] pb-[1vh]'>Today's</h1>
        <aside className='flex w-full justify-between'>
          <div className='flex gap-4 items-center'>
            <h1 className='text-xl sm:text-3xl font-bold'>Flash Sales</h1>
          </div>
          <div className='flex gap-4'>
            <button onClick={() => SwiperRef.current.swiper.slidePrev()} className='p-4 rounded-4xl cursor-pointer bg-[#F5F5F5] '><ChevronLeft /></button>
            <button onClick={() => SwiperRef.current.swiper.slideNext()} className='p-4 rounded-4xl cursor-pointer bg-[#F5F5F5] '><ChevronRight /></button>
          </div>
        </aside>
        <Swiper
          ref={SwiperRef}
          slidesPerView={1}
          breakpoints={{700:{slidesPerView: 4}}}
          spaceBetween={30}
          centeredSlides={true}
          modules={[Pagination]}
          className="w-full mt-[-4vh] h-[70vh]"
        >
          {
            products?.map((prod: IProduct) => {
              return <SwiperSlide key={prod.id} className='w-full sm:w-[30%]'>
                <div className="flex hover:*:flex hover:transition-all duration-1000 flex-col w-full items-start text-start gap-[2vh]">
                  <h2 className='absolute mt-[2vh] ml-4 bg-[#DB4444] p-[1vh_15px] text-white font-semibold rounded-xl'>-{Math.floor(100 - prod.price/(prod.discountPrice/100))}%</h2>
                  <div className='absolute mt-[2vh] flex-col ml-75 sm:ml-65 flex gap-[2vh]'>
                    <button onClick={() => {
                      if (token) {
                        navigate("/wishlist")
                      }
                      else {
                        navigate("/register")
                      }
                    }} className='bg-[white] cursor-pointer p-2 rounded-4xl'><Heart /></button>
                    <button  onClick={() => navigate(`/info/${prod.id}`)} className='bg-[white] cursor-pointer p-2 rounded-4xl'><Eye /></button>
                  </div>
                  <div className='w-full h-62.5'><img className="rounded-2xl bg-[#F5F5F5]" src={`https://store-api.softclub.tj/images/${prod.image}`} /></div>
                  <button onClick={() => {
                    if (token) {
                      AddProductToCart(prod.id)
                    }
                    else {
                      navigate("/register")
                    }
                  }} className='font-semibold rounded-b-2xl bg-black p-[1vh_38%] w-full absolute mt-[29vh] cursor-pointer text-white adding hidden'>Add Cart</button>
                  <h1 className='text-2xl font-semibold'>{prod.productName}</h1>
                  <div className="flex gap-4">
                      <p className="text-[#DB4444] font-semibold text-[15px]">${prod.discountPrice}</p>
                      <p className='font-semibold text-[15px] line-through text-[#000000c0]'>${prod.price}</p>
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
              </SwiperSlide>
            })
          }
          {isLoading && (<CircularProgress className='m-[3vh_auto]' />)}
        </Swiper>
        <button onClick={() => navigate("/products")} className='bg-[#DB4444] font-semibold text-xl text-white p-[2vh_40px] rounded-xl m-[0_auto] cursor-pointer'>View All Products</button>
      </section>
      <section className='flex flex-col gap-[4vh] items-start'>
        <h1 className='pl-4 border-l-8 rounded-l-[5px] text-[#DB4444] font-bold text-xl border-l-[#DB4444] pt-[1vh] pb-[1vh]'>Categories</h1>
        <aside className='flex w-full justify-between'>
          <div className='flex gap-4 items-center'>
            <h1 className='text-xl sm:text-3xl font-bold'>Browse By Category</h1>
          </div>
          <div className='flex gap-4'>
            <button onClick={() => CategoriesSwiperRef.current.swiper.slidePrev()} className='p-4 rounded-4xl cursor-pointer bg-[#F5F5F5] '><ChevronLeft /></button>
            <button onClick={() => CategoriesSwiperRef.current.swiper.slideNext()} className='p-4 rounded-4xl cursor-pointer bg-[#F5F5F5] '><ChevronRight /></button>
          </div>
        </aside>
        <Swiper
          ref={CategoriesSwiperRef}
          slidesPerView={1}
          breakpoints={{700:{slidesPerView: 4}}}
          spaceBetween={30}
          centeredSlides={true}
          modules={[Pagination]}
          className="w-full h-[30vh]"
        >
          {
            categories?.map((cat: any) => {
              return <SwiperSlide key={cat.id} className='w-10 border-2 cursor-pointer border-[#0000004D] p-5 rounded-2xl'>
                <img className='rounded-2xl' src={`https://store-api.softclub.tj/images/${cat.categoryImage}`} />
              </SwiperSlide>
            })
          }
          {isLoading && (<CircularProgress className='m-[3vh_auto]' />)}
        </Swiper>
      </section>
      <section className='flex flex-col gap-[4vh] items-start'>
        <h1 className='pl-4 border-l-8 rounded-l-[5px] text-[#DB4444] font-bold text-xl border-l-[#DB4444] pt-[1vh] pb-[1vh]'>This Month</h1>
        <aside className='flex w-full items-center gap-[17%] sm:gap-[67%] justify-between'>
        <h1 className='text-xl w-[40%] sm:w-fit sm:text-3xl font-bold'>Best Selling Products</h1>
        <button onClick={() => navigate("/products")} className='bg-[#DB4444] font-semibold sm:text-xl text-white p-[2vh_40px] m-[0_auto] cursor-pointer'>View All</button>
        </aside>
        <aside className="w-full flex flex-wrap gap-[8vh_1%]">
          {
            products?.slice(0, 4).map((prod: IProduct) => {
                return <div key={prod.id} className="flex hover:*:flex hover:transition-all w-full sm:w-[24%] duration-1000 flex-col items-start text-start gap-[2vh]">
                  <h2 className='absolute mt-[2vh] ml-4 bg-[#DB4444] p-[1vh_15px] text-white font-semibold rounded-xl'>-{Math.floor(100 - prod.price/(prod.discountPrice/100))}%</h2>
                  <div className='absolute mt-[2vh] flex-col ml-74 sm:ml-68 flex gap-[2vh]'>
                    <button onClick={() => {
                      if (token) {
                        navigate("/wishlist")
                      }
                      else {
                        navigate("/register")
                      }
                    }} className='bg-[white] cursor-pointer p-2 rounded-4xl'><Heart /></button>
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
                  }} className='font-semibold rounded-b-2xl bg-black p-[1vh_35%] sm:p-[1vh_8%] w-[90%] sm:w-[21.1%] absolute mt-[29vh] cursor-pointer text-white adding hidden'>Add Cart</button>
                  <h1 className='text-2xl font-semibold'>{prod.productName}</h1>
                  <div className="flex gap-4">
                      <p className="text-[#DB4444] font-semibold text-[15px]">${prod.discountPrice}</p>
                      <p className='font-semibold text-[15px] line-through text-[#000000c0]'>${prod.price}</p>
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
      <section className='bg-black flex-col-reverse sm:flex-row gap-y-[5vh] text-white p-[4vh_5%] sm:p-[10vh_5%] flex justify-between w-full'>
        <aside className='flex flex-col sm:w-[35%] gap-[3vh]'>
          <p className='text-[#00FF66] font-bold'>Categories</p>
          <h1 className='text-3xl sm:text-5xl font-bold'>Enhance Your Music Experience</h1>
          <div className='flex gap-3 items-center'>
            <div className='bg-[white] text-black text-center p-[12px_20px] rounded-4xl'>
              <h1 className='font-bold'>5</h1>
              <p className='text-[12px] font-semibold'>Days</p>
            </div>
            <div className='bg-[white] text-black text-center p-[12px_16px] rounded-4xl'>
              <h1 className='font-bold'>23</h1>
              <p className='text-[12px] font-semibold'>Hours</p>
            </div>
            <div className='bg-[white] text-black text-center p-[12px_10px] rounded-4xl'>
              <h1 className='font-bold'>59</h1>
              <p className='text-[12px] font-semibold'>Minutes</p>
            </div>
            <div className='bg-[white] text-black text-center p-[12px_10px] rounded-4xl'>
              <h1 className='font-bold'>35</h1>
              <p className='text-[12px] font-semibold'>Seconds</p>
            </div>
          </div>
          <button onClick={() => navigate("/products")} className='font-semibold text-black bg-[#00FF66] p-[2vh_50px] rounded-[5px] sm:w-fit'>Buy Now!</button>
        </aside>
        <img src={Boombox} />
      </section>
      <section className='flex flex-col gap-[4vh] items-start'>
        <h1 className='pl-4 border-l-8 rounded-l-[5px] text-[#DB4444] font-bold text-xl border-l-[#DB4444] pt-[1vh] pb-[1vh]'>Our Products</h1>
        <aside className='flex w-full items-center gap-[67%] justify-between'>
        <h1 className='text-3xl font-bold'>Explore Our Products</h1>
        </aside>
        <aside className="w-full flex-wrap flex gap-[8vh_1%]">
          {
            products?.slice(0, 8).map((prod: IProduct) => {
                return <div key={prod.id} className="flex hover:*:flex hover:transition-all w-full sm:w-[24%] duration-1000 flex-col items-start text-start gap-[2vh]">
                  <h2 className='absolute mt-[2vh] ml-4 bg-[#DB4444] p-[1vh_15px] text-white font-semibold rounded-xl'>-{Math.floor(100 - prod.price/(prod.discountPrice/100))}%</h2>
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
                      <p className="text-[#DB4444] font-semibold text-[15px]">${prod.discountPrice}</p>
                      <p className='font-semibold text-[15px] line-through text-[#000000c0]'>${prod.price}</p>
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
        <button onClick={() => navigate("/products")} className='bg-[#DB4444] font-semibold text-xl text-white p-[2vh_40px] m-[0_auto] cursor-pointer rounded-xl mt-[4vh]'>View All Products</button>
      </section>
      <section className='flex flex-col gap-[4vh] items-start'>
        <h1 className='pl-4 border-l-8 rounded-l-[5px] text-[#DB4444] font-bold text-xl border-l-[#DB4444] pt-[1vh] pb-[1vh]'>Featured</h1>
        <aside className='flex w-full items-center gap-[67%] justify-between'>
        <h1 className='text-3xl font-bold'>New Arrival</h1>
        </aside>
        <aside className='flex flex-col gap-[5vh] sm:flex-row w-full justify-between'>
          <div className='w-full sm:w-[48%] h-80 sm:h-168 PsBackground flex flex-col gap-[2vh] items-start justify-end pb-[4vh] pl-[5%] text-white'>
            <h1 className='text-2xl font-semibold'>PlayStation 5</h1>
            <p className='w-[80%] sm:w-[40%]'>Black and White version of the PS5 coming out on sale.</p>
            <button className='border-b-2 border-b-[white] pb-[0.5vh] font-semibold cursor-pointer' onClick={() => navigate("/products")}>Shop Now</button>
          </div>
          <div className='flex flex-col w-full sm:w-[55%] gap-[4vh]'>
            <div className='w-full h-80 WomenBackground flex flex-col gap-[2vh] items-start justify-end pb-[4vh] pl-[5%] text-white'>
              <h1 className='text-2xl font-semibold'>Women’s Collections</h1>
              <p className='w-[80%] sm:w-[40%]'>Featured woman collections that give you another vibe.</p>
              <button className='border-b-2 border-b-[white] pb-[0.5vh] font-semibold cursor-pointer' onClick={() => navigate("/products")}>Shop Now</button>
            </div>
            <div className='flex justify-between w-full flex-col gap-[4vh] sm:flex-row'>
              <div className='w-full sm:w-[48%] h-80 SpeakerBackground flex flex-col gap-[2vh] items-start justify-end pb-[4vh] pl-[5%] text-white'>
                <h1 className='text-2xl font-semibold'>Speakers</h1>
                <p className='w-[80%]'>Amazon wireless speakers.</p>
                <button className='border-b-2 border-b-[white] pb-[0.5vh] font-semibold cursor-pointer' onClick={() => navigate("/products")}>Shop Now</button>
              </div>
              <div className='w-full sm:w-[48%] h-80 AromatBackground flex flex-col gap-[2vh] items-start justify-end pb-[4vh] pl-[5%] text-white'>
                <h1 className='text-2xl font-semibold'>Perfume</h1>
                <p className='w-[80%]'>GUCCI INTENSE OUD EDP</p>
                <button className='border-b-2 border-b-[white] pb-[0.5vh] font-semibold cursor-pointer' onClick={() => navigate("/products")}>Shop Now</button>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <section className='flex justify-between flex-col gap-[5vh] sm:flex-row'>
        <div className='flex flex-col gap-[1vh] items-center sm:w-[30%] w-full'>
          <div className='p-6 rounded-full bg-[black] text-white'><Van size={40} /></div>
          <h1 className='text-2xl font-semibold'>FREE AND FAST DELIVERY</h1>
          <p className='font-semibold'>Free delivery for all orders over $140</p>
        </div>
        <div className='flex flex-col gap-[1vh] items-center sm:w-[30%] w-full'>
          <div className='p-6 rounded-full bg-[black] text-white'><Headset size={40} /></div>
          <h1 className='text-2xl font-semibold'>24/7 CUSTOMER SERVICE</h1>
          <p className='font-semibold'>Friendly 24/7 customer support</p>
        </div>
        <div className='flex flex-col gap-[1vh] items-center sm:w-[30%] w-full'>
          <div className='p-6 rounded-full bg-[black] text-white'><ShieldCheck size={40} /></div>
          <h1 className='text-2xl font-semibold'>MONEY BACK GUARANTEE</h1>
          <p className='font-semibold'>We reurn money within 30 days</p>
        </div>
      </section>
    </main>
  )
}

export default Home