import React from 'react'
import Navbar from './Components/Navbar'
import Mainsect from './Components/Mainsect'
import Hero from './Components/Hero'
import PreviousProjects from './Components/PreviousProjects'
import Goals from './Components/Goals'
import Footer from './Components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <br />
      <Mainsect/>
      <Hero/>
      <PreviousProjects/>
      <Goals/>
      <Footer/>
    </div>
  )
}

export default page