import axios from "axios";
import { create } from "zustand";



export const useSubCategory = create((set) => ({
    isLoadingSubCategory: true,
    subCategories: [],
    GetSubCategories: async () => {
        set(() => ({isLoadingSubCategry: true}))
        set(() => ({subCategories: []}))
        try {
           const { data } = await axios.get("https://store-api.softclub.tj/SubCategory/get-sub-category")
           set(() => ({isLoadingSubCategory: false})) 
           set(() => ({subCategories: data.data.slice(0, 30)}))
        } catch (error) {
            set(() => ({isLoadingSubCategry: false}))
            set(() => ({subCategories: []}))
        }
    }
}))