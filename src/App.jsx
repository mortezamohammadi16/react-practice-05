import { useState } from 'react'
import { products } from "./data/Product";
import Cards from './pages/Cards';


function App() {
  

  return (
    <>
    <h1 className='flex text-3xl pt-2.5 pl-3'>Product List</h1>
    <div className='flex flex-wrap gap-4 pl-3'>
        {products.map((product)=>(
          <Cards 
            key= {product.id}
            title={product.title}
            price = {product.price}
            category = {product.category}
          />
        ))}
    </div>
    
    </>
  )
}

export default App
