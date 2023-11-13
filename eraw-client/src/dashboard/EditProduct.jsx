import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const EditProduct = () => {
  const {id} = useParams();
  const {brand, imageURL, animal, description, toyName, size} = useLoaderData();

  

  // handle product submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const toyName = form.toyName.value;
    const brand = form.brand.value;
    const animal = form.animal.value;
    const description = form.description.value;
    const size = form.size.value;
    const imageURL = form.imageURL.value;

    // define the product object
    const updateProductObj = {
      toyName, brand, size, imageURL, animal, description
    }

    // update product data
    fetch(`http://localhost:5000/toy/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProductObj),
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      alert("Product updated successfully!!!")
    })
}
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Edit a Product</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
         {/* First Row */}  
         <div className='flex gap-8'>
          {/* Product Name */}  
           <div className='lg:w-1/2'>
           <div className="mb-2 block">
             <Label htmlFor="toyName" 
             value="Product Name" 
             />
        </div>
        <TextInput 
        id="toyName" 
        name='toyName' 
        type="text" 
        placeholder="Insert the product NAME here..." 
        required 
        defaultValue={toyName}
        />
          </div>      
          {/* Product Brand */}    
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="brand" 
            value="Product Brand" />
        </div>
        <TextInput 
        id="brand" 
        name='brand' type="text" 
        placeholder="Insert the product BRAND here..." 
        required 
        defaultValue={brand}
        />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          {/* Product Size */}  
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="size" 
          value="Product Size" />
        </div>
        <TextInput
         id="size" 
         name='size' 
         type="text" 
         placeholder="Small, Medium, Large..." 
         required 
         defaultValue={size}
         />
          </div>      
          {/* Product Image */}    
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" 
          value="Product Image" />
        </div>
        <TextInput
         id="imageURL" 
         name='imageURL' 
         type="text" 
         placeholder="Image URL here..." 
         required 
         defaultValue={imageURL}
         />
          </div>
        </div>

        {/* Third Row */}
        <div className='flex gap-8'>
          {/* For Wich Animal */}  
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="animal" 
          value="For Which Animal" />
        </div>
        <TextInput 
        id="animal" 
        name='animal' 
        type="text" 
        placeholder="Cat, Dog, Rabbit, Hamster..." 
        required 
        defaultValue={animal}
        />
          </div>      
          {/* Product Description */}    
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="description" 
          value="Product Description" />
        </div>
        <Textarea  
          id="description"
          name='description' 
          placeholder="Write your product description..." 
          className=''
          required rows={6} 
          defaultValue={description} 
        />    
          </div>
          <button 
          className='mt-8 
          bg-orange3 rounded 
          text-white 
          hover:bg-green2 
          border2' 
          type='submit'>Update Product</button>
        </div>
    </form>
  </div>
  )
}

export default EditProduct