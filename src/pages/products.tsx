import { CircularProgress, Drawer, Rating, Slider, Stack, TextField } from "@mui/material";
import { ChevronUp, Eye, Funnel, Heart, StarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useProducts, type IProduct } from "../store/products";
import { AddToWish, GetWishList, RemoveFromWish } from "../api/request/wishlist";
import { useCart } from "../store/cart";
import { GetToken } from "../../utils/axios";
import { useNavigate } from "react-router";
import { useCategories } from "../store/categories";
import { useBrands } from "../store/brands";
import { useSubCategory } from "../store/subCategory";

function valuetext(value: number) {
  return `${value}°C`;
}

const Products = () => {
  const [value, setValue] = useState<number[]>([0, 5000]);
  const token = GetToken()
  const navigate = useNavigate()

  const [openE, setOpenE] = useState(false);
  const toggleDrawerE = (newOpen: boolean) => () => {
    setOpenE(newOpen);
  };
  const { products, GetProducts, isLoading, setCategory, category, GetFiteredProducts } = useProducts((state: any) => state)
  const { AddProductToCart } = useCart((state: any) => state)
  const { categories, GetCateries } = useCategories((state: any) => state)
  const { brands, GetBrands } = useBrands((state: any) => state)
  const { GetSubCategories, subCategories } = useSubCategory((state: any) => state)
  
  const AccwishList = GetWishList()
  const [liked, setLiked] = useState(AccwishList)
  const [subCatery, setSubCategory] = useState("")
  const [brandId, setBrandId] = useState("")

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log(event);
    setValue(newValue as number[]);
    GetFiteredProducts(brandId, subCatery, value[0], value[1])
  };

  useEffect(() => {
    GetProducts()
    GetCateries()
    GetBrands()
    GetSubCategories()
  }, [])

  return (
    <div className="p-4 w-[95%] m-[-15vh_auto] flex flex-col gap-[5vh]">
      <div className="flex flex-col gap-y-[3vh] sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Explore Our Products
        </h1>
      </div>
        <button onClick={() => setOpenE(true)} className="sm:hidden border rounded-md font-semibold gap-5 text-[#00000090] border-[#00000090] text-xl flex items-center w-fit p-[1vh_40px]">Filters <Funnel /></button>
        <Drawer open={openE} onClose={toggleDrawerE(false)}>
          <aside onClick={() => setOpenE(false)} className="flex flex-col p-[2vh_10px] items-center gap-[2vh]">
            <div className="w-90 border border-gray-200 rounded-md p-3">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="font-medium text-gray-700">Category</p>
                <ChevronUp className="text-gray-400" />
              </div>
              <div className="flex flex-col gap-[1vh] items-start text-start">
                <button onClick={() => setCategory("")} className={category == "" ? "cursor-pointer text-[red]" : "cursor-pointer"}>All</button>
                {
                  categories.slice(0, 12).map((cat: any) => {
                    return <button key={cat.id} onClick={() => setCategory(cat.id)} className={category == cat.id ? "cursor-pointer text-[red]" : "cursor-pointer"}>{cat.categoryName}</button>
                  })
                }
              </div>
            </div>
              
            <div className="w-90 border border-gray-200 rounded-md p-3">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="font-medium text-gray-700">Brands</p>
                <ChevronUp className="text-gray-400" />
              </div>
              <div className="flex flex-col gap-[2vh] text-start items-start">
                <button onClick={() => {
                    setBrandId("")
                    GetFiteredProducts("", subCatery, value[0], value[1])
                  }} className={brandId == "" ? "text-[red] cursor-pointer" : "cursor-pointer"}>All</button>
                {
                brands.map((brand: any) => (
                  <p key={brand.id} onClick={() => {
                    setBrandId(brand.id)
                    GetFiteredProducts(brand.id, subCatery, value[0], value[1])
                  }} className={brandId == brand.id ? "text-[red] cursor-pointer" : "text-gray-700 cursor-pointer"}>{brand.brandName}</p>
                ))}
              </div>
            </div>
              
            <div className="w-90 border border-gray-200 rounded-md p-3">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="font-medium text-gray-700">Subcategories</p>
                <ChevronUp className="text-gray-400" />
              </div>
              <div className="flex flex-col gap-[2vh] text-start items-start">
                  <button onClick={() => {
                    setSubCategory("")
                    GetFiteredProducts(brandId, "", value[0], value[1])
                  }} className={subCatery == "" ? "text-[red] cursor-pointer" : "cursor-pointer"}>All</button>
                {
                subCategories.slice(0, 9).map((sub: any) => (
                  <button onClick={() => {
                    setSubCategory(sub.id)
                    GetFiteredProducts(brandId, sub.id, value[0], value[1])
                  }} key={sub.id} className={subCatery == sub.id ? "text-[red] cursor-pointer" : "cursor-pointer"}>{sub.subCategoryName}</button>
                ))}
              </div>
            </div>
              
            <div className="w-90 border border-gray-200 rounded-md p-3">
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
              <button onClick={() => {
                    GetFiteredProducts(brandId, subCatery, value[0], value[1])
              }} className="w-full mt-3 py-2 bg-white text-red-500 border-2 border-red-500 rounded-md font-semibold hover:bg-red-500 hover:text-white transition">
                Apply
              </button>
            </div>
            
            <div className="w-90 border border-gray-200 rounded-md p-3">
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
            </aside>
        </Drawer>

      <section className="flex w-full gap-[10%] justify-between items-start">
        <aside className="hidden sm:flex flex-col gap-[2vh]">
          <div className="w-95 border border-gray-200 rounded-md p-3">
          <div className="flex justify-between items-center cursor-pointer">
            <p className="font-medium text-gray-700">Category</p>
            <ChevronUp className="text-gray-400" />
          </div>
          <div className="flex flex-col gap-[1vh] items-start text-start">
            <button onClick={() => setCategory("")} className={category == "" ? "cursor-pointer text-[red]" : "cursor-pointer"}>All</button>
            {
              categories.slice(0, 12).map((cat: any) => {
                return <button key={cat.id} onClick={() => setCategory(cat.id)} className={category == cat.id ? "cursor-pointer text-[red]" : "cursor-pointer"}>{cat.categoryName}</button>
              })
            }
          </div>
        </div>

        <div className="w-95 border border-gray-200 rounded-md p-3">
          <div className="flex justify-between items-center cursor-pointer">
            <p className="font-medium text-gray-700">Brands</p>
            <ChevronUp className="text-gray-400" />
          </div>
          <div className="flex flex-col gap-[2vh] text-start items-start">
            <button onClick={() => {
                setBrandId("")
                GetFiteredProducts("", subCatery, value[0], value[1])
              }} className={brandId == "" ? "text-[red] cursor-pointer" : "cursor-pointer"}>All</button>
            {
            brands.map((brand: any) => (
              <p key={brand.id} onClick={() => {
                setBrandId(brand.id)
                GetFiteredProducts(brand.id, subCatery, value[0], value[1])
              }} className={brandId == brand.id ? "text-[red] cursor-pointer" : "text-gray-700 cursor-pointer"}>{brand.brandName}</p>
            ))}
          </div>
        </div>

        <div className="w-95 border border-gray-200 rounded-md p-3">
          <div className="flex justify-between items-center cursor-pointer">
            <p className="font-medium text-gray-700">Subcategories</p>
            <ChevronUp className="text-gray-400" />
          </div>
          <div className="flex flex-col gap-[2vh] text-start items-start">
              <button onClick={() => {
                setSubCategory("")
                GetFiteredProducts(brandId, "", value[0], value[1])
              }} className={subCatery == "" ? "text-[red] cursor-pointer" : "cursor-pointer"}>All</button>
            {
            subCategories.slice(0, 9).map((sub: any) => (
              <button onClick={() => {
                setSubCategory(sub.id)
                GetFiteredProducts(brandId, sub.id, value[0], value[1])
              }} key={sub.id} className={subCatery == sub.id ? "text-[red] cursor-pointer" : "cursor-pointer"}>{sub.subCategoryName}</button>
            ))}
          </div>
        </div>

        <div className="w-95 border border-gray-200 rounded-md p-3">
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
          <button onClick={() => {
                GetFiteredProducts(brandId, subCatery, value[0], value[1])
          }} className="w-full mt-3 py-2 bg-white text-red-500 border-2 border-red-500 rounded-md font-semibold hover:bg-red-500 hover:text-white transition">
            Apply
          </button>
        </div>

        <div className="w-95 border border-gray-200 rounded-md p-3">
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
        </aside>
        <aside className="w-full flex-wrap sm:w-[90%] flex gap-[8vh_3%]">
          {
            products?.filter((prod: IProduct) => prod.categoryId == category && category != "" || category == "").map((prod: IProduct) => {
                return <div key={prod.id} className="flex hover:*:flex hover:transition-all w-full sm:w-[30%] duration-1000 flex-col items-start text-start gap-[2vh]">
                  {prod.hasDiscount && (<h2 className='absolute mt-[2vh] ml-4 bg-[#DB4444] p-[1vh_15px] text-white font-semibold rounded-xl'>{Math.floor(100 - prod.price/(prod.discountPrice/100))}%</h2>)}
                  <div className='absolute mt-[2vh] flex-col ml-72 sm:ml-54 flex gap-[2vh]'>
                    <button onClick={() => {
                      if (token) {
                        if (liked && liked.some((prodd: any) => prodd.id == prod.id)) {
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
                    }} className={liked && liked.some((prodd: any) => prodd.id == prod.id) ? "bg-[red] text-white cursor-pointer p-2 rounded-4xl" : "bg-[white] cursor-pointer p-2 rounded-4xl"}><Heart /></button>
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
                  }} className='font-semibold rounded-b-2xl bg-black p-[1vh_34%] sm:p-[1vh_6.5%] w-[86.6%] sm:w-[17.56%] absolute mt-[36vh] cursor-pointer text-white adding hidden'>Add Cart</button>
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
    </div>
  );
};

export default Products;
