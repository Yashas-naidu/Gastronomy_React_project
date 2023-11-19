import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function pumpkin_pie() {
  return (
    <div>

      <div className="parallax " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white  bg-cover font-serif flex flex-col items-center justify-center bg-[url('https://th.bing.com/th/id/OIP.hkL22_HOgEs_wJlrJuZLMwHaHp?w=181&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7')]"
      >
        <h1 className="text-7xl font-black font-serif  text-white"> Chinese Pumpkin Pie</h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
        Crispy Chinese pumpkin pie used to be a yummy dessert for holidays. Those lovely and colorful little pie are deep-fried in order to get a crispy surface.
        However they will also amaze you by the soft inside and sweet filling.
        As it is easy to make, there are many versions of pumpkin cake creating a variety of taste experiences.
        Pumpkin is a healthy carbohydrate with a low-fat content.
        Pumpkin contains β-carotene, which can be absorbed by the human body and converted into vitamin A, which protects the eyes.
         </p>
        <br />
      </div>

      <div className="parallax1">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white bg-cover text-white text-2xl font-serif flex flex-col items-center justify-center bg-[url('https://www.chinasichuanfood.com/wp-content/uploads/2014/11/Chinese-pumpkin-cake-5.jpg')]"

      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
        <li>1 can of pumpkin puree or 700g of pumpkin</li>
        <li>2 cups of glutinous rice flour</li>
        <li>1/2 cup of bread crumbs</li>
        <li>oil for frying</li>
        <li>2/3 cups of red bean paste</li>
      
      </ul>
    </div>
        </p>
      </div>
      <div className="parallax2">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white bg-cover font-black flex font-serif flex-col items-center justify-center bg-[url('https://omnivorescookbook.com/wp-content/uploads/2014/10/Chinese-Pumpkin-Bun-1.jpg')] bg-opacity-100"
      >
        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
      <li>If using pumpkin the cut the pumpkin into bite size pieces with no skin . On a steamer rack steam the pumpkin at a high temperature steam so that the pumpkin becomes soft to an extent where it is pierced by fork. Transfer to a bowl and mash to form a smooth paste</li>
      <li> Blend the rice flour into the pumpkin paste so that flour is fully incorporated. Keep adding flour and mixing till its difficult to blend and you get a dough. Knead the dough for 10 minutes  </li>
      <li>Divide the dough into 16 equal portions of 41g each and place some amount of reb bean paste at the center shaped as a ball . Close the red bean paste inside the dough and roll it slightly to form a pancake shape</li>
      <li>Coat the pancakes in breadcrumbs and fry in air fryer preheated at 350 F or 176 C . Spray with oil in between for a better crust and serve</li>
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default pumpkin_pie;
