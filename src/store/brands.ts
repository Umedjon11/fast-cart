import axios from "axios";
import { create } from "zustand";



export const useBrands = create((set) => ({
    isLoagingBrands: true,
    brands: [],
    GetBrands: async () => {
        set(() => ({isLoagingBrands: true}))
        set(() => ({brands: []}))
        try {
            const { data } = await axios.get("https://store-api.softclub.tj/Brand/get-brands")
            set(() => ({isLoadingBrands: false}))
            set(() => ({brands: data.data}))
        } catch (error) {
            set(() => ({isLoagingBrands: false}))
            set(() => ({brands: []}))
        }
    }
}))