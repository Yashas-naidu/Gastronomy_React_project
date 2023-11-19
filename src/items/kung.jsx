import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function kungpao() {
  return (
    <div>

      <div className="parallax " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white  bg-cover font-serif flex flex-col items-center justify-center bg-[url('https://imgs.search.brave.com/lSxOQi2UFobpWvWtaLgOxeqyC5wCupNhqX_lUPBzpBg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jYWZl/ZGVsaXRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDQvQmVzdC1LdW5n/LVBhby1DaGlja2Vu/LUlNQUdFLTMuanBn')]"      >
        <h1 className="text-7xl font-black font-serif  text-white">Kung Pao Chicken</h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
        Kung pao chicken is a popular Chinese restaurant dish of stir-fried chicken, peanuts and vegetables. 
        It's traditionally made with specialty ingredients, like Sichuan peppercorns, Chinese black vinegar, Chinese rice wine, and whole dried red chilies.
        Traditionally, this Chinese chicken dish is a dry-stir fry — not a lot of sauce is added into Kung Pao chicken.
        It's layered and complex (though easy to whip up)  of chicken tenderized using chinese cook methods.     </p>
        <br />
      </div>

      <div className="parallax1">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white bg-cover text-white text-2xl font-serif flex flex-col items-center justify-center bg-[url('https://imgs.search.brave.com/uV9ULTg9nw4jUF44S4K0VmTmx1lk9KwzMyWE-fJpyes/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3Lm9u/Y2V1cG9uYWNoZWYu/Y29tL2ltYWdlcy8y/MDE4LzA1L0t1bmct/UGFvLUNoaWNrZW4t/MTYuanBnP3Jlc2l6/ZT03NjAsOTM4JnNz/bD0x')]"

      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
        <li><h2>For the marinade</h2></li>
      <li>1 1/2 tbsp soy sauce</li>
      <li>1 tbsp dry sherry</li>
      <li>2 tsp corn starch</li>
      <li>680 grams of chicken tenders cut into 1 inch pieces</li>
     <li><h2>For the sauce</h2></li>
     <li>1 tbsp balsamic vinegar</li>
     <li>2 tbsp soy sauce</li>
     <li> 1 tbsp Hoisin sauce</li>
     <li>1 tbsp toasted sesame oil</li>
     <li>1 1/2 tbsp sugar</li>
     <li>1 tbsp corn starch</li>
     <li>1 tsp red pepper flakes</li>
     <li>1/4 tsp ground ginger</li>
     <li> 1/3 cup water</li>
     <li><h2>For the stir fry</h2></li>
     <li>2 1/2 tbsp vegetable oil</li>
     <li>1 red bell pepper diced</li>
     <li>2 stalks celery , thin sliced</li>
     <li>1/4 tsp salt</li>
     <li>3 cloves garlic</li>
     <li>5 scallions thinly sliced</li> 
     <li>1/3 cup roasted peanuts</li></ul>
    </div>
        </p>
      </div>
      <div className="parallax2">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white bg-cover font-black flex font-serif flex-col items-center justify-center bg-[url('https://www.vegrecipesofindia.com/wp-content/uploads/2017/06/kung-pao-vegetables-recipe-1-500x500.jpg')] bg-opacity-100"
      >
        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
      <li>Marinate the chicken using the marinade components .</li>
      <li>In another bowl whisk together all the sauce components such that the cornstarch dissolves and set aside .</li>
      <li>In a big non skillet or a wok , heat it at  a high temperature for the wok hay . Then add the oil and fry the chopped vegetables .Transfer to a bowl and set aside.</li>
      <li>In the same wok add more vegetable oil. Cook the chicken in two batch so that there is no crowding and there is a proper cook . Add in the vegetables , sauce and all the chicken so that there is even coating of sauce and the sauce thickens and sprinkle with scallions to serve .</li>
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default kungpao;
