import { useState } from 'react'
import { products } from "./data/Product";
import Cards from './pages/Cards';
import Header from './pages/Header';
import FilterUi from './pages/FilterUi';
import ModalShowing from './pages/ModalShowing';


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

  const [openModal, setOpenModal] = useState(false)


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
        <div className=' flex justify-center mt-2.5 bg-blue-700 text-white w-[250px] h-8 mx-auto items-center rounded-md mb-4'>
         <button onClick={()=> setOpenModal(true)} className='cursor-pointer' >open modal</button>
      </div>
    {openModal && (
      <ModalShowing onClose={()=>setOpenModal(false)} />
    )}
    
    
    </>
  )
}

export default App
