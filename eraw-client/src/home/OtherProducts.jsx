import React, { useEffect, useState } from 'react'
import ToyCards from '../components/ToyCards';

const OtherProducts = () => {
        const [product, setProducts] = useState([]);
    
        useEffect( () => {
            fetch("http://localhost:5000/all-toys")
            .then(res => res.json())
            .then(data => setProducts(data.slice(4, 10)))
        }, []) 
      return (
        <div>
        <ToyCards product={product} headline="Other Products"/>
        </div>
      )
}

export default OtherProducts