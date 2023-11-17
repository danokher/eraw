import React from 'react'
import { Link } from 'react-router-dom'
import animalPic from "../assets/clear-bg-exotic-animals.png"

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-salmon px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug text-coltext'>2023 Animal Product Awards</h2>
                <Link to="https://www.couponzguru.com/pet-products-offers/" target="_blank" className='block'><button className='bg-orange3 text-white font-semibold px-5 py-2 rounded hover:bg-darkoran transition-all dutation-300 mb-5'>Get Promo Code</button></Link>
            </div>
            <div>
                <img src={animalPic} alt="" className='w-96'/>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner