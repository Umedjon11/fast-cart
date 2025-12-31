import axios from "axios"
import { create } from 'zustand'

export interface IProduct {
    id: number,
    productName: string,
    image: string,
    color: string,
    price: number,
    hasDiscount: boolean,
    discountPrice: number,
    quantity: number,
    productInMyCart: boolean,
    categoryId: number,
    categoryName: string,
    productInfoFromCart: null 
} 

export const useProducts = create((set) => ({
    isLoading: true,
    isLoadingById: true,
    products: [],
    productById: {},
    GetProducts: async () => {
        set(() => ({isLoading: true}))
        set(() => ({products: []}))
        try {
            const { data } = await axios.get("https://store-api.softclub.tj/Product/get-products")
            set(() => ({isLoading: false}))
            set(() => ({products: data.data.products}))
        } catch (error: any) {
            set(() => ({isLoading: false}))
        }
    },
    GetProductsById: async (id: number) => {
        set(() => ({isLoadingById: false}))
        set(() => ({productById: {}}))
        try {
            const { data } = await axios.get(`https://store-api.softclub.tj/Product/get-product-by-id?id=${id}`)
            set(() => ({isLoadingById: false}))
            set(() => ({productById: data.data}))
        } catch (error: any) {
            set(() => ({isLoadingById: false}))
            set(() => ({productById: {}}))
        }
    },
}))