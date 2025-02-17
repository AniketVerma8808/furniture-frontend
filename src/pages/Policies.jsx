import React from "react";

const Policies = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 py-12 space-y-6 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center">
        Our Policies
      </h1>

      {/* Shipping Policy */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">
          Shipping & Delivery
        </h2>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          The Products will be shipped upon receiving order confirmation from
          you and upon receipt of the applicable price in case of prepaid
          orders. When you place an order for Products through the Site, the
          Products will be shipped to the address you designate as the “Shipping
          Address” during the check-out process, provided that such Shipping
          Address is serviceable by us. You shall be liable to ensure that the
          Shipping Address is accessible for such vehicles as may be required to
          deliver the Product you have ordered, and that the building within
          which delivery of the Product is to be done has a lift or stairwell of
          sufficient size and capacity to undertake the delivery.
        </p>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          In case of any queries regarding the required space, please reach out
          to us at the link provided herein. You will be liable to bear any
          additional amounts which would be required to deliver the Product at
          the Shipping Address due to any constraints in relation to the
          abovementioned conditions. The serviceability of a location by us can
          be verified by entering the relevant PIN code on the Site. The title
          and ownership in Products shall remain with us until delivered to you
          at the Shipping Address.
        </p>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          In case of any damage to the Product after delivery, the same shall be
          on your account and we shall not be liable for any such damage except
          as provided in the terms of warranty, returns, and refunds.
        </p>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          If your order is lost or damaged during the delivery process due to a
          fault of Beds Lane or of the logistics partner, we will employ our
          best efforts to work with you and the carrier to retrieve your
          shipment or to replace the damaged product.
        </p>
      </div>

      {/* Warranty Policy */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">Warranty Policy</h2>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          Your Beds Lane Products are covered by different warranty periods. If
          there is an issue with your product, please review the warranty
          conditions associated with each product (“Product Warranty”) and also
          on the Product listing page. The Product Warranty is incorporated by
          reference into these Terms. To the extent there is a conflict between
          the terms of the Product Warranty and these Terms, the terms of the
          Product Warranty will prevail with respect to Products purchased from
          Beds Lane. In case of any conflict between the terms of the Product
          Warranty and the Product listing page, the terms of the Product
          listing page shall prevail.
        </p>
      </div>

      {/* Product Returns */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">Product Returns</h2>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          If you want to return any of the Products that have a valid return
          policy after your receipt of that particular product as mentioned on
          the product listing page, then please follow the process detailed
          below. The time limits for such returns or replacement shall be as
          mentioned on the respective product's listing page and is hereby
          incorporated into these Terms by reference. Return shipping within
          India is free.
        </p>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          If you want to return your Products within the allowed time limit
          after your receipt, to arrange a return pick-up.
        </p>
        <p className="text-sm sm:text-lg font-medium mt-2 leading-relaxed">
          The following conditions also apply to Product returns:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            Products must be in donatable condition to be eligible for return
            (e.g., no stains, tears or other soiling including odors, except
            such defects that have been reported to us along with return request
            and confirmed by our representative).
          </li>
          <li>
            Products shipped outside of India are not eligible for return.
          </li>
          <li>
            Customers may return a maximum of two (2) units of a particular
            Product per initial order, validated by a customer name or shipping
            address.
          </li>
          <li>
            For Products eligible for No-Questions-Asked return policy like the
            100 days trial for some of our mattress products, if at least one
            Product type is returned from an initial order, that customer or
            shipping address will not be eligible for additional 100-night
            trials on subsequent orders of that particular Product.
          </li>
        </ul>
      </div>

      {/* Cancellations */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">Cancellations</h2>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          You may cancel an order anytime prior to shipment. However, in case of
          orders for sofas or associated products such as recliners, wing
          chairs, lounge chairs, sofa-cum-beds (together “Sofas”), if the
          cancellation request is received after the order is confirmed by us,
          and before the Estimated Date of Delivery notified to you at the time
          of order placement, a 10% (ten percent) cancellation fee on the
          purchase amount paid including applicable taxes, shall be levied by us
          while processing the applicable refund. You may raise a cancellation
          request for Sofas by reaching out to our team at the contact number
          provided on the Site.
        </p>
      </div>

      {/* Out of Stock */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">Out of Stock</h2>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          We endeavour to ensure that all products listed on the Site are
          available in stock for dispatch to you. However, in case this is not
          available for any reason, we will contact you and give you the option
          to exchange, delay or cancel the order based on your convenience. Any
          refund availed under this provision shall be as per the terms
          specified above.
        </p>
      </div>

      {/* Customer Support */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">Customer Support</h2>
        <p className="text-sm sm:text-base mt-2 leading-relaxed">
          For any queries or issues, feel free to contact us at:
        </p>
        <ul className="mt-2 text-sm sm:text-base">
          <li>
            📧 Email:{" "}
            <span className="text-blue-500">support@furniturestore.com</span>
          </li>
          <li>
            📞 Phone: <span className="text-blue-500">+91 98765 43210</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policies;
