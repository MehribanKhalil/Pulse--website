import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom';
import Loader from '../../components/CommonComponents/Loader';
const Detail = () => {

  const {id}=useParams()

  const [menus, setMenus] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMenus = async () => {
      const res = await axios.get(`http://localhost:8000/menu/${id}`)
      setMenus(res.data)
      setIsLoading(false)
  }


  useEffect(() => {
      getMenus()
  }, [])

  return (
    <div className=' section page flex items-center'>
         <Helmet>
        <title>Detail</title>
       
      </Helmet>

      <div>
        {
          isLoading ? <Loader/> 
          :
          <div className=' '>
            <div className=' bg-gray-400 space-y-8'>
              <p className=' text-3xl'><span className=' text-main-color'>Title:</span>{menus.title}</p>
              <p> <span className=' text-main-color'>Price:</span> ${menus.price}</p>
              <p><span className=' text-main-color'>Info:</span>{menus.info}</p>
              <div>
                <button>Add to Cart</button>
                <button>Add to Wishlist</button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Detail