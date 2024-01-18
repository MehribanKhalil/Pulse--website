import React from 'react'
import SectionHeading from '../../CommonComponents/SectionHeading'
import { MdOutlineRestaurantMenu } from "react-icons/md";

const WelcomeSection = () => {
  return (
    <div  className=' section py-16'>
        <SectionHeading
            icon={<MdOutlineRestaurantMenu />}
            title='Welcome'
            titleDark
            isGray
        />

        <div className=' grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-10 py-6'>
            <div className=' space-y-4'>
                <h3  className=' text-4xl  font-semibold'>2002</h3>
                 <p  className=' text-gray-500 font-medium'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>

            <div className=' space-y-4'  >
                <h3 className=' text-4xl  font-semibold'>2010</h3>
                 <p  className=' text-gray-500 font-medium'> In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>

            <div className=' space-y-4'>
                <h3 className=' text-4xl  font-semibold'>2018</h3>
                 <p  className=' text-gray-500 font-medium'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>
        </div>

        <div  className=' flex justify-center py-10'>
            <img src="https://preview.colorlib.com/theme/pulse/img/sign.png" alt="" />
        </div>
    </div>
  )
}

export default WelcomeSection