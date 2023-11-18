import React, { useEffect, useState } from 'react'
import ToyCards from '../components/ToyCards';

const BestSellers = () => {
    const [product, setProducts] = useState([]);

    useEffect( () => {
        fetch("/all-toys")
        .then(res => res.json())
        .then(data => setProducts(data.slice(0, 8)))
    }, []) 
  return (
    <div>
    <ToyCards product={product} headline="Best Sellers"/>
    </div>
  )
}

export default BestSellers
