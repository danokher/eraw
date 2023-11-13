import React from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const UploadProduct = () => {

  // handle product submission
  const handleProductSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const toyName = form.toyName.value;
    const brand = form.brand.value;
    const animal = form.animal.value;
    const description = form.description.value;
    const size = form.size.value;
    const imageURL = form.imageURL.value;

    // define the product object
    const productObj = {
      toyName, brand, size, imageURL, animal, description
    }

    // send data to the database
    fetch("http://localhost:5000/upload-toy"  ,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productObj),
    }).then(res => res.json()).then(data => {
      // console.log(data);
      alert("Product uploaded successfully!!!")
      form.reset();
    })
    
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Product</h2>

      <form onSubmit={handleProductSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
         {/* First Row */}  
        <div className='flex gap-8'>
          {/* Product Name */}  
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="toyName" value="Product Name" />
        </div>
        <TextInput id="toyName" name='toyName' type="text" placeholder="Insert the product NAME here..." required />
          </div>      
          {/* Product Brand */}    
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="brand" value="Product Brand" />
        </div>
        <TextInput id="brand" name='brand' type="text" placeholder="Insert the product BRAND here..." required />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          {/* Product Size */}  
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="size" value="Product Size" />
        </div>
        <TextInput id="size" name='size' type="text" placeholder="Small, Medium, Large..." required />
          </div>      
          {/* Product Image */}    
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Product Image" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Image URL here..." required />
          </div>
        </div>

        {/* Third Row */}
        <div className='flex gap-8'>
          {/* For Wich Animal */}  
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="animal" value="For Which Animal" />
        </div>
        <TextInput id="animal" name='animal' type="text" placeholder="Cat, Dog, Rabbit, Hamster..." required />
          </div>      
          {/* Product Description */}    
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Product Description" />
        </div>
        <Textarea  
          id="description"
          name='description' 
          placeholder="Write your product description..." 
          className=''
          required rows={6} 
        />    
          </div>
          <button className='mt-8 bg-orange3 rounded text-white hover:bg-green2 border2' type='submit'>Upload Product</button>
        </div>
    </form>
  </div>
  )
}

export default UploadProduct