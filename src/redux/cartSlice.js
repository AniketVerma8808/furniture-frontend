import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GETCartService } from "../services/api.service";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await GETCartService();
      // console.log("cart product", data);
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
  cartCount: 0,
  error: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
  
      const item = state.cartItems.find((i) => i.product._id === action.payload._id);
      // console.log(item , "item that we found");
      if (item) {
        item.quantity += 1;
      } else {
        state.cartCount += 1
        state.cartItems.push({  product : action.payload , quantity: 1 });
      }
    },

    updateCountCart: (state, action) => {
      if (action.payload === "inc") {
        state.cartCount = state.cartCount + 1;
      } else {
        state.cartCount = state.cartCount - 1;
      }
    },
    updateCartquantity: (state, action) => {
      const { productId, change } = action.payload;
      const item = state.cartItems.find(
        (item) => item.product._id === productId
      );
      if (item) {
        item.quantity = Math.max(1, item.quantity + change);
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product._id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.loading = false;
      state.isError = false;
      state.error = null;
      state.cartCount = 0;
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

export const {
  addToCart,
  removeFromCart,
  updateCountCart,
  clearCart,
  updateCartquantity,
} = cartSlice.actions;
export default cartSlice.reducer;
