import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBannerService } from "../services/api.service";

// Function to get city from latitude & longitude using OpenStreetMap API
const getCityFromCoordinates = async (latitude, longitude) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.address?.city || data.address?.town || data.address?.village || "Unknown Location";
  } catch (error) {
    console.error("Error fetching city name:", error);
    return "Unknown Location";
  }
};

// Async thunk to fetch user location
export const fetchUserLocation = createAsyncThunk(
  "home/fetchUserLocation",
  async (_, { rejectWithValue }) => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(rejectWithValue("Geolocation is not supported by this browser"));
      } else {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const city = await getCityFromCoordinates(latitude, longitude);
            resolve({ latitude, longitude, city });
          },
          (error) => {
            reject(rejectWithValue(error.message || "Failed to retrieve location"));
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
      }
    });
  }
);

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

  // Location State
  latitude: null,
  longitude: null,
  city: null,
  locationStatus: "idle", // loading, succeeded, failed
  locationError: null,
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
      // Fetch Banners
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
      })

      // Fetch User Location
      .addCase(fetchUserLocation.pending, (state) => {
        state.locationStatus = "loading";
      })
      .addCase(fetchUserLocation.fulfilled, (state, action) => {
        state.locationStatus = "succeeded";
        state.latitude = action.payload.latitude;
        state.longitude = action.payload.longitude;
        state.city = action.payload.city;
      })
      .addCase(fetchUserLocation.rejected, (state, action) => {
        state.locationStatus = "failed";
        state.locationError = action.payload || "Error fetching location";
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
