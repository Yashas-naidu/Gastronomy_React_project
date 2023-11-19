import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function congee() {
  return (
    <div>

      <div className="parallax " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white bg-cover  font-serif flex flex-col items-center justify-center bg-[url('https://i0.wp.com/scruffandsteph.com/wp-content/uploads/2019/02/Congee-Basic-5.jpg?ssl=1')]"
      >
        <h1 className="text-7xl font-black font-serif  text-white">Congee </h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
        Congee, also known as rice porridge, is a traditional Asian dish made by boiling rice in a large amount of water or broth until it reaches a smooth, creamy consistency.
         It is a staple in many Asian cuisines and is often enjoyed as a comfort food, particularly when someone is feeling unwell.
          Congee can be served plain or with a variety of savory or sweet toppings, making it a versatile dish.
         </p>
        <br />
      </div>

      <div className="parallax1">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white text-white bg-cover text-2xl font-serif flex flex-col items-center justify-center bg-[url('https://th.bing.com/th/id/OIP.RJIDDpbTyVOdv1nh93gvXAAAAA?pid=ImgDet&w=200&h=300&c=7&dpr=1.5')]"

      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
        <li>7 cups of chicken stock</li>
        <li>1 cup of long grain rice , rinsed</li>
        <li>1/2 tsp of kosher salt +some more for seasoning</li>
        <li>sliced spring onions</li>
        <li>soy sauce</li>
        <li>1 inch ginger sliced thin</li>
      
      </ul>
    </div>
        </p>
      </div>
      <div className="parallax2">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white bg-cover font-black flex font-serif flex-col items-center justify-center bg-[url('https://www.chinasichuanfood.com/wp-content/uploads/2015/04/shrimp-congee-4.jpg')] bg-opacity-100"
      >
        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
        <li>In a large pot add stock , rice , ginger  and salt . Bring to a boil and then simmer on a low heat. Stir so that there are no lumps</li>
        <br></br>
        <li>Keep continuing for an hour so that congee is thickened and creamy. Add salt to taste</li>
        <br></br>
        <li>Serve with scallion slices , sesame oil and soy sauce</li>
      
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default congee;
