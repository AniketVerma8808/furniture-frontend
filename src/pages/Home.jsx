import React from 'react'
import Hero from '../components/banner/Hero'
import Banner from '../components/banner/Banner'
import CategoriesSlider from '../components/Categories/CategoriesSlider'
import Arrivals from '../components/arrivals/Arrivals'
import Review from '../components/review/Review'
import Opportunities from '../components/opportunities/Opportunities'
import Bestsellers from '../components/Bestsellers/Bestsellers'
import RecentViewed from '../components/recentViewed/RecentViewed'
import Banner2 from '../components/banner/Banner2'

const Home = () => {
    return (
        <>
            <Hero />
            <Banner />
            <CategoriesSlider />/
            <Banner2 />
            <Arrivals />
            <Bestsellers />
            <Opportunities />
            <RecentViewed />
            <Review />
        </>
    )
}

export default Home
