import React from "react";
import Hero from "../components/banner/Hero";
import Banner from "../components/banner/Banner";
import CategoriesSlider from "../components/Categories/CategoriesSlider";
import Review from "../components/review/Review";
import ProductSlider from "../components/slider/ProductSlider";
import { useSelector } from "react-redux";
import Bannerimg from "../assets/image/banner/Bannerimg2.png";
import Bannerimg2 from "../assets/image/banner/Bannerimg3.png";

const Home = () => {
  const { products } = useSelector((state) => state.product);
  console.log(products);
  // Filter arrays
  const newarrivalProducts = products.filter((p) => p.newarrival);
  const bestsellerProducts = products.filter((p) => p.bestsellor);
  const trendingProducts = products.filter((p) => p.trending);

  // For recently viewed, you can create a separate array
  const recentlyViewed = products.filter((p) => p.recentlyViewed); // if you track it

  return (
    <>
      <Hero />
      <Banner image={Bannerimg} />
      <CategoriesSlider />
      <ProductSlider title="New Arrivals" data={newarrivalProducts} />
      <ProductSlider title="Best Sellers" data={bestsellerProducts} />
      <ProductSlider title="Trending" data={trendingProducts} />
      <Banner image={Bannerimg2} />
      <ProductSlider title={"Recently Viewed"} data={bestsellerProducts} />
      <Review />
    </>
  );
};

export default Home;
