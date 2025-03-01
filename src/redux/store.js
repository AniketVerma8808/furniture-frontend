import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Correct import (no curly brackets)
import authReducer, { logoutUser } from "./authSlice";
import productReducer from "./productSlice";
import cartReducer, { clearCart } from "./cartSlice";
import wishlistReducer, { clearWishlist } from "./wishlistSlice";
import homeReducer from "./homeSlice";
import blogReducer from "./blogSlice";
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
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/FLUSH", // ✅ Add FLUSH to ignored actions
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
        ignoredActionPaths: ["meta.arg", "meta.baseQueryMeta"], // ✅ Ignore async meta data
        ignoredPaths: ["persistor._register", "persistor._getStoredState"], // ✅ Ignore persistor internals
      },
    }).concat(thunk),
});

export const logoutAndClearStore = () => async (dispatch) => {
  dispatch(logoutUser()); // Clear Redux auth state
  dispatch(clearWishlist()); // Clear wishlist state
  dispatch(clearCart()); // Clear wishlist state

  persistor.pause(); // ✅ Pause persistor
  await persistor.flush().catch(() => {}); // ✅ Handle non-serializable warnings
  await persistor.purge().catch(() => {}); // ✅ Handle potential errors
};

export const persistor = persistStore(store);
