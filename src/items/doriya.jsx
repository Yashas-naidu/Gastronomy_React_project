import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function Doriyaki() {
  return (
    <div>

      <div className="parallax " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white   font-serif flex flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/p_nsHG1peFuqh-zlXuk42pyokw5e6HQGG4II9x8tHHs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGVsaWNhY3ku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA0L2RvcmF5/YWtpLXJlZC1iZWFu/LXBhbmNha2VzLTEu/anBn')]"
      >
        <h1 className="text-7xl font-black font-serif  text-white">Doriyaki</h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
        Dorayaki is a type of Japanese confection consisting of two small pancake-like patties made from castella wrapped around a filling of sweet azuki bean paste.
         The original dorayaki consisted of only one layer. Dora cake or Doriyaki is a Japanese dessert stuffed pancake with chocolate spread or melted chocolate. It is easy to make and very soft and spongy in taste
         The original dorayaki consisted of only one layer. Its current shape was invented in 1914 by Usagiya in the Ueno district of Tokyo
         </p>
        <br />
      </div>

      <div className="parallax1">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white text-white text-2xl font-serif flex flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/9AnN5G_jDc29hBKXvA3dIpcWa9llsh1mTJom4UihPb0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly96aGFu/Z2NhdGhlcmluZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTEvUEIxNzAx/NDMuanBn')]"

      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
      <li> 2 large eggs</li>
      <li>2/3 cup sugar</li>
      <li>1/2 teaspoon baking soda</li>
      <li>3 tablespoons water, or milk</li>
      <li>1 cup sifted all-purpose flour</li>
      <li>Vegetable oil, for frying</li>
      <li>3/4 pound anko (sweet azuki bean paste) </li>
      </ul>
    </div>
        </p>
      </div>
      <div className="parallax2">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white  font-black flex font-serif flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/Aw-5N1U7ELBQpFVgq3ImaPJnFRLynfoOKMMhfUmwaYE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGlzZ28uY29tL3Vz/L2Rlc3RpbmF0aW9u/LWphcGFuL3VwX2lt/Zy9ja2UvaW1ncy8y/MDE4MjI3L2RvcmF5/YWtpc3MuanBn')] bg-opacity-100"
      >
        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
      <li>Put eggs and sugar in a bowl and whisk well.In another bowl mix baking soda in water and pour it in the egg mixture</li>
      <li>Add the sifted flour to it and mix well</li>
      <li>On a pan, on a low heat  make pancakes of this batter .Make sure that the pancakes have a golden brown surface</li>
      <li>Spread about 1 teaspoon of the anko on one pancake and seal it with another pancake similiar to a sandwich.</li>
      <li>Serve along with tea .</li>
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default Doriyaki;
