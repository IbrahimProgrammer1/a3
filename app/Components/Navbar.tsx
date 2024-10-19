import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='flex gap-16 text-2xl mt-3 absolute ml-96'>
            <li className=' font-poppins  hover:border-2 rounded-3xl pl-2 pr-2 border-green-400 border-solid hover:animate-pulse  hover:text-green-400 '><a href="#">Home</a></li>
            <li className='font-poppins  hover:border-2 rounded-3xl pl-2 pr-2 border-green-400 border-solid hover:animate-pulse hover:text-green-400 '><a href="#">Services</a></li>
            <li className='font-poppins  hover:border-2 rounded-3xl pl-2 pr-2 border-green-400 border-solid hover:animate-pulse hover:text-green-400 '><a href="#">About Us</a></li>
            <li className='font-poppins  hover:border-2 rounded-3xl pl-2 pr-2 border-green-400 border-solid hover:animate-pulse hover:text-green-400 '><a href="#">Contact Us</a></li>
        </ul>
    </div>
  )
}

export default Navbar