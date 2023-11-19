import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Explore food Like never Before',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Explore food Like culinary legends',
        1000,
        'Explore food Like a Gastronomist',
        1000,
        'Explore food Like a Food critic',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    /></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
    </div>
  )
}

export default Hero