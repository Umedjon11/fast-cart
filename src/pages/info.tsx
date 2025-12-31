import ImageMain from "../assets/InfoImg.png";
import ImageThumb1 from "../assets/Frame 895.png";
import ImageThumb2 from "../assets/Frame 919.png";
import ImageThumb3 from "../assets/Frame 897.png";
import ImageThumb4 from "../assets/Frame 919.png";
import Star from "../assets/Frame 922.png";
import ColorSample from "../assets/Colour Chnage.png";

const Info = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 p-10">
      <div className="flex gap-5">
        <div className="flex flex-col gap-4">
          <img
            src={ImageThumb1}
            alt="thumb1"
            className="w-20 h-20 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-500"
          />
          <img
            src={ImageThumb2}
            alt="thumb2"
            className="w-20 h-20 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-500"
          />
          <img
            src={ImageThumb3}
            alt="thumb3"
            className="w-20 h-20 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-500"
          />
          <img
            src={ImageThumb4}
            alt="thumb4"
            className="w-20 h-20 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-500"
          />
        </div>
        <div>
          <img
            src={ImageMain}
            alt="main"
            className="w-96 h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-md">
        <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>

        <div className="flex items-center gap-2">
          <img src={Star} alt="rating" className="w-24" />
          <span className="text-gray-500">(150 Reviews) • In Stock</span>
        </div>

        <p className="text-2xl font-bold text-green-600">$192.00</p>

        <p className="text-gray-600 text-sm">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble-free install & mess-free removal. Pressure
          sensitive.
        </p>

        <div className="flex items-center gap-4 mt-2">
          <p className="font-medium">Colours:</p>
          <img
            src={ColorSample}
            alt="colors"
            className="w-10 h-5 rounded-full cursor-pointer border"
          />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <p className="font-medium">Size:</p>
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className="px-3 py-1 border rounded hover:bg-gray-200"
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
            Buy Now
          </button>
          <button className="border px-4 py-2 rounded hover:bg-gray-100 transition-colors">
            ♥
          </button>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>🚚</span>
            <p>
              Free Delivery • Enter your postal code for delivery availability
            </p>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>↩️</span>
            <p>Return Delivery • Free 30 Days Delivery Returns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
