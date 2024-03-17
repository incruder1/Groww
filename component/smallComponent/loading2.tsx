import React from 'react'

const  Loading2 =() => {
  return (
    <div className="flex rounded-lg p-2 bg-gray-100 animate-pulse min-w-[108px] h-full">
    <div className="flex-shrink-0">
      <span className="size-8 block bg-gray-200 rounded-full">Loading</span>
    </div>
    <div className='flex items-center ml-1 '>
        <div className='w-14 h-4 bg-gray-200 rounded-full'></div>
    </div>
   
  </div>
  )
}

export default Loading2
