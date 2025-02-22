import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetProductService } from "../services/api.service";

// Thunk function to fetch products from API
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      //  neds to have product api so that we can store data
      const  {data : {data}} = await GetProductService()
      const newD = data.map((i)=>{
          console.log(i.newarrival);
      })

     
      const newarrival = data.filter((product) => product.newarrival);
      const bestseller = data.filter((product) => product.bestsellor); // Fix typo if needed

      return {
        bestseller,
        newarrival,
        data
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    bestseller: [],
    newarrival: [],
    loading: false,
    error: null,
  },
  reducers: {}, // No need for separate reducers when using createAsyncThunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { bestseller, newarrival , data } = action.payload;
        console.log(newarrival , "login from slice");
        state.loading = false;
        state.products = data;
        state.bestseller = bestseller;
        state.newarrival = newarrival;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
