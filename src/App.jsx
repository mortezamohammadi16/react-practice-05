import { useState } from 'react'
import { products } from "./data/Product";
import Cards from './pages/Cards';
import Header from './pages/Header';
import FilterUi from './pages/FilterUi';


function App() {
  const [price, setPrice] = useState("all")
  const [category, setCategory] = useState("all")

  let filteredProducts = [...products]

  if (price === "highest") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (price === "lowest") {
    filteredProducts.sort((a,b)=> a.price - b.price);
  }

  //category filter
  if (category !== "all"){
    filteredProducts = filteredProducts.filter(
      (product)=> product.category === category
    );
  }

  return (
    <>
    <Header />
    <FilterUi 
       price={price}
       onPriceChange={setPrice}
       category={category}
       onCategoryChange={setCategory}
    />
    <div className='flex flex-wrap gap-4 pl-3'>
        {filteredProducts.map((product)=>(
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
