import { toast } from "react-toastify";
import { create } from "zustand";
import { Axios } from "../../utils/axios";


export const useCart = create((set, get: any) => ({
    isLoadingCart: true,
    cartProducts: [],
    totalPrice: 0,
    GetCartProducts: async () => {
        set(() => ({isLoadingCart: true}))
        set(() => ({cartProducts: []}))
        try {
            const { data } = await Axios.get("https://store-api.softclub.tj/Cart/get-products-from-cart")
            set(() => ({isLoadingCart: false}))
            set(() => ({cartProducts: data.data[0].productsInCart}))
            set(() => ({totalPrice: data.data[0].totalDiscountPrice}))
        } catch (error) {
            set(() => ({isLoadingCart: false}))
            set(() => ({cartProducts: []}))
            set(() => ({totalPrice: 0}))
        }
    },
    AddProductToCart: async (id: number) => {
        try {
            await Axios.post(`https://store-api.softclub.tj/Cart/add-product-to-cart?id=${id}`)
            toast.success("Successfuly Added to cart!")
            get().GetCartProducts()
        } catch (error: any) {
            toast.error("Allready added!")
        }
    },
    RemoveFromCart: async (id: number) => {
        try {
            await Axios.delete(`https://store-api.softclub.tj/Cart/delete-product-from-cart?id=${id}`)
            toast.success("Successfuly removed from cart!")
            get().GetCartProducts()
        } catch (error) {
            toast.error("Allready removed!")
        }
    },
    RemoveAll: async () => {
        try {
            await Axios.delete("https://store-api.softclub.tj/Cart/clear-cart")
            toast.success("Successfuly cleared!")
            get().GetCartProducts()
        } catch (error) {
            toast.error("Allready cleared!")
        }
    }
}))