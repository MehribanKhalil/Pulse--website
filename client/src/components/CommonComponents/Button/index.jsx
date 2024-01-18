import React from 'react'

const Button = ({children}) => {
  return (
    <button className=' font-medium text-lg  bg-main-color px-7 py-3'>
        {children}
    </button>
  )
}

export default Button