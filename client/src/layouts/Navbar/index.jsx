import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import './index.scss'
import Hamburger from 'hamburger-react'

import { GoHeartFill } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const location=useLocation()
    return (
        <div>


            <nav className={` ${ location.pathname==='/' && 'absolute bg-transparent top-0 left-0'} bg-black nav border-b border-gray-400  text-white z-30 w-full px-5 md:px-16 lg:px-24 `}>
                <div  className=' flex  justify-between items-center font-semibold py-6 '>
                    <div className=' '>
                        <NavLink className=' text-3xl'>Pulse <span className=' text-main-color'>.</span></NavLink>
                    </div>
                    <div className=' hidden sm:flex nav-links gap-4 lg:gap-6 '>
                        <NavLink className='nav-link' to={'/'}>Home</NavLink>
                        <NavLink className='nav-link' to={'/about'}>About us </NavLink>
                        <NavLink className='nav-link' to={'/admin'}>Admin</NavLink>
                        <NavLink className='nav-link' to={'/wishlist'}><GoHeartFill  size={22} /> </NavLink>
                        <NavLink className='nav-link' to={'/basket'}><AiOutlineShoppingCart size={22} /> </NavLink>

                    </div>

                    <div className='hidden lg:flex items-center gap-2 text-lg'>
                        <p className=' text-main-color'>Reservations</p>
                        <FaPhoneAlt />
                        <Link>652-345 3222 11</Link>
                    </div>

                    <div className='block sm:hidden'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar