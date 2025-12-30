
const Product = (TheProduct: any) => {
  return (
    <div className="flex flex-col w-[30%] gap-[2vh]">
        <p>{TheProduct.discountPrice}</p>
        {TheProduct.discountPrice > 0 && (<h2>{TheProduct.discountPrice}</h2>)}
        <img className="w-full h-[40vh]" src={`https://store-api.softclub.tj/images/${TheProduct.image}`} />
        <h1>{TheProduct.productName}</h1>
        <div className="flex gap-4">
            <p className="text-[#DB4444] font-semibold text-[15px]">{TheProduct.price}</p>
        </div>
    </div>
  )
}

export default Product