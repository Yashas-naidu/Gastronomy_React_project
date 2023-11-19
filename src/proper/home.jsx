import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import HeadlineCards from '../components/HeadlineCards'
import Food from '../components/food'
import Category from '../components/category'
import Footer from '../components/footer'

function App() {
  return (
    
    <div>
        <Navbar/>
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
        <Footer />
    </div>
    
  );
}

export default App;