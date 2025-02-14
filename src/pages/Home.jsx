import React from 'react'
import Hero from '../components/banner/Hero'
import Banner from '../components/banner/Banner'
import CategoriesSlider from '../components/Categories/CategoriesSlider'
import Review from '../components/review/Review'
import Banner2 from '../components/banner/Banner2'
import ProductSlider from '../components/slider/ProductSlider'
import { useSelector } from 'react-redux'

const Home = () => {
    const { bestsellor,
        newarrival
    } = useSelector((state) => state.product)

    return (
        <>
            <Hero />
            <Banner />
            <CategoriesSlider />

            <ProductSlider title={'New Arrivals'} data={newarrival} />
            <ProductSlider title={'Best Sellor'} data={bestsellor} />
            <Banner2 />
            <ProductSlider title={'Recently Viewed'} data={bestsellor} />

            <Review />
        </>
    )
}

export default Home
