import React from 'react'

const NavLinks = ({children}) => {
  return (
    <div 
    className="duration-100 ease-in hover:translate-x-1 hover:cursor-pointer ">
        {children}
    </div>

  )
}

export default NavLinks