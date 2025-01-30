import {create} from "zustand"
import axiosInstance from "./../api/axiosInstance";
import { devtools, persist } from 'zustand/middleware';
const productStore = (set) => ({
  products: [],
  isLoading: false,
  error: null,
  totalPages: 1,
  limit: 12,
  fetchProducts: async ({ page = 1, search = "" }) => {
    set({ isLoading: true, error: null });
    
    const limit = 12;
    try {
      let url = "products"; //base URL
      url += search.length ? `/search?q=${search}` : "?"; //Add search query if any
      url += `&limit=${limit}&skip=${page * limit - limit}`; //Add limit and skip
      const { data } = await axiosInstance.get(url);
      set({products : data.products, isLoading : false, totalPages : Math.ceil(data.total / limit)});
    } catch (error) {
      console.error("Error", error);
      set({error : error.message, isLoading : false})
    }
  },
});

const useProductStore = create(devtools(persist(productStore, {name : "products"})))
export default useProductStore;