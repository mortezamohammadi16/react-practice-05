import React from 'react'

const ModalShowing = ({onClose}) => {
  return (
    <>

      {/* Modal */}

      <div>
        <div className='flex justify-center fixed inset-5 '>
          <div className='flex justify-center flex-wrap w-[500px] h-[200px] bg-gray-100 border-2 border-gray-300 rounded-xl'>
            {/* modal header */}
            <div className='flex justify-between items-center w-full h-[50px] bg-gray-200 rounded-t-xl'>
              <h2 className='ml-1.5 font-bold'>MODAL HEADER</h2>
            </div>
            {/* modal text */}
            <div className='m-1.5 flex'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            {/* modal button */}
            <button type='button' className='w-[150px] bg-blue-600 text-white mb-1.5 rounded-[5px] cursor-pointer' onClick={onClose}>
              Close
            </button>

          </div>
        </div>
      </div>
    </>  
       
  )  
}

export default ModalShowing