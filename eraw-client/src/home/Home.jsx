import React from 'react'
import Banner from '../components/Banner'
import BestSellers from './BestSellers'
import FavFood from './FavFood'
import PromoBanner from './PromoBanner'
import OtherProducts from './OtherProducts'
import Review from './Review'


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellers/>
      <FavFood/>
      <PromoBanner/>
      <OtherProducts/>
      <Review/>
    
    </div>
  )
}

export default Home