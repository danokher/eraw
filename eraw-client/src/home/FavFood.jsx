import React from 'react'
import { Link } from 'react-router-dom'

const FavFood = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
          <img src='https://www.revelationpets.com/hs-fs/hubfs/Mars_Petcare.jpeg?width=500&name=Mars_Petcare.jpeg'
          alt='' className='rounded md:w-12/12'/>
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug text-coltext'>The best brands <span className='text-orange3'>supplies</span></h2>
        <p className='mb-10 text-lg md:w-5/6 text-coltext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio incidunt consequuntur quis iusto natus tenetur amet, quas 
          earum accusantium non at a! Esse laboriosam, tempore a obcaecati quidem vel perspiciatis.</p>
          {/* stats */}
          <Link to="/shop" className='mt-12 block'><button className='bg-orange3 text-white font-semibold px-5 py-2 rounded hover:bg-darkoran transition-all dutation-300'>Explore More</button></Link>
          <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
              <h3 className='text-3xl font-bold text-coltext'>800+</h3>
              <p className='text-base text-coltext'>Register Users</p>
            </div>
            <div>
              <h3 className='text-3xl font-bold text-coltext'>1200+</h3>
              <p className='text-base text-coltext'>Products Bought</p>
            </div>
            <div>
              <h3 className='text-3xl font-bold text-coltext'>550+</h3>
              <p className='text-base text-coltext'>Product Listing</p>
            </div>
          </div>
      </div>

    </div>
  )
}

export default FavFood