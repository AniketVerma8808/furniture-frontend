import React from 'react'
import Hero from '../components/banner/Hero'
import Banner from '../components/banner/Banner'
import CategoriesSlider from '../components/Categories/CategoriesSlider'
import Review from '../components/review/Review'
import ProductSlider from '../components/slider/ProductSlider'
import { useSelector } from 'react-redux'
import Bannerimg from '../assets/image/banner/Bannerimg2.png';
import Bannerimg2 from '../assets/image/banner/Bannerimg3.png';

const Home = () => {
    const { bestseller, newarrival } = useSelector((state) => state.product);


    return (
        <>
            <Hero />
            <Banner image={Bannerimg}/>
            <CategoriesSlider />
            <ProductSlider title={'New Arrivals'} data={newarrival} />
            <ProductSlider title={'BestSeller'} data={bestseller} />
            <Banner image={Bannerimg2}/>
            <ProductSlider title={'Recently Viewed'} data={bestseller} />
            <Review/>
        </>
    )
}

export default Home
