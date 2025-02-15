import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBlogsService } from "../services/api.service";

// Async thunk to fetch blogs
export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await GetBlogsService(); 
      return data.blogs;
    } catch (error) {
      console.error("Blogs fetching error:", error);
      return rejectWithValue(error.response?.data || "Failed to fetch blogs");
    }
  }
);

const initialState = {
  blogs: [],
  loading: false,
  loading: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
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
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setBlogs } = blogSlice.actions;
export default blogSlice.reducer;
