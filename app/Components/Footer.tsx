import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black flex mt-24 font-poppins'>
      <ul className='ml-24 mt-2'>
        <li className='mt-2 hover:text-green-400'><a href="#">Home</a></li>
        <li><a href="#" className=' hover:text-green-400'>Services</a></li>
        <li><a href="#" className=' hover:text-green-400'>About Us</a></li>
        <li><a href="#" className=' hover:text-green-400'>Contact Us</a></li>
        <span className='ml-[33rem] select-none'>All rights Reserved © Created by Ibrahim Muhmammad Irshad.</span>
      </ul>
    </div>
  )
}

export default Footer
