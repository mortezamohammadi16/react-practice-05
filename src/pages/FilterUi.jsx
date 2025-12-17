import React from 'react';

const FilterUi = ({ price, onPriceChange, category, onCategoryChange,}) => {
  
  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <h1 className='text-3xl pt-2.5 pl-6'>Product List</h1>
      </div>

      <div className='flex justify-end content-center mt-3.5 mr-10 gap-10'>
        
        {/* price filter */}
        <select
          className='bg-gray-300 w-37 p-2 rounded-[5px]'
          value={price}
          onChange={(e) => onPriceChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="highest">Highest price</option>
          <option value="lowest">Lowest price</option>
        </select>

        {/* category filter */}
        <select
          className='bg-gray-300 w-25 p-2 rounded-[5px]'
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="mobile">mobile</option>
          <option value="laptop">laptop</option>
          <option value="accessory">accessory</option>
        </select>
      </div>
    </div>
  );
};

export default FilterUi;
