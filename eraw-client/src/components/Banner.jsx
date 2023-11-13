import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-lightoran flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'> 
                <h2 className='text-5xl font-bold leading-snug text-coltext'>Buy and Sell Your Animal Products<span className='text-orange3'> for the Best Prices</
                span></h2>
                <p className='md:4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est amet laboriosam beatae nobis, 
                    voluptates corrupti nam magni. Mollitia impedit porro qui quo laborum labore soluta alias quia </p>
                    <div>
                        <input type="search" name="search" id="search" placeholder="Search a product" className='py-2
                        px-2 rounded-s-sm outline-none'/>
                        <button className='bg-orange3 px-6 py-2 text-coltext font-medium hover:bg-darkoran hover:text-white
                        transition-all ease-in duration-200'>Search</button>
                    </div>
            </div>

            {/* right side */}    
            <div>
                <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner