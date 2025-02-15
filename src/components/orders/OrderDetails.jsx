import React, { useContext } from "react";
// import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
    // const { orders } = useContext(ProductContext);
    const { orderId } = useParams();
    console.log(orderId);

    // const order = orders.find((order) => order.orderId === orderId);

    // if (!order) {
    //     return <div>Order not found</div>;
    // }

    // const { address } = order;
    const {
        name,
        address: orderAddress,
        city,
        state,
        zipcode,
        country,
        phone
    } = address || {};

    return (
        <div className="bg-white container py-20 antialiased dummy:bg-gray-900 md:pb-16 md:pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 bg-white border rounded-lg p-4 shadow">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Delivery Address</h3>
                    {address ? (
                        <p className="text-gray-700">
                            {name} <br />
                            {orderAddress}, {city}, {state} - {zipcode}, {country}
                        </p>
                    ) : (
                        <p className="text-gray-700">Address details are not available.</p>
                    )}
                    <p className="mt-2 text-gray-700">
                        <span className="font-semibold">Phone number:</span> {phone || "Not available"}
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Your Rewards</h3>
                    <p className="text-gray-700">Early Access to this Sale</p>
                    <p className="text-gray-500 text-sm">For Flipkart Plus Members</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Help</h3>
                    <p className="text-gray-700">
                        Need assistance? Contact our support team or visit the help center for more details.
                    </p>
                </div>
            </div>

            {/* Order Details */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Order Details</h2>
                <div className="space-y-6 mt-6">
                    {order.cart.map((item) => (
                        <div key={item.id} className="border-b pb-4">
                            <div className="flex items-center space-x-4">
                                <img src={item.images[0]} alt={item.title} className="w-32" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600">Price: ₹{item.price}</p>
                                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Payment Information</h3>
                    <p className="text-gray-700">Payment Method: {order.paymentMethod}</p>
                    <p className="text-gray-700">Total Price: ₹{order.totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
