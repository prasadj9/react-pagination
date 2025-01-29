import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";

const initialState = {
  isLoading: false,
  products: [],
  error: null,
  totalPages: 1,
  limit: 12,
};

export const fetchProductList = createAsyncThunk(
  "productSlice/fetchProductList",
  async ({ page = 1, search = "" }, thunkAPI) => {
    const limit = 12;
    try {
      let url = "products"; //base URL
      url += search.length ? `/search?q=${search}` : "?"; //Add search query if any
      url += `&limit=${limit}&skip=${page * limit - limit}`; //Add limit and skip
      const { data } = await axiosInstance.get(url);
      return data;
    } catch (error) {
      console.error("Error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.isLoading = false;
        state.totalPages = Math.ceil(action.payload.total / state.limit);
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
