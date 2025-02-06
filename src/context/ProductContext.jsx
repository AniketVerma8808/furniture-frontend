import React, { createContext, useEffect, useState } from "react";
import { products } from "../data/data";
import { toast } from "react-toastify";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
        const storedAddresses = JSON.parse(localStorage.getItem("addresses"));
        const storedOrders = JSON.parse(localStorage.getItem("orders"));

        if (storedUser) {
            setIsAuthenticated(true);
            setUser(storedUser);
        }
        if (storedCart) setCart(storedCart);
        if (storedWishlist) setWishlist(storedWishlist);
        if (storedAddresses) setAddresses(storedAddresses);
        if (storedOrders) setOrders(storedOrders)
    }, []);

    const updateLocalStorage = (cartData = null, wishlistData = null, addressData = null, orderData = null) => {
        if (cartData) localStorage.setItem("cart", JSON.stringify(cartData));
        if (wishlistData) localStorage.setItem("wishlist", JSON.stringify(wishlistData));
        if (addressData) localStorage.setItem("addresses", JSON.stringify(addressData));
        if (orderData) localStorage.setItem("orders", JSON.stringify(orderData));
    };

    // add Recent Viewed
    const addRecentlyViewed = (product) => {
        setRecentlyViewed((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) return prev;
            return [product, ...prev].slice(0, 5);
        });
    };

    // login
    const login = (email, password) => {
        if (email === "aniket@techxpert.in" && password === "1234567") {
            const userData = { email };
            setUser(userData);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(userData));
            return true;
        }
        return false;
    };

    // logout
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem("user");
    };

    // Add to Cart (Prevents Duplicates)
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

            updateLocalStorage(newCart);
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
            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    };

    // Remove from Cart
    const handleRemoveItem = (id) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== id);
            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    };

    const addToWishlist = (product) => {
        setWishlist((prev) => {
            const newWishlist = [...prev, product];
            updateLocalStorage(null, newWishlist);
            return newWishlist;
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlist((prev) => {
            const updatedWishlist = prev.filter((item) => item.id !== productId);
            updateLocalStorage(null, updatedWishlist);
            return updatedWishlist;
        });
    };

    const newArrivals = products.filter((product) => product.isNewArrival);
    const bestSellers = products.filter((product) => product.isBestSeller);

    const getProductById = (id) => {
        const product = products.find((product) => product.id === id);
        setCurrentProduct(product);
        return product;
    };

    const addAddress = (newAddress) => {
        if (
            !newAddress.address ||
            !newAddress.city ||
            !newAddress.landmark ||
            !newAddress.state ||
            !newAddress.zipcode ||
            !newAddress.phone ||
            !newAddress.country
        ) {
            toast.error("All fields are required");
            return;
        }

        const newAddressWithId = { ...newAddress, _id: Date.now().toString(), name: user ? user.email : "New User" };
        setAddresses((prev) => {
            const updatedAddresses = [...prev, newAddressWithId];
            updateLocalStorage(null, null, updatedAddresses);
            return updatedAddresses;
        });
        toast.success("New address added successfully");
    };

    const updateAddress = (updatedAddress) => {
        setAddresses((prevAddresses) => {
            const existingAddressIndex = prevAddresses.findIndex((address) => address._id === updatedAddress._id);

            if (existingAddressIndex > -1) {
                const updatedAddresses = [...prevAddresses];
                updatedAddresses[existingAddressIndex] = { ...updatedAddresses[existingAddressIndex], ...updatedAddress };
                updateLocalStorage(null, null, updatedAddresses);
                toast.success("Address updated successfully");
                return updatedAddresses;
            }
            return prevAddresses;
        });
    };

    const deleteAddress = (_id) => {
        setAddresses((prev) => {
            const updatedAddresses = prev.filter((addr) => addr._id !== _id);
            updateLocalStorage(null, null, updatedAddresses);
            return updatedAddresses;
        });
        toast.success("Address deleted successfully");
    };
    // Place Order
    const placeOrder = (orderData) => {
        const newOrder = {
            ...orderData,
            orderId: Date.now().toString(),
            date: new Date().toISOString(),
            status: "pending",
        };

        setOrders((prev) => {
            const updatedOrders = [...(prev || []), newOrder];
            updateLocalStorage(null, null, null, updatedOrders);
            return updatedOrders;
        });
        toast.success("Order placed successfully!");

        setTimeout(() => {
            markOrderAsDelivered(newOrder.orderId);
        }, 5000);
    };

    const markOrderAsDelivered = (orderId) => {
        setOrders((prev) => {
            const updatedOrders = prev.map((order) =>
                order.orderId === orderId ? { ...order, status: "delivered" } : order
            );
            localStorage.setItem("orders", JSON.stringify(updatedOrders));
            return updatedOrders;
        });
    };

    const getPendingOrders = () => {
        return orders ? orders.filter(order => order.status !== "delivered") : [];
    };

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
                isAuthenticated,
                getProductById,
                currentProduct,
                setCurrentProduct,
                addresses,
                selectedAddress,
                setSelectedAddress,
                addAddress,
                updateAddress,
                deleteAddress,
                placeOrder,
                orders,
                getPendingOrders,
                markOrderAsDelivered,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
