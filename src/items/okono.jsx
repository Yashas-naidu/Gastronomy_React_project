import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function Okonomiyaki() {
  return (
    <div>

      <div className="parallax " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white   font-serif flex flex-col items-center bg-cover justify-center bg-[url('https://imgs.search.brave.com/xpK9qAMWBUFTTd2_GKfQNZIHLD0u6zi2qsYyPF7wdms/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgx/NTQ2NTI1L3Bob3Rv/L29zYWthLW9rb25v/bWl5YWtpLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0zSE1w/V1hMRmpDVFRPaVds/T3k0T080dW9JcHNW/V0xhTGUxWlF1MzUw/QUhrPQ')]"
      >
        <h1 className="text-7xl font-black font-serif  text-white">Okonomiyaki</h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
        Okonomiyaki is a popular Japanese dish that can be best described as a savory pancake. It is a pan-fried dish that typically consists of a batter mixed with shredded cabbage and various toppings, offering a high degree of customization. The name "okonomiyaki" is derived from the word "okonomi," which means "how you like" or "what you like," and "yaki," which means "grilled" or "cooked."
        </p>
        <br />
      </div>

      <div className="parallax1">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white text-white text-2xl font-serif bg-cover flex flex-col items-center justify-center bg-[url('https://imgs.search.brave.com/MJWacpBvxV4y1OuaGp9n5yHiUbRYnbZlamh4hht4l7o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg0/MjI4OTc4L3Bob3Rv/L29rb25vbWl5YWtp/LWphcGFuZXNlLWhv/dC1wbGF0ZS1waXp6/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZFZ5Z3VkNWJn/WjNCVEJjZHhkSlZn/d0R3Ym55a1pSX01N/ZEJBdElESkFxWT0')]"

      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
        <li>thinly chopped bacon/chicken(cooked)</li>
        <li>thinly sliced cabbage</li>
        <li>all purpose flour</li>
        <li>corn flour for crispiness</li>
        <li>dashi </li>
        <li>1/2 cup of corn boiled</li>
        <li>spring onions </li>
        <li>2 eggs</li>
        <li>kewpie mayonnaise</li>
        <li>seaweed flakes</li>
        <li>bonito flakes</li>
        <li>togarashi/japanese 7 spice</li>
        <li>okonomiyaki sauce</li>
        
      </ul>
    </div>
        </p>
      </div>
      <div className="parallax2">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white  font-black flex font-serif flex-col bg-cover items-center justify-center bg-[url('https://imgs.search.brave.com/gH_0zjuRa23H2spE34khP3oZrRgnUMIBoiTuh1v3D0g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzM5Lzc2Lzkx/LzM2MF9GXzIzOTc2/OTExNF95RFZ4Mkdr/cjNValZzRVRleHVQ/RUZYb0hHS0liQmlw/MC5qcGc')] bg-opacity-100"

      >
        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
        <li>Pan fry the protein without oil so that they render the fat.</li>
        <li>Transfer the protein to a different bowl and use the fats rendered as oil for pan frying okonomiyaki.</li>
        <li>In a small mixing bowl combine eggs and dashi powder mixed in warm water and whisk gently to mix and pour this into another bowl containing flour and corn starch and mix all to get a smooth mixture.</li>
        <li>Add in the thinly sliced and shredded cabbage , spring onions,corn and the cooked protein and coat evenly with the batter(do not overmix) and make sure there is no excess batter left at the bottom, which can be also be avoided by adding some more cabbage.</li>
        <li>On the previous frying pan , make the batter mixture into pancakes on the pan and fry till golden brown crisp on both sides .</li>
        <li>Serve the okonomiyaki pancakes with the okonomiyaki sauce and kewpie mayonnaise drizzle then topped wirth some more spring onion chops , nori crumb, bonito flakes and togarashi spice</li>     
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default Okonomiyaki;
