import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Categories from '../components/Categories'
import Imageslider from '../components/Imageslider'
import Listings from '../components/Listings'
import Footer from '../components/Footer'

function Homepage() {
  return (
   <>
   <Navbar />
   <Slide />
   <Imageslider />
   <Categories />
   <Listings />
   <Footer />
   
   </>
  )
}

export default Homepage