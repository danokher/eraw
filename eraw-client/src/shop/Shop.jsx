import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://eraw-back.vercel.app/all-toys")
    .then(res => res.json())
    .then(data => setProducts(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center text-coltext'> All Products are here </h2>

        <div className='my-9 grid lg:grid-cols-4 sm_grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5'>
          {
            products.map(products => <Card
            >
              <img src={products.imageURL} alt=""/>
              <h5 className="text-2xl font-bold tracking-tight text-orange3 dark:text-white">
                {products.toyName}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {products.description}
              </p>
              <button className='bg-orange3 text-white font-semibold px-5 py-2 rounded hover:bg-darkoran transition-all dutation-300'>Buy Now</button>
            </Card>)
          }
        </div>

    </div>
  )
}

export default Shop
