import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from '../../features/home/Home'

function MainLayout() {
  return (
<div className="wrapper">
 <Header/>
  <div className="content">
  <Home/>
  </div>
  <Footer/>
</div>

  )
}

export default MainLayout