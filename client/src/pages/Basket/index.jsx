import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import BasketCard from './BasketCard'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {
  const {basket}=useContext(BasketContext)
  return (
    <div className='section page py-16'>
         <Helmet>
        <title>Basket</title>
       
      </Helmet>

      <div className='   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 py-10'>
        {
          basket.length===0 ? <p>Your Basket Currently empty</p> :
          basket.map((item)=>(
            <BasketCard
            {...item}
            product={item}
          />
          ))
        }
      </div>
    </div>
  )
}

export default Basket