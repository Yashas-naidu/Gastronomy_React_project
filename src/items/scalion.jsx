import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function scallion_pancake() {
  return (
    <div>

      <div className="parallax " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white  bg-cover  font-serif flex flex-col items-center justify-center bg-[url('https://imgs.search.brave.com/37I1vP9Kkhe2Ny01a9RsdYQvVVOks3gF27_Cqx5g7dA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9kZWxp/c2gtMjAwNDA4LXNj/YWxsaW9uLXBhbmNh/a2VzLTAwNC1hYi0x/NTg4MTkyODIzLmpw/Zz9jcm9wPTF4dzow/Ljg0MzUyODAxODk0/MjM4MzZ4aDtjZW50/ZXIsdG9wJnJlc2l6/ZT0xMjAwOio')]"
      >
        <h1 className="text-7xl font-black font-serif  text-white">Scallion Pancake</h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
        Scallion pancakes, also known as cong yu bing or green onion pancakes, originate from china. You'll find different variations of this flatbread throughout the world. 
        Most notably, roti canai in Malaysia, which is also known as roti paratha in Indian and other South Asian countries.
        While roti canai is super flaky and buttery, scallion pancakes have an umami savory taste from sesame, five spice, and scallions.
        Scallions are well used ingredient in Asian cuisine and usage of these not only provides different flavours but also a great aroma to the food.
         </p>
        <br />
      </div>

      <div className="parallax1">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white bg-cover text-white text-2xl font-serif flex flex-col items-center justify-center bg-[url('https://imgs.search.brave.com/0E3dkWXkcfGU9bx23DSoH_639dPmobGBGvWymxzQKPM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aGV3/b2tzb2ZsaWZlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNC9lYXN5LXNo/b3J0Y3V0LXNjYWxs/aW9uLXBhbmNha2Vz/LTIuanBn')]"

      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
        <li><h2>For Pancakes</h2></li>
      <li>2.5 cups all purpose flour</li>
      <li>1 cup warm water </li>
      <li>1/4 cup black sesame oil</li>
      <li>2 cups of thinly sliced scallion</li>
      <li>1/4 cup vegetable oil</li>
      <li>kosher salt to taste</li>
      <li><h2>For Dipping sauce</h2></li>
      <li>2 tbsp soy sauce</li>
      <li>2 tbsp rice wine vinegar</li>
      <li>1 tsp fine sliced scallion greens</li>
      <li>2 tsp sugar</li>
      </ul>
    </div>
        </p>
      </div>
      <div className="parallax2">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white bg-cover  font-black flex font-serif flex-col items-center justify-center bg-[url('https://imgs.search.brave.com/4WSHiYVCKqZSxMuOT0z4P07mcioTX--NBZeon0iFQ6Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oZWFs/dGh5bmliYmxlc2Fu/ZGJpdHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzA1/L1NjYWxsaW9uLVBh/bmNha2VzLU5FVy5q/cGc')] bg-opacity-100">

        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
      <li>In a bowl add 2 cups of flour and 3/4 cups of water and mix till the dough comes along.Gradually add tablespoons of water if it doesnt come along while mixing .</li>
      <li> Make the dough into round and rest it overnight in fridge .</li>
      <li>Divide the dough into four equal portions and roll each into 8 inch diameter circles .</li> 
      <li>Brush sesame oil on those and roll it into spiral and again roll into 8 inch circles . This is for the development of flaky layers</li>
      <li>In a small bowl mix all the sauce ingredients and set aside</li>
      <li>In a non stick pan cook the pancakes in vegetable oil fats till golden brown on both sides and serve hot with the sauce .</li>
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default scallion_pancake;
