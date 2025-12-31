import ImageLeftG from "../assets/image G.jpg";
import IconImageAbout from "../assets/Services.png";
import IcnoImageAbout2 from "../assets/Services (1).png";
import IcnoImageAbout3 from "../assets/Services (2).png";
import IcnoImageAbout4 from "../assets/Services (3).png";
import IcnoImageAbout6 from "../assets/Services (4).png";
import IcnoImageAbout7 from "../assets/Services (5).png";
import IcnoImageAbout8 from "../assets/Services (6).png";
import ImageCardAbout from "../assets/surati mardak figma.jpg";

import { Instagram, Linkedin, Twitter } from "lucide-react";

const About = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-[50px] px-4 md:px-0">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-[60px] font-semibold mb-6">
            Our Story
          </h1>

          <p className="text-base md:text-[19px] text-gray-600 leading-7 mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>

          <p className="text-base md:text-[19px] text-gray-600 leading-7">
            Exclusive offers more than 1 million products and continues to grow
            rapidly, providing a diverse assortment across multiple consumer
            categories.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <img
            src={ImageLeftG}
            alt="Our Story"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols- md:grid-cols-4 gap-6 px-[20px] mt-[80px]">
        <div className="group border rounded-md p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-[#DB4444] hover:text-white hover:shadow-xl hover:-translate-y-1">
          <div className="w-19 h-19 rounded-full bg-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
            <img src={IconImageAbout} alt="" className="w-16 h-16" />
          </div>
          <p className="text-2xl font-bold">10.5k</p>
          <p className="text-sm opacity-80">Sellers active our site</p>
        </div>

        <div className="group border rounded-md p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-[#DB4444] hover:text-white hover:shadow-xl hover:-translate-y-1">
          <div className="w-19 h-19 rounded-full bg-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
            <img src={IcnoImageAbout2} alt="" className="w-16 h-16" />
          </div>
          <p className="text-2xl font-bold">33k</p>
          <p className="text-sm opacity-80">Monthly Product Sale</p>
        </div>

        <div className="group border rounded-md p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-[#DB4444] hover:text-white hover:shadow-xl hover:-translate-y-1">
          <div className="w-19 h-19 rounded-full bg-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
            <img src={IcnoImageAbout3} alt="" className="w-16 h-16" />
          </div>
          <p className="text-2xl font-bold">45.5k</p>
          <p className="text-sm opacity-80">Customer active on our site</p>
        </div>

        <div className="group border rounded-md p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-[#DB4444] hover:text-white hover:shadow-xl hover:-translate-y-1">
          <div className="w-19 h-19 rounded-full bg-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
            <img src={IcnoImageAbout4} alt="" className="w-16 h-16" />
          </div>
          <p className="text-2xl font-bold">25k</p>
          <p className="text-sm opacity-80">Annual gross sale on our site</p>
        </div>
      </div>

     <div className="flex flex-col md:flex-row justify-between px-[30px] mt-[100px] gap-6">
  <div className="flex flex-col w-full md:w-[700px] items-center bg-white p-5 rounded-xl shadow-md max-w-sm mx-auto">
    <img
      src={ImageCardAbout}
      alt="Tom Cruise"
      className="object-cover mb-4"
    />
    <h1 className="text-xl font-semibold mb-1">Tom Cruise</h1>
    <p className="text-gray-500 text-sm mb-4">Founder & Chairman</p>
    <div className="flex gap-4">
      <Twitter className="text-blue-500 hover:text-blue-700 cursor-pointer" />
      <Instagram className="text-pink-500 hover:text-pink-700 cursor-pointer" />
      <Linkedin className="text-blue-700 hover:text-blue-900 cursor-pointer" />
    </div>
  </div>

  <div className="flex flex-col w-full md:w-[700px] items-center bg-white p-5 rounded-xl shadow-md max-w-sm mx-auto">
    <img
      src={ImageCardAbout}
      alt="Tom Cruise"
      className="object-cover mb-4"
    />
    <h1 className="text-xl font-semibold mb-1">Tom Cruise</h1>
    <p className="text-gray-500 text-sm mb-4">Founder & Chairman</p>
    <div className="flex gap-4">
      <Twitter className="text-blue-500 hover:text-blue-700 cursor-pointer" />
      <Instagram className="text-pink-500 hover:text-pink-700 cursor-pointer" />
      <Linkedin className="text-blue-700 hover:text-blue-900 cursor-pointer" />
    </div>
  </div>

  <div className="flex flex-col w-full md:w-[700px] items-center bg-white p-5 rounded-xl shadow-md max-w-sm mx-auto">
    <img
      src={ImageCardAbout}
      alt="Tom Cruise"
      className="object-cover mb-4"
    />
    <h1 className="text-xl font-semibold mb-1">Tom Cruise</h1>
    <p className="text-gray-500 text-sm mb-4">Founder & Chairman</p>
    <div className="flex gap-4">
      <Twitter className="text-blue-500 hover:text-blue-700 cursor-pointer" />
      <Instagram className="text-pink-500 hover:text-pink-700 cursor-pointer" />
      <Linkedin className="text-blue-700 hover:text-blue-900 cursor-pointer" />
    </div>
  </div>
</div>


      <div className="flex flex-col md:flex-row  justify-center items-center gap-[35px] p-5 mt-[120px]">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl  text-center hover:shadow-lg transition-shadow duration-300 w-[380px]">
          <img
            src={IcnoImageAbout6}
            alt="Icon 1"
            className="w-23 h-23 mb-4 rounded-full bg-gray-100 p-2"
          />
          <h2 className="text-lg font-bold mb-2">FREE AND FAST DELIVERY</h2>
          <p className="text-gray-500 text-sm">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-xl  text-center hover:shadow-lg transition-shadow duration-300 w-[380px]">
          <img
            src={IcnoImageAbout7}
            alt="Icon 2"
            className="w-23 h-23 mb-4 rounded-full bg-gray-100 p-2"
          />
          <h2 className="text-lg font-bold mb-2">24/7 CUSTOMER SERVICE</h2>
          <p className="text-gray-500 text-sm">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-xl  text-center hover:shadow-lg transition-shadow duration-300 w-[380px]">
          <img
            src={IcnoImageAbout8}
            alt="Icon 3"
            className="w-23 h-23 mb-4 rounded-full bg-gray-100 p-2"
          />
          <h2 className="text-lg font-bold mb-2">MONEY BACK GUARANTEE</h2>
          <p className="text-gray-500 text-sm">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default About;
