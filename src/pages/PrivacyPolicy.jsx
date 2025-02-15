import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6 text-gray-800">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center">
                Privacy Policy
            </h1>

            {/* Introduction */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Introduction
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    Welcome to **FurnitureStore.com**. We value your privacy and are committed to
                    protecting your personal information. This policy outlines how we collect, use,
                    and safeguard your data.
                </p>
            </div>

            {/* Information We Collect */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Information We Collect
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    We may collect the following types of information when you use our website:
                </p>
                <ul className="list-disc pl-6 text-sm sm:text-base mt-2">
                    <li>Personal Information: Name, email address, phone number, shipping details.</li>
                    <li>Payment Information: Credit/Debit card details (processed securely).</li>
                    <li>Usage Data: IP address, browser type, pages visited, and other analytics.</li>
                </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    How We Use Your Information
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    Your information is used to:
                </p>
                <ul className="list-disc pl-6 text-sm sm:text-base mt-2">
                    <li>Process orders and payments securely.</li>
                    <li>Improve our website and services.</li>
                    <li>Send promotional emails and offers (with your consent).</li>
                    <li>Enhance customer support and respond to queries.</li>
                </ul>
            </div>

            {/* Data Protection & Security */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Data Protection & Security
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    We implement strong security measures to protect your personal data.
                    Your payment details are encrypted, and we do not share or sell your information to third parties.
                </p>
            </div>

            {/* Cookies & Tracking Technologies */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Cookies & Tracking Technologies
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    Our website uses cookies to enhance your experience. You can choose to disable cookies
                    in your browser settings, but some features may not function properly.
                </p>
            </div>

            {/* Third-Party Links */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Third-Party Links
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    Our website may contain links to third-party sites. We are not responsible for their privacy practices
                    and encourage you to read their policies before providing any personal information.
                </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Changes to Privacy Policy
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    We may update this privacy policy from time to time. Changes will be reflected on this page, and continued use
                    of our website signifies acceptance of the updated policy.
                </p>
            </div>

            {/* Contact Us */}
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Contact Us
                </h2>
                <p className="text-sm sm:text-base mt-2 leading-relaxed">
                    If you have any questions regarding this Privacy Policy, feel free to contact us:
                </p>
                <ul className="mt-2 text-sm sm:text-base">
                    <li>📧 Email: <span className="text-blue-500">support@furniturestore.com</span></li>
                    <li>📞 Phone: <span className="text-blue-500">+91 98765 43210</span></li>
                </ul>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
