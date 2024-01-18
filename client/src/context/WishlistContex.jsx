import { createContext, useState } from "react";
import UseLocal from "../hooks/UseLocal";
import toast from "react-hot-toast";


export const WishlistContext = createContext()
export const WishlistProvider = ({ children }) => {

    const [wishlist, setWishlist] = UseLocal("wishlist")

    const AddWishlist = (menu) => {
        const index = wishlist.findIndex((item) => item._id === menu._id)
        if (index === -1) {
            setWishlist([...wishlist, { ...menu }])
            toast.success('Added to Wishlist !')

        } else {
            removeWishlist(menu._id)
        }

    }


    const removeWishlist = (id) => {
        setWishlist(wishlist.filter(item => item._id !== id))
        toast.success('Remove from Wishlist !')

    }



    return (
        <WishlistContext.Provider value={{ wishlist,AddWishlist, removeWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}