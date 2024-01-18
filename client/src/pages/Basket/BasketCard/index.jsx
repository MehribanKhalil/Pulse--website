import React, { useContext } from 'react'
import { BasketContext } from '../../../context/BasketContext'

const BasketCard = ({ title, info, count, price,_id,product }) => {
    const { basket,removeBasket,incCount,decCount } = useContext(BasketContext)

    return (
        <div className=' bg-gray-300  text-center rounded-xl p-10 space-y-3 shadow-xl' >
            <h3 className=' text-2xl font-medium'>{title}</h3>
            <p>{info}</p>
            <div className=' flex justify-center gap-6  items-center text-xl'>
                <button onClick={()=>decCount(product)} className=' border w-9 h-9 flex justify-center items-center'>-</button>
                <span>{count}</span>
                <button  onClick={()=>incCount(product)} className=' border w-9 h-9 flex justify-center items-center'>+</button>
            </div>
            <p>Price: ${price}</p>
            <div className=' flex justify-center pt-3'>
                <button onClick={()=>removeBasket(_id)} className='border px-3 py-1 flex justify-center items-center'>delete</button>

            </div>
        </div>
    )
}

export default BasketCard