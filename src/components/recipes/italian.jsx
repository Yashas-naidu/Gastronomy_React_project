import React from 'react';
import { Italian } from '../../data/Foodlist';


const Italy = () => {
    return(
    <div className='font-serif'>
        <div className="bg-[url('https://www.freewebheaders.com/wp-content/gallery/world-flags/italy-grunge-flag-header.jpg')] bg-no-repeat bg-cover bg-center">
        <h1 className=' font-bold text-6xl text-center p-7'>
        Italian
      </h1>
        </div>
  
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        
    {Italian.map((item, index) => (
      <div
        key={index}
        className='border shadow-lg rounded-lg hover:scale-105 duration-300'
      >
        <a href={item.ref}><img
          src={item.image}
          alt={item.name}
          className='w-full h-[200px]  object-cover rounded-t-lg '
        /></a>
        <div className='flex justify-between px-2 py-4'>
          <p className='font-bold'>{item.name}</p> 
        </div>
      </div>
    ))}
  </div>
  </div>  
    )
};

export default Italy;