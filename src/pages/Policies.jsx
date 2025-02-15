import React from "react";

const Policies = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6 text-gray-800">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center">
                Our Policies
            </h1>

            {/* Returns & Refund Policy */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Returns & Refund Policy
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    We offer a **7-day return policy** for eligible furniture items. If you are
                    not satisfied with your purchase, you can request a return within 7 days of delivery.
                    The item must be in its original condition, unused, and with all tags and packaging intact.
                    Refunds will be processed within 5-7 business days after the item is received and inspected.
                </p>
            </div>

            {/* Shipping Policy */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Shipping & Delivery
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    We provide **free shipping** on all orders above **₹5000**. Delivery time varies based on
                    location, with standard shipping taking 5-10 business days. We ensure safe and damage-free
                    delivery, and in case of transit damage, please contact our support within 24 hours of
                    receiving the product.
                </p>
            </div>

            {/* Warranty Policy */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Warranty Policy
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    Our furniture comes with a **1-year manufacturer warranty** covering defects in materials
                    and workmanship. The warranty does not cover damages due to **misuse, improper handling,
                    or natural wear and tear**.
                </p>
            </div>

            {/* Cancellation Policy */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Cancellation Policy
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    Orders can be **canceled within 24 hours** of placement for a full refund. Once the
                    order is shipped, cancellations are not permitted, but you may opt for a return after
                    delivery.
                </p>
            </div>

            {/* Contact Support */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Customer Support
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    For any queries or issues, feel free to contact us at:
                </p>
                <ul className="mt-2 text-sm sm:text-base">
                    <li>📧 Email: <span className="text-blue-500">support@furniturestore.com</span></li>
                    <li>📞 Phone: <span className="text-blue-500">+91 98765 43210</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Policies;
