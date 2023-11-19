import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag, AiFillHeart } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill,BsPeopleFill } from 'react-icons/bs';
import {PiRobot} from 'react-icons/pi'
import {BiLogOut} from 'react-icons/bi'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {FaBowlFood,FaMedal} from 'react-icons/fa6'
import {CgProfile} from 'react-icons/cg'
import {GrConnect} from 'react-icons/gr'
import {SiCodechef} from 'react-icons/si'
import {Link} from 'react-router-dom'
import {GoVideo} from 'react-icons/go'
import foodItems from './foodlist';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { items } = foodItems;

  const filteredItems = items.filter((food) => food.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 relative'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} className='hover:scale-105 duration-300' />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-10'>
          The Art of <span className='font-bold'>Gastronomy</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Display filtered items */}
        {searchQuery && (
          <div className='absolute top-full left-0 right-0 bg-white p-4 shadow-md z-10'>
            {filteredItems.length === 0 ? (
              <p className='text-gray-600'>No matching items</p>
            ) : (
              <ul>
                {filteredItems.map((food) => (
                  <li key={food.name} className='py-2'>
                    {food.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Cart button */}
      {/* <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full hover:scale-105 duration-300'>
        <AiFillHeart size={20} className='mr-2' />
        My Fav
      </button> */}

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
        <h2 className='text-2xl p-4'>
          <span className='font-bold'>Menu</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800 '>
            <li className='text-xl py-4 flex hover:scale-105 duration-100'>
              <FaBowlFood size={25} className='mr-4' /> <Link to='/recipes'>Recipes</Link>
            </li>
            <li className='text-xl py-4 flex hover:scale-105 duration-100'><PiRobot size={25} className='mr-4' /><Link to="/bot">Ask Bot</Link></li>
                <li className='text-xl py-4 flex hover:scale-105 duration-100'><SiCodechef size={25} className='mr-4' /><Link to="/chef">chef</Link></li>
                <li className='text-xl py-4 flex hover:scale-105 duration-100'><GoVideo size={25} className='mr-4' /> <Link to='/tutorial'>Tutorials</Link></li>
                <li className='text-xl py-4 flex hover:scale-105 duration-100'><CgProfile size={25} className='mr-4' /> <Link to="/profile">profile</Link></li>                
                <li className='text-xl py-4 flex hover:scale-105 duration-100'><BiLogOut size={25} className='mr-4' /> <Link to="/">Logout</Link></li>
            {/* Add other menu items as needed */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
