import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosTrash, IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const CartCard = ({ initialCart = [] }) => {
  const [cart, setCart] = useState(initialCart);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Navigate to Checkout with state
  const handleProceedToCheckout = () => {
    navigate("/checkout", { state: { step: "address" } });
  };

  const handleViewCart = () => {
    setIsDropdownOpen(false);
    navigate("/checkout", { state: { step: "cart" } });
  };

  const handleGoToShop = () => {
    setIsDropdownOpen(false);
    navigate("/");
  };

  return (
    <div className="relative">
      <p className="absolute -top-4 md:-top-5 right-0 text-[12px] md:text-sm bg-red-500 text-white px-1 md:px-2 py-0.2 md:py-0.5 rounded-full">
        {cart.length}
      </p>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <FaShoppingCart className="text-[16px] md:text-[16px]" />
        <span className="text-[8px] md:text-xs">CART</span>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 z-50 top-10 w-80 md:w-96 bg-white text-sm text-black shadow-lg rounded-lg">
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
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </p>
            <div>
              <p className="text-gray-500 text-xs">Subtotal</p>
              <p className=" text-lg">${subtotal.toFixed(2)}</p>
            </div>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 border-b"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-md"
                />
                <div className="flex-1">
                  <p className="text-sm ">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity Control */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm">Qty:</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <IoIosTrash
                      className="text-red-500 w-5 h-5 cursor-pointer hover:text-red-600"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="px-4 py-4 text-gray-500 text-center">
              You have no items in your shopping cart.
            </p>
          )}

          {/* Checkout & View Cart Buttons */}
          <div className="p-4">
            {cart.length > 0 ? (
              <>
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bgColor text-white py-3 rounded-lg mb-2"
                >
                  Proceed to Checkout
                </button>
                <Link
                  to="/checkout"
                  className="block text-center bg-gray-200 text-gray-700 py-3 rounded-lg"
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
