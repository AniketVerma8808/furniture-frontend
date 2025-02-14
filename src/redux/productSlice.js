import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { products } from '../data/data';

// Thunk function to fetch products from API
export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
        //  neds to have product api so that we can store data 

            const newarrival = products.filter((product) => product.isNewArrival);
            const bestsellor = products.filter((product) => product.isBestSeller);


            return {
                bestsellor,
                newarrival,
                products
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        bestsellor: [],
        newarrival: [],
        loading: false,
        error: null,
    },
    reducers: {



    }, // No need for separate reducers when using createAsyncThunk
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                const { bestsellor, newarrival, products } = action.payload;
                console.log(action.payload , "hey");
                state.loading = false;
                state.products = products;
                state.bestsellor = bestsellor
                state.newarrival = newarrival
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default productSlice.reducer;
