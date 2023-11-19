import React from 'react';
import { Link } from 'react-router-dom';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
          <p className='font-bold text-3xl px-2 pt-4'>Learn Cooking like never before</p>
          <p className='px-2'>Become an expert</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'><Link to='/tutorial'>Watch</Link></button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://th.bing.com/th/id/R.6894da7fe94d1079cb3e76b142130e87?rik=gXFNb3N1bDTs1A&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2019%2f05%2f4K-Frying-Pan-Desktop-Wallpaper.jpg&ehk=NSt6AuyzSzLm9%2b0oRddoHqceQ9CB0OkVwHRSKVipHqc%3d&risl=&pid=ImgRaw&r=0'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-3xl px-2 pt-4'>New Recipes</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'><Link to='/Recipes'>View</Link></button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded- '
          src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative hover:scale-105 duration-300'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-3xl px-2 pt-4'>What do Chefs say?</p>
          <p className='px-2'>Discover what they want to deliver</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'><Link to='/Chef'>View</Link></button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://www.shutterstock.com/image-photo/cook-hat-wooden-table-free-600nw-792682870.jpg'
          alt='/' 
        />
      </div>
    </div>
  );
};

export default HeadlineCards;