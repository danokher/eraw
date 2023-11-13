import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageProduct = () =>{
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-toys").then(res => res.json()).then(data => setAllProducts(data));
  },[])

  // delete a product
  const handleDelete = (id) =>{
    
    fetch(`http://localhost:5000/toy/${id}`, {
      method: "DELETE",      
    }).then(res => res.json()).then(data => {
      alert("Product deleted")
     // setAllProducts(data);
  })
}
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Products</h2>

      {/* Table for products data */}
      <Table className='lg:w-[1180px]'>
      <Table.Head>
        <Table.HeadCell>Number</Table.HeadCell>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Brand</Table.HeadCell>
        <Table.HeadCell>Size</Table.HeadCell>
        <Table.HeadCell>Animal</Table.HeadCell>
        <Table.HeadCell>
          <span>Edit or Delete</span>
        </Table.HeadCell>
      </Table.Head>
      {
        allProducts.map((product, index) => <Table.Body className="divide-y" key={product._id}>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {index + 1}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {product.toyName}
          </Table.Cell>
          <Table.Cell>{product.brand}</Table.Cell>
          <Table.Cell>{product.size}</Table.Cell>
          <Table.Cell>{product.animal}</Table.Cell>
          <Table.Cell>
            <Link 
              className="font-medium text-coltext hover:underline dark:text-coltext"
              to={`/admin/dashboard/edit-products/${product._id}`} 
            >
              
              Edit
             
            </Link>
            <button onClick={() => handleDelete(product._id)} className='bg-orange3 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-600 ml-3'>Delete</button>
          </Table.Cell>
        </Table.Row>
        </Table.Body>)
      }

    </Table>
    </div>
  )
}

export default ManageProduct