import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function Baigan() {
  return (
    <div>

      <div className="baigan1 " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white font-serif flex flex-col items-center justify-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1589854880846-842b8fe2ba4b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      >
        <h1 className="text-7xl font-black font-serif  text-white">Baingan ka Bharta</h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
          Baingan ka Bharta is a 
Baingan ka Bharta, also known simply as "Baingan Bharta," is a popular Indian dish made from roasted eggplant (baingan) that is mashed and cooked with various spices and ingredients. It is a beloved North Indian dish known for its smoky flavor and rich, savory taste. Baingan Bharta is a vegetarian dish and is often served with flatbreads like roti, naan, or paratha.

The preparation typically involves roasting eggplant until the skin is charred, which imparts a distinct smokiness to the dish. After roasting, the soft and flavorful flesh of the eggplant is mashed and cooked with ingredients like onions, tomatoes, ginger, garlic, and a blend of aromatic spices, including cumin, coriander, turmeric, and garam masala. This combination of ingredients creates a flavorful and slightly spicy dish with a creamy texture.

Baingan Bharta can be customized to suit individual preferences, with variations in spice levels and additional ingredients such as peas or potatoes. It is a popular choice among vegetarians and is often served as a side dish or as the main course in a North Indian meal. This dish is appreciated not only for its taste but also for its cultural and regional significance in Indian cuisine.

        </p>
        <br />
      </div>

      <div className="baigan2">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white text-white text-2xl font-serif flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1636065638318-c198051f089f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
        <li>1 large eggplant (baingan)</li>
        <li>2-3 tablespoons of oil</li>
        <li>1 onion, finely chopped</li>
        <li>2-3 green chilies, chopped (adjust to your spice preference)</li>
        <li>1 teaspoon of ginger-garlic paste</li>
        <li>1/2 teaspoon of cumin seeds</li>
        <li>1/2 teaspoon of turmeric powder</li>
        <li>1 teaspoon of coriander powder</li>
        <li>1/2 teaspoon of red chili powder (adjust to your spice preference)</li>
        <li>1/2 teaspoon of garam masala</li>
        <li>Salt to taste</li>
        <li>Fresh coriander leaves for garnish</li>
      </ul>
    </div>
        </p>
      </div>
      <div className="baigan3">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white  font-black flex font-serif flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1652622550740-f90d03edfbf0?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-opacity-100"
      >
        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
        <li>
          Roast the whole eggplant over an open flame or on a grill until the skin is charred, and the flesh becomes soft. Alternatively, you can roast it in an oven at 400°F (200°C) for about 30-40 minutes. Allow the roasted eggplant to cool.
        </li>
        <li>
          Once the eggplant is cool enough to handle, peel off the charred skin and mash the flesh with a fork or potato masher. Discard the stem.
        </li>
        <li>
          In a pan, heat oil over medium heat. Add cumin seeds and let them splutter. Then add chopped onions and green chilies. Sauté until the onions turn translucent.
        </li>
        <li>
          Add ginger-garlic paste and sauté for another couple of minutes until the raw smell disappears.
        </li>
        <li>
          Add turmeric powder, coriander powder, red chili powder, and salt. Mix well and sauté for a few more minutes until the oil begins to separate.
        </li>
        <li>
          Add the mashed eggplant and mix it with the spices. Cook for 10-15 minutes on low heat, stirring occasionally.
        </li>
        <li>
          Add garam masala and stir well. Cook for a few more minutes.
        </li>
        <li>
          Garnish with fresh coriander leaves.
        </li>
        <li>
          Serve Baingan ka Bharta hot with roti, naan, or rice.
        </li>
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default Baigan;
