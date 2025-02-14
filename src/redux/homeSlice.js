import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBannerService } from "../services/api.service";

// Async thunk to fetch banner data
export const fetchBanners = createAsyncThunk("home/fetchBanners", async (_, { rejectWithValue }) => {
  try {
    const { data } = await getBannerService(); // Ensure await is used
    return data.banners;
  } catch (error) {
    console.error("Banner fetching error:", error);
    return rejectWithValue(error.response?.data || "Failed to fetch banners");
  }
});

// Initial state
const initialState = {
  trending: [],
  newArrival: [],
  bestSeller: [],
  recentlyViewed: [],
  customerReviews: [],
  categories: [],
  subCategories: [],
  banners: [],
  status: "idle", // loading, succeeded, failed
  error: null,
};

// Create Slice
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setTrending: (state, action) => {
      state.trending = action.payload;
    },
    setNewArrival: (state, action) => {
      state.newArrival = action.payload;
    },
    setBestSeller: (state, action) => {
      state.bestSeller = action.payload;
    },
    setRecentlyViewed: (state, action) => {
      state.recentlyViewed = action.payload;
    },
    setCustomerReviews: (state, action) => {
      state.customerReviews = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSubCategories: (state, action) => {
      state.subCategories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.banners = action.payload;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

// Export actions
export const {
  setTrending,
  setNewArrival,
  setBestSeller,
  setRecentlyViewed,
  setCustomerReviews,
  setCategories,
  setSubCategories,
} = homeSlice.actions;

// Export reducer
export default homeSlice.reducer;
