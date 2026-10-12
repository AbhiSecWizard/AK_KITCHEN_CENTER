// import React from 'react'

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Service from "./pages/Service"
import WhyChooseUs from "./pages/WhyChooseUs"

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
       <div>
        <Home />        
        <About/>
        <Service/>
        <WhyChooseUs/>
        <Gallery/>
        <Contact/>
       </div>
       <div>
        <Footer/>
       </div>
    </div>
  )
}

export default App
