import React from "react"
import {useLocation, useNavigate} from "react-router-dom";
import Navbar from './components/navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/food'
import Category from './components/category'
import Footer from './components/footer'

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">
            <h1>Welcome{location.state.id}</h1>
        <Navbar/>
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
        <Footer />

        </div>
    )
}

export default Home