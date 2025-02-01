import React, { createContext, useEffect, useState } from "react";
import { products } from "../data/data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));

        if (storedUser) {
            setIsAuthenticated(true);
            setUser(storedUser);
        }
        if (storedCart) setCart(storedCart);
        if (storedWishlist) setWishlist(storedWishlist);
    }, []);

    // add Recent Viewed
    const addRecentlyViewed = (product) => {
        setRecentlyViewed((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) return prev;
            return [product, ...prev].slice(0, 5);
        });
    };

    // login
    // const login = (userData) => {
    //     setUser(userData);
    //     localStorage.setItem("user", JSON.stringify(userData));
    // };


    const login = (email, password) => {
        if (email === "aniket@techxpert.in" && password === "1234567") {
            const userData = { email };
            setUser(userData);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(userData));
            return true;
        } else {
            return false;
        }
    };


    // logout
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem("user");
    };

    //  Add to Cart (Prevents Duplicates)
    const addToCart = (product) => {
        setCart((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);
            let newCart;

            if (existingItem) {
                newCart = prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                newCart = [...prev, { ...product, quantity: 1 }];
            }

            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    // Handle Quantity Change
    const handleQuantityChange = (id, amount) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    //  Remove from Cart
    const handleRemoveItem = (id) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const addToWishlist = (product) => {
        setWishlist((prev) => {
            const newWishlist = [...prev, product];
            localStorage.setItem("wishlist", JSON.stringify(newWishlist));
            return newWishlist;
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlist((prev) => {
            const updatedWishlist = prev.filter((item) => item.id !== productId);
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    const newArrivals = products.filter((product) => product.isNewArrival);
    const bestSellers = products.filter((product) => product.isBestSeller);

    return (
        <ProductContext.Provider
            value={{
                products,
                newArrivals,
                bestSellers,
                recentlyViewed,
                addRecentlyViewed,
                cart,
                addToCart,
                handleQuantityChange,
                handleRemoveItem,
                wishlist,
                addToWishlist,
                removeFromWishlist,
                user,
                login,
                logout,
                isAuthenticated
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
