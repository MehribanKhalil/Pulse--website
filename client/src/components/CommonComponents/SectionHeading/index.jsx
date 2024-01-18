import React from 'react'
import './index.scss'

const SectionHeading = ({icon,title,titleDark, isGray}) => {
  return (
    <div className=' text-center py-10 text-white space-y-4'>
        <div className=' flex justify-center '>
            <div className={` ${isGray && " text-gray-400"} text-7xl`}>
                {icon}
            </div>
            
        </div>
        
           <div className='title-container'>
           <h2  className={` ${titleDark && ' text-black'} section-title text-4xl font-semibold`}>{title}</h2>
           </div>
        
    </div>
  )
}

export default SectionHeading