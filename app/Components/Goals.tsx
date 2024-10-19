import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import goal from './goal.png'

const Goals = () => {
  return (
    <div className='mt-64'>
        <div className='flex'>

        <h1 className='text-center font-oswald tracking-widest text-8xl mt-8 ml-[45rem] text-green-400 select-none'>GOAL</h1>
        <Image src={goal} alt="" width={100} />
        </div>
      <h1 className='font-poppins text-center mt-24 text-4xl hover:text-red-400 cursor-pointer '>My Goal is to Become a Professional Web-Developer in this 1 month</h1>
    </div>
  )
}

export default Goals
