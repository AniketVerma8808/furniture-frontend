import React from 'react'
import { Link } from 'react-router-dom';

const Nowishlist = () => {
    return (
        <div className=''>
            <div className="flex flex-col justify-center h-screen items-center">
            <img src="/Wishlistempty.png" alt="" />

                <Link className="text-4xl font-bold py-8">Your Wishlist is Empty</Link>
            </div>
        </div>
    )
}

export default Nowishlist
