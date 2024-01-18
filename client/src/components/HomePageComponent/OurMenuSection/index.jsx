import React, { useEffect, useState } from 'react'
import './index.scss'
import SectionHeading from '../../CommonComponents/SectionHeading'
import { MdMenuBook } from "react-icons/md";
import Button from '../../CommonComponents/Button';
import axios from 'axios';
import MenuCard from './MenuCard';

const OurMenuSection = () => {


    const [menus, setMenus] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getMenus = async () => {
        const res = await axios.get("http://localhost:8000/menu")
        setMenus(res.data)
        setIsLoading(false)
    }


    useEffect(() => {
        getMenus()
    }, [])


    return (
        <div className='our-menu py-16 '>
            <SectionHeading
                icon={<MdMenuBook />}
                title='Our Menu'
            />

            <div className=' section grid grid-cols-2 gap-12 py-10'>
               
               {
                menus && menus.map((menu)=>(
                    <div  key={menu._id}>
                    <MenuCard
                        {...menu}
                        product={menu}
                    />
                </div>
                ))
               }

            </div>

            <div className=' flex  justify-center py-10'>
                <Button>See More</Button>
            </div>
        </div>
    )
}

export default OurMenuSection