import { SendHorizontal } from 'lucide-react'


const Footer = () => {
  return (
    <div className='bg-black p-[5vh_5%] flex text-white justify-between flex-wrap'>
        <aside className='flex flex-col gap-[3vh]'>
            <h1 className='text-3xl font-bold'>Exclusive</h1>
            <h3 className='text-xl font-semibold'>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className='border-2 border-white rounded-xl flex gap-4 p-[2vh_15px]'>
                <input placeholder='Enter your email' />
                <SendHorizontal />
            </div>
        </aside>
    </div>
  )
}

export default Footer