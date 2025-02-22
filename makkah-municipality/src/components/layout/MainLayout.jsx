import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from '../../features/home/Home'
import AboutUs from '../../features/aboutus/AboutUs'

function MainLayout() {
  return (
<div className="wrapper">
 <Header/>
  <div className="content">
 <AboutUs></AboutUs>
  </div>
  <Footer/>
</div>

  )
}

export default MainLayout