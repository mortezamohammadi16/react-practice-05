import React from 'react'
import myImage from "../media/my-image.jpg";


const Cards = ({title, price, category}) => {
  return (
    <>
        <div className=' w-83.5 h-83.5 bg-gray-800 rounded-[10px] mt-3 ml-3'>
            <div className='flex p-3 justify-between w-full'>
                <h3 className='text-2xl text-gray-200'>{title}</h3>
                <p className='text-xl text-gray-300'>{price}$</p>
            </div>
            <div className='flex justify-self-start pl-3'>
                <p className='text-sm text-white'>{category}</p>
            </div>

            <div>
                <img src={myImage} className='p-2 rounded-2xl' />
            </div>
        </div>                    
    </>
  )
}

export default Cards