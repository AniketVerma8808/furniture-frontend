import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GETWishlistService } from "../services/api.service";

// ✅ Thunk function to fetch wishlist from API
export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await GETWishlistService();
      return data.wishlist.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  wishlistItems: [],
  loading: false,
  isError: false,
  error: null,
  wishlistCount: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      if (
        !state.wishlistItems.find((item) => item._id === action.payload._id)
      ) {
        state.wishlistItems.push(action.payload);
      }
    },
    updateCountWishlist: (state, action) => {
      if (action.payload === "inc") {
        state.wishlistCount = state.wishlistCount + 1;
      } else {
        state.wishlistCount = state.wishlistCount - 1;
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item._id !== action.payload
      );
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
      state.loading = false;
      state.isError = false;
      state.error = null;
      state.wishlistCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlistItems = action.payload;
        state.wishlistCount = action.payload.length || 0;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const {
  addToWishlist,
  clearWishlist,
  removeFromWishlist,
  updateCountWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
