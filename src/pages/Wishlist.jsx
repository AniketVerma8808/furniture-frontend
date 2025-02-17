// import React, { useContext } from "react";
// import { IoIosTrash } from "react-icons/io";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { ProductContext } from "../context/ProductContext";
// import Nowishlist from "./Nowishlist";

// const Wishlist = () => {
//   const { wishlist, removeFromWishlist } = useContext(ProductContext);
//   const navigate = useNavigate();
//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
//       {wishlist?.length > 0 ? (
//         <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg">
//           <div className="p-4 border-b">
//             <h1 className="text-2xl font-bold">Your Wishlist</h1>
//           </div>
//           <div className="space-y-4 p-4">
//             {wishlist.map(({ id, images, title, price }) => (
//               <div
//                 key={id}
//                 className="flex items-center justify-between border-b py-4"
//               >
//                 <div className="flex items-center">
//                   <img
//                     src={images && images[0]}
//                     alt={title}
//                     className="w-20 h-20 rounded-lg object-cover"
//                     onClick={() => navigate(`/product/${id}`)}
//                   />
//                   <div className="ml-4">
//                     <h2 className="text-lg font-medium">{title}</h2>
//                     <p className="text-gray-600">{price}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => {
//                     removeFromWishlist(id);
//                     toast.success("Removed from Wishlist!");
//                   }}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <IoIosTrash className="w-6 h-6" />
//                 </button>
//               </div>
//             ))}
//           </div>
//           <div className="p-4">
//             <Link to="/">
//               <button className="w-full bgColor text-white py-2 rounded transition duration-300">
//                 Continue Shopping
//               </button>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         <Nowishlist />
//       )}
//     </div>
//   );
// };

// export default Wishlist;

import React from "react";

const Wishlist = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <div className="card border-2"></div>
            </div>
            <div className="lg:col-span-8 border-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
