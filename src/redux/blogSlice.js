import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBlogsService } from "../services/api.service";

// Async thunk to fetch blogs
export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await GetBlogsService();
      return data.data;
    } catch (error) {
      console.error("Blogs fetching error:", error);
      return rejectWithValue(error.response?.data || "Failed to fetch blogs");
    }
  }
);

const initialState = {
  blogs: [],
  individual: JSON.parse(localStorage.getItem("selectedBlog")) || null, // Load from local storage
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setIndividualBlog: (state, action) => {
      const selectedBlog = state.blogs.find((x) => x._id === action.payload);
      if (selectedBlog) {
        state.individual = selectedBlog;
        localStorage.setItem("selectedBlog", JSON.stringify(selectedBlog)); // Save to local storage
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
        // Restore individual blog from local storage if it exists
        const storedBlog = JSON.parse(localStorage.getItem("selectedBlog"));
        if (storedBlog) {
          state.individual = action.payload.find((x) => x._id === storedBlog._id) || null;
        }
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setIndividualBlog } = blogSlice.actions;
export default blogSlice.reducer;
