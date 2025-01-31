import React from 'react'
import Hero from '../components/banner/Hero'
import Banner from '../components/banner/Banner'
import CategoriesSlider from '../components/Categories/CategoriesSlider'
import Arrivals from '../components/arrivals/Arrivals'

const Home = () => {
    return (
        <>
            <Hero />
            <Banner />
            <CategoriesSlider />
            <Arrivals />
        </>
    )
}

export default Home
