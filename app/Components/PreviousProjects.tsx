import React from 'react'
import Image from 'next/image'
import github from './github.png'

const PreviousProjects = () => {
  return (
    <div>
      <h1 className='mt-32 text-center font-oswald tracking-[1rem] text-green-400 text-6xl'>Previous Projcets/Portfoloio</h1>
      <p className='text-3xl text-center mt-24 font-poppins '>I had uploaded all my previous Assisnment on <a target="_blank" className='text-blue-700' href="https://github.com/">Github</a></p>
      <div className='text-3xl mt-32 font-poppins ml-24'>
      <h1>My Assignment Number 1 Link ={'>'} <a href="#"></a></h1>
      <br />
      <h1>My Assignment Number 2 Link ={'>'} <a href="#"></a></h1>
      <br />
      <h1>My Assignment Number 3 Link ={'>'} <a href="#"></a></h1>
      </div>
      <Image className='float-right -mt-80' src={github} alt="" />
    </div>
  )
}

export default PreviousProjects
