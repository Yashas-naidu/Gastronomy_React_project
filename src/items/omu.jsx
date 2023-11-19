import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function Omurice() {
  return (
    <div>

      <div className="parallax " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white   font-serif flex flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/H4uRarI0eocxNaJJLumDyMeyqEXgRT5YlFmQEqvZwJQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIvb196/bFNaZGFuS1N2cERr/XzIxUU5mREZoUm84/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/X19vcHRfX2Fib3V0/Y29tX19jb2V1c19f/cmVzb3VyY2VzX19j/b250ZW50X21pZ3Jh/dGlvbl9fc2VyaW91/c19lYXRzX19zZXJp/b3VzZWF0cy5jb21f/X2ltYWdlc19fMjAx/Nl9fMDdfXzIwMTYw/NzE5LW9tdXJpY2Ut/dmlja3ktd2FzaWst/MTgtMDA0YmM0NTRi/Njc1NDE1OGE4ZTQz/NWU2ZDZiNzg1MDUu/anBn')]"
      >
        <h1 className="text-7xl font-black font-serif  text-white">Omu rice </h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
        Ketchup-flavored chicken fried rice bundled up in a thin layer of tender omelette, Omurice is a classic Japanese home-cooked dish. 
        Omurice (pronounced as o-muraisu in Japanese) is a contemporary Japanese fusion creation that marries both Western omelette and Japanese fried rice.
         As you can tell, the word “omurice” comes from Japanese portmanteau for omelette (omelet) and rice, resulting in the name omelette rice or omelet rice. 
         </p>
        <br />
      </div>

      <div className="parallax1">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white text-white text-2xl font-serif flex flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/FrRwMfHR94no1k_OnlcxW9xJ-_Cjuav5xoyepXfbeSk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbWFuZ29z/aG9tZWtpdGNoZW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA5L0lNR18w/OTAwLmpwZz9yZXNp/emU9Njc3LDEwMjQm/c3NsPTE')]"

      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
      <li>1/2 onion chopped</li>
      <li>1 boneless , skinless chicken thigh diced 1/2 inches</li>
      <li>1 tbsp olive oil(extra virgin)</li>
      <li>1/2 cup mix vegetables</li>
      <li>1/8 tsp kosher salt</li>
      <li>1/8 tsp of fresh ground black pepper</li>
      <li>1+ 3/4 cups of day old rice ,cooled </li>
      <li> 1 Tbsp ketchup</li>
      <li> 1 tsp soy sauce</li>
      <li> 2 large eggs</li>
      <li>2 Tbsp milk</li>
      <li>shredded cheddar cheese about 6 Tbsp</li>
      </ul>
    </div>
        </p>
      </div>
      <div className="parallax2">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white  font-black flex font-serif flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/GY69Z4fqi7P1G6tXGUM6pNVrbLAVRiOSGzEJJA5LOqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bGVjcmVtZWRlbGFj/cnVtYi5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDUv/b21lbGV0LXJpY2Ut/b211cmljZS0yc20t/My5qcGc')] bg-opacity-100"
      >
        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
      <li>In a pan sweat onions and chicken thigh dices till no longer pink in presence of olive oil. Add in the vegetables and cook for some time</li>
      <li>Season with black pepper powder and kosher salt</li>
      <li>Add in the day old rice brought to room temperature .Using spatula make sure there are no lumps of rice</li>
      <li> Add the sauces and stir to coat all the rice and chicken properly and cook for some more time.</li>
      <li>In a small bowl whisk an egg and tsp of milk . In another pan , cook the omlette in the 1 tsp oil at a low heat . Place the rice mixture in the omlette and roll into a burrito in the pan softly .</li>
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default Omurice;
