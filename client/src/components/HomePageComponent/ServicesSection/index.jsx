import React from 'react'
import SectionHeading from '../../CommonComponents/SectionHeading'
import { GrRestaurant } from "react-icons/gr";
import { GiCoffeeCup } from "react-icons/gi";

const ServicesSection = () => {
    return (
        <div className=' section py-16'>
            <SectionHeading
                icon={<GrRestaurant />}
                title='Welcome'
                titleDark
                isGray
            />

            <div className=' grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-center gap-10 py-10'>
                <div className=' space-y-4'>
                    <div className=' text-center flex justify-center text-5xl text-[#C49812] '><GiCoffeeCup /></div>
                    <h3 className=' text-4xl  font-semibold'>Breakfast</h3>
                    <p className=' text-gray-500 font-medium'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                </div>

                <div className=' space-y-4'  >
                    <div className=' text-center flex justify-center text-5xl text-[#C49812] '><GiCoffeeCup /></div>

                    <h3 className=' text-4xl  font-semibold'>Breakfast</h3>
                    <p className=' text-gray-500 font-medium'> In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                </div>

                <div className=' space-y-4'>

                    <div className=' text-center flex justify-center text-5xl text-[#C49812] '><GiCoffeeCup /></div>

                    <h3 className=' text-4xl  font-semibold'>Lunch</h3>
                    <p className=' text-gray-500 font-medium'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                </div>
                <div className=' space-y-4'>

                    <div className=' text-center flex justify-center text-5xl text-[#C49812] '><GiCoffeeCup /></div>

                    <h3 className=' text-4xl  font-semibold'>Dinner</h3>
                    <p className=' text-gray-500 font-medium'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                </div>
            </div>


        </div>
    )
}

export default ServicesSection