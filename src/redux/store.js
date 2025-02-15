import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Correct import (no curly brackets)
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import homeReducer from "./homeSlice";
import blogReducer from "./blogSlice"
// Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart", "wishlist"], // Persist these slices
};

// Combine Reducers
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  home: homeReducer,
  blog: blogReducer,
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store with Correct Middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Prevent warnings
      },
    }).concat(thunk), // Add thunk middleware
});

export const persistor = persistStore(store);
