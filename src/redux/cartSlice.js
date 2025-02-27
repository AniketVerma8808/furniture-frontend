import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GETCartService } from "../services/api.service";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await GETCartService();
      console.log("cart product", data);
      return data.cart.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cartItems: [],
  loading: false,
  isError: false,
  cartCount :  0,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((i) => i._id === action.payload._id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
        state.cartCount = action.payload.length;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
