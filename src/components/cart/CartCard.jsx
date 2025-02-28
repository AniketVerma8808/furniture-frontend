import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosTrash, IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { DELETECartService } from "../../services/api.service";
import {
  removeFromCart,
  updateCartquantity,
  updateCountCart,
} from "../../redux/cartSlice";
import { toast } from "react-toastify";

const CartCard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { cartItems, cartCount } = useSelector((state) => state.cart);

  // console.log("cart product", cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateQuantity = (productId, change) => {
    dispatch(updateCartquantity({ productId, change }));
  };

  const removeItem = async (productId) => {
    await DELETECartService(productId);
    dispatch(updateCountCart("dec"));
    dispatch(removeFromCart(productId));
    toast.info("Item removed from cart");
  };

  const subtotal = cartItems.reduce((acc, item) => {
    if (item.product && item.product.price) {
      return acc + item.product.price * (item.quantity || 1);
    }
    return acc;
  }, 0);

  // Navigate to Checkout with state
  const handleProceedToCheckout = () => {
    setIsDropdownOpen(false);
    navigate("/checkout", { state: { step: "address" } });
  };

  const handleViewCart = (event) => {
    event.preventDefault();
    setIsDropdownOpen(false);
    navigate("/checkout", { state: { step: "cart" } });
  };

  const handleGoToShop = () => {
    setIsDropdownOpen(false);
    navigate("/");
  };

  return (
    <div className="relative">
      {cartCount > 0 && (
        <span className="absolute -top-3 md:-top-5 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
          {cartCount}
        </span>
      )}
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <FaShoppingCart />
        <span className="text-[8px] md:text-xs">CART</span>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 z-50 top-10 w-72 md:w-96 bg-white text-sm text-black shadow-lg rounded-lg">
          {/* Close Button */}
          <div className="flex justify-end items-center px-4 py-2 border-b">
            <IoMdClose
              className="text-xl cursor-pointer"
              onClick={() => setIsDropdownOpen(false)}
            />
          </div>

          {/* Cart Summary */}
          <div className="flex justify-between px-4 py-2 border-b">
            <p>
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </p>
            <div>
              <p className="text-gray-500 text-xs">Subtotal</p>
              <p className="text-[16px]">
                ${subtotal ? subtotal.toFixed(2) : "0.00"}
              </p>
            </div>
          </div>

          {/* Cart Items */}
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
              if (!item.product) return null;

              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 border-b"
                >
                  {/* Product Image */}
                  <img
                    src={item.product.images?.[0]}
                    alt={item.product.name}
                    className="w-12 h-12 rounded-md"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <p className="text-sm line-clamp-1">{item.product.name}</p>
                    <p className="text-xs text-gray-500">
                      $
                      {item.product.price
                        ? item.product.price.toFixed(2)
                        : "0.00"}
                    </p>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[12px]">Qty:</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product._id, -1)}
                          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="text-[12px]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product._id, 1)}
                          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      {/* Remove Item */}
                      <IoIosTrash
                        className="text-red-500 w-5 h-5 cursor-pointer hover:text-red-600"
                        onClick={() => removeItem(item.product._id)}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="px-4 py-4 text-gray-500 text-center">
              You have no items in your shopping cart.
            </p>
          )}

          {/* Checkout & View Cart Buttons */}
          <div className="p-4">
            {cartItems.length > 0 ? (
              <>
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bgColor text-white py-3 text-sm rounded-lg mb-2"
                >
                  Proceed to Checkout
                </button>
                <Link
                  to="/checkout"
                  className="block text-center bg-gray-200 text-sm text-gray-700 py-3 rounded-lg"
                  onClick={handleViewCart}
                >
                  View & Edit Cart
                </Link>
              </>
            ) : (
              <button
                onClick={handleGoToShop}
                className="block text-center w-full bg-gray-200 text-gray-700 py-3 rounded-lg"
              >
                Go to Shop
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCard;
