import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <main className="flex flex-col gap-[15vh] w-[90%] m-[-25vh_auto_-10vh_auto]">
      <section className="flex items-center justify-between">
        <aside className="flex flex-col pr-14 border-r pt-[3vh] pb-[3vh] border-r-[#0000001A] gap-[2vh]">
          <p>Woman's Fashion</p>
          <p>Men's Fashion</p>
          <p>Electronics</p>
          <p>Home & LifeStyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby's & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </aside>
        <Swiper
        cssMode={true}
        pagination={{clickable: true}}
        mousewheel={true}
        keyboard={true}
        autoplay={{delay: 3000}}
        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
        className='w-[80%] h-[70vh] text-white'
      >
        <SwiperSlide style={{backgroundImage: "url(https://www.shutterstock.com/image-illustration/iphone-15-pro-max-render-260nw-2410630323.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 11 Pro Max</p>
            </div>
            <h1 className='text-6xl/[10vh] text-start font-bold w-[35%]'>Up to 10% off Voucher</h1>
            <button className='flex gap-4 cursor-pointer'>  
              <h2 className='text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qXRAuYbMnBeT8L2iS1N3vqNLk6NEWyLvQQ&s)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 14 Pro Max</p>
            </div>
            <h1 className='text-6xl/[10vh] text-start font-bold w-[35%]'>Up to 15% off Voucher</h1>
            <button className='flex gap-4 cursor-pointer'>  
              <h2 className='text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(https://www.indiaistore.com/files/uploads/products/iphone-15-pro/iphone-15-new/1-d.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 15 Pro Max</p>
            </div>
            <h1 className='text-6xl/[10vh] text-start font-bold w-[35%]'>Up to 20% off Voucher</h1>
            <button className='flex gap-4 cursor-pointer'>  
              <h2 className='text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PSRtURuhkYROY06mzw_-EIpGuAkcfARSyw&s)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 16 Pro </p>
            </div>
            <h1 className='text-6xl/[10vh] text-start font-bold w-[35%]'>Up to 5% off Voucher</h1>
            <button className='flex gap-4 cursor-pointer'>  
              <h2 className='text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(https://s1.dmcdn.net/v/Z0cZU1e_7UigN_A2B/x1080)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 17 Pro Max</p>
            </div>
            <h1 className='text-6xl/[10vh] text-start font-bold w-[35%]'>Up to 10% off Voucher</h1>
            <button className='flex gap-4 cursor-pointer'>  
              <h2 className='text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url(https://i.ytimg.com/vi/bAtPuYR8Ulk/maxresdefault.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <aside className='flex flex-col gap-[4vh] pl-[4%] items-start w-full'>
            <div className='flex w-[20%] gap-5 items-center'>
              <div className='w-[15%]'>
                <img className='w-7.5 h-7.5' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png' />
              </div>
              <p className='text-[14px] font-semibold'>Iphone 17 Air</p>
            </div>
            <h1 className='text-6xl/[10vh] text-start font-bold w-[35%]'>Up to 10% off Voucher</h1>
            <button className='flex gap-4 cursor-pointer'>  
              <h2 className='text-xl pb-[1vh] border-b-2 items-center'>Shop Now</h2>
              <ArrowRight />
            </button>
          </aside>
        </SwiperSlide>
      </Swiper>
      </section>
    </main>
  )
}

export default Home