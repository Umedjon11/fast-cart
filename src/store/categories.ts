import axios from "axios";
import { create } from "zustand";



export const useCategories = create((set) => ({
    isLoagingCategory: true,
    categories: [],
    GetCateries: async () => {
        set(() => ({isLoagingCategory: true}))
        set(() => ({categories: []}))
        try {
            const { data } = await axios.get("https://store-api.softclub.tj/Category/get-categories")
            set(() => ({isLoadingCategories: false}))
            set(() => ({categories: data.data}))
        } catch (error) {
            set(() => ({isLoagingCategory: false}))
            set(() => ({categories: []}))
        }
    }
}))