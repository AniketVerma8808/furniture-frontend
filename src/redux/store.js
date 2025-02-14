import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {thunk} from "redux-thunk"; // No curly brackets needed
import authReducer from "./authSlice"; // Your auth slice
import productReducer from "./productSlice"; // Your auth slice
import cartReducer from "./cartSlice"; // Your auth slice
import wishlistReducer from "./wishlistSlice"; // Your auth slice




// Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Persist only the auth slice
};

// Combine Reducers
const rootReducer = combineReducers({
  auth: authReducer,
  product : productReducer,
  cart : cartReducer,
  wishlist : wishlistReducer
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store with Correct Middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Use a callback
});

export const persistor = persistStore(store);
