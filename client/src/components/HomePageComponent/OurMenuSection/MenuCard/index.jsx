import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GoHeartFill } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { GoHeart } from "react-icons/go";
import {WishlistContext } from '../../../../context/WishlistContex';
import { BasketContext } from '../../../../context/BasketContext';

const MenuCard = ({title,info,price,_id,product}) => {
  const { wishlist,AddWishlist}=useContext(WishlistContext)
  const {AddBasket}=useContext(BasketContext)
  console.log(wishlist);
  return (
    <div className=' group'>
    <Link to={_id}><h3 className=' text-white font-medium text-xl  '>{title}</h3></Link>
    <div className=' flex justify-between  overflow-hidden '>
        
        <p className=' text-sm italic  text-gray-400'>{info}</p>
        {/* <div className=' border border-b border-dotted border-white'></div> */}

        <span className=' text-white font-medium'>${price}</span>
    </div>
    <div className='flex gap-3   text-xl'>
          <button onClick={()=>AddWishlist(product)} className=' text-red-600'>
          
            {wishlist.some(item=>item._id===_id) ? <GoHeartFill  />  : <GoHeart  />  }
          </button>
          <button className=' text-red-600'  onClick={()=>AddBasket(product)}><AiOutlineShoppingCart /></button>
        </div>
</div>
  )
}

export default MenuCard