import React from 'react'
import Image from 'next/image'
import ava from './img4.png'


const Mainsect = () => {
  return (
    <div>
      <div className='flex gap-12'>
        <h1 className='text-7xl pl-16 mt-60 font-poppins font-semibold'>I am a Webaite Developer <br /> Student at <span className='text-green-500 font-extrabold'>GIAIC</span></h1>
        <Image className='mt-16' src={ava} alt="here" width={500} height={500}/>
        </div>
    </div>
  )
}

export default Mainsect