import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProduct = () => {
  const {_id, toyName, imageURL } = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={imageURL} alt="" className='h-96'/>
      <h2>{toyName}</h2>
    </div>
  )
}

export default SingleProduct