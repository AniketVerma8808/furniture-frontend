import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6 text-gray-800">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center">
                Terms & Conditions
            </h1>

            {/* Introduction */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Introduction
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    Welcome to **FurnitureStore.com**. By accessing and using our website,
                    you agree to abide by the following terms and conditions. If you do not agree
                    with any part of these terms, please do not use our services.
                </p>
            </div>

            {/* User Responsibilities */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    User Responsibilities
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    By using our website, you agree to:
                </p>
                <ul className="list-disc pl-6 text-sm sm:text-base mt-2">
                    <li>Provide accurate and up-to-date information during registration or purchase.</li>
                    <li>Not engage in any fraudulent activities or misuse of the website.</li>
                    <li>Respect intellectual property rights and not copy content without permission.</li>
                </ul>
            </div>

            {/* Orders & Payments */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Orders & Payments
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    - All orders placed are subject to acceptance and availability.  
                    - We reserve the right to cancel orders if payment is not received within the specified time.  
                    - Payments made through credit/debit cards, UPI, and net banking are securely processed.  
                </p>
            </div>

            {/* Return & Refund Policy */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Return & Refund Policy
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    Our return policy allows customers to return items within **7 days** of delivery.
                    Refunds will be processed within **5-7 business days** after approval.
                    Products must be in their **original condition, unused, and with all packaging intact**.
                </p>
            </div>

            {/* Limitation of Liability */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Limitation of Liability
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    We are not responsible for any **indirect, incidental, or consequential damages**
                    arising from the use of our products. In no event shall our liability exceed the amount
                    paid for the purchased product.
                </p>
            </div>

            {/* Changes to Terms */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Changes to Terms & Conditions
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    We reserve the right to update or modify these terms at any time without prior notice.
                    Continued use of our website constitutes acceptance of any changes.
                </p>
            </div>

            {/* Contact Us */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Contact Us
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    If you have any questions regarding these Terms & Conditions, feel free to contact us:
                </p>
                <ul className="mt-2 text-sm sm:text-base">
                    <li>📧 Email: <span className="text-blue-500">support@furniturestore.com</span></li>
                    <li>📞 Phone: <span className="text-blue-500">+91 98765 43210</span></li>
                </ul>
            </div>
        </div>
    );
};

export default TermsAndConditions;
