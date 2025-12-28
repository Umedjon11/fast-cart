import { Rating, Slider, Stack, TextField } from "@mui/material";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

function valuetext(value: number) {
  return `${value}°C`;
}

const Products = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="space-y-6 p-4">
      {/* Заголовок и сортировка */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Explore Our Products
        </h1>
        <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition">
          <option value="">Populary</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Категории */}
      <div className="w-[380px] border border-gray-200 rounded-md p-3">
        <div className="flex justify-between items-center cursor-pointer">
          <p className="font-medium text-gray-700">Category</p>
          <ChevronUp className="text-gray-400" />
        </div>
        <div className="mt-2 space-y-1">
          <p className="text-red-500 font-semibold cursor-pointer">
            All products
          </p>
          <p className="text-gray-600 cursor-pointer hover:text-red-500 transition">
            Electronics
          </p>
          <p className="text-gray-600 cursor-pointer hover:text-red-500 transition">
            Home & Lifestyle
          </p>
          <p className="text-gray-600 cursor-pointer hover:text-red-500 transition">
            Sports & Outdoor
          </p>
          <p className="text-red-500 font-semibold cursor-pointer">See all</p>
        </div>
      </div>

      {/* Brands */}
      <div className="w-[380px] border border-gray-200 rounded-md p-3">
        <div className="flex justify-between items-center cursor-pointer">
          <p className="font-medium text-gray-700">Brands</p>
          <ChevronUp className="text-gray-400" />
        </div>
        <div className="mt-2 space-y-2">
          {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="accent-red-500 w-4 h-4 rounded"
              />
              <span className="text-gray-700">{brand}</span>
            </label>
          ))}
          <p className="text-red-500 font-semibold cursor-pointer">See all</p>
        </div>
      </div>

      {/* Features */}
      <div className="w-[380px] border border-gray-200 rounded-md p-3">
        <div className="flex justify-between items-center cursor-pointer">
          <p className="font-medium text-gray-700">Features</p>
          <ChevronUp className="text-gray-400" />
        </div>
        <div className="mt-2 space-y-2">
          {[
            "Metallic",
            "Plastic cover",
            "8GB Ram",
            "Super power",
            "Large Memory",
          ].map((feature) => (
            <label
              key={feature}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="accent-red-500 w-4 h-4 rounded"
              />
              <span className="text-gray-700">{feature}</span>
            </label>
          ))}
          <p className="text-red-500 font-semibold cursor-pointer">See all</p>
        </div>
      </div>

      {/* Price Range */}
      <div className="w-[380px] border border-gray-200 rounded-md p-3">
        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-700">Price range</p>
          <ChevronUp className="text-gray-400" />
        </div>
        <Slider
          sx={{ width: 300, color: "#DB4444", mt: 2 }}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <div className="flex gap-2 mt-2">
          <TextField
            sx={{ width: 130 }}
            label="Min"
            type="number"
            value={value[0]}
            onChange={(e) => setValue([Number(e.target.value), value[1]])}
            variant="outlined"
          />
          <TextField
            sx={{ width: 130 }}
            label="Max"
            type="number"
            value={value[1]}
            onChange={(e) => setValue([value[0], Number(e.target.value)])}
            variant="outlined"
          />
        </div>
        <button className="w-full mt-3 py-2 bg-white text-red-500 border-2 border-red-500 rounded-md font-semibold hover:bg-red-500 hover:text-white transition">
          Apply
        </button>
      </div>

      {/* Ratings */}
      <div className="w-[380px] border border-gray-200 rounded-md p-3">
        <div className="flex justify-between items-center cursor-pointer">
          <p className="font-medium text-gray-700">Ratings</p>
          <ChevronUp className="text-gray-400" />
        </div>
        <div className="mt-2 space-y-2">
          {[2.5, 3, 4, 4.5].map((rating, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-red-500 w-4 h-4 rounded"
              />
              <Stack spacing={0}>
                <Rating
                  name={`rating-${idx}`}
                  defaultValue={rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
