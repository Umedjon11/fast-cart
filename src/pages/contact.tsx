import { TextField } from "@mui/material"
import { Mail, Phone } from "lucide-react"
import { Link } from "react-router"

const Contact = () => {
  return (
    <main className="flex flex-col gap-[10vh] w-[90%] m-[-10vh_auto]">
      <section className="flex gap-1 items-center font-semibold">
        <Link to="/" className="text-[#00000090]">Home /</Link>
        <p>Cantact</p>
      </section>
      <section className="flex flex-col gap-[4vh] items-start sm:flex-row justify-between">
        <aside className="w-full sm:w-[35%] shadow-2xl rounded-xl p-[4vh_30px] flex flex-col gap-[4vh]">
          <aside className="flex flex-col gap-[2vh] pb-[4vh]">
            <div className="flex gap-5 items-center">
              <div className="bg-[#DB4444] text-white p-3 rounded-4xl">
                <Phone />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold">Call To Us</h1>
            </div>
            <p className="sm:text-xl font-semibold">We are avaible 24/7, 7 days a week.</p>
            <p className="sm:text-xl font-semibold">Phone: +8801611112222</p>
          </aside>
          <h1 className="w-full border-b-2 border-b-[#D9D9D9]"></h1>
          <aside className="flex flex-col gap-[2vh] pb-[4vh] borber-b-2 border-b-[#D9D9D9]">
            <div className="flex gap-5 items-center">
              <div className="bg-[#DB4444] text-white p-3 rounded-4xl">
                <Mail />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold">Write To Us</h1>
            </div>
            <p className="sm:text-xl sm:w-[80%] font-semibold">Fill out our form and we will contact you within 24 hours.</p>
            <p className="sm:text-xl font-semibold">Emails: customer@exclusive.com</p>
            <p className="sm:text-xl font-semibold">Emails: support@exclusive.com</p>
          </aside>
        </aside>
        <aside className="w-full bg-white shadow-2xl p-8.75 rounded-xl sm:w-[60%] flex justify-between flex-wrap gap-y-[3vh]">
          <TextField className="w-full sm:w-[31%]"  id="outlined-basic" label="Name" variant="outlined" />
          <TextField className="w-full sm:w-[31%]"  id="outlined-basic" label="Email" variant="outlined" />
          <TextField className="w-full sm:w-[31%]"  id="outlined-basic" label="Phone" variant="outlined" />
          <TextField id="outlined-basic" label="Your message" className="sm:min-h-[47vh]" multiline fullWidth variant="outlined" />
          <button className="text-white p-[2vh_40px] bg-[#DB4444] rounded-xl ml-auto">Send Message</button>
        </aside>
      </section>
    </main>
  )
}

export default Contact