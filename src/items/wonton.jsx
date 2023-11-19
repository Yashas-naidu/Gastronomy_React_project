import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function wontonsoup() {
  return (
    <div>

      <div className="parallax " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white bg-cover   font-serif flex flex-col items-center justify-center bg-[url('https://imgs.search.brave.com/0l26ndhPJxLK3EZAw_Bv9pl2n_HvMYZPQJp58KiL-jw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9tc2Rpc2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzEwL1dvbnRvbi1T/b3VwLTE1LTYwMHg5/MDAuanBn')]"
      >
        <h1 className="text-7xl font-black font-serif  text-white">Wonton Soup</h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
        Delicious homemade Wonton Soup is the best way to satisfy any craving for Chinese food without having to leave the house. Tender wontons filled with seasoned chicken swim in a clear broth flavored with ginger, soy, sesame, and garlic.
        Wonton soup is a standard of Chinese cuisine and made from seasoned chicken broth with filled wontons. Wontons are an Asian equivalent of ravioli or tortellini when they are folded around a spiced meat mixture.
        Like miso soup and egg drop soup, wonton soup is often served as an appetizer but you can also turn it into the main course.
              </p>
        <br />
      </div>

      <div className="parallax1">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white bg-cover text-white text-2xl font-serif flex flex-col items-center justify-center bg-[url('https://imgs.search.brave.com/pQHL3m3U7SHZzk1Ff8qdgWJjNfJHsFHD5WoGtMzeES0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pYW1o/b21lc3RlYWRlci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDMvd29udG9u/LXNvdXAtMS5qcGc')]"

      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
        <li><h2>For Wonton fillings</h2></li>
      <li>8 ounces ground lamb/chicken/pork</li>
      <li> a small knob of ginger grated</li>
      <li>1 tsp sesame oil</li>
      <li>2 green onions fine chopped</li>
      <li>1 tbsp soy sauce</li>
      <li>1.5 tsp of cornstarch</li>
      <li>10 wonton wrappers</li>
      <li><h2>For broth</h2></li>
      <li>8 cups of chicken broth</li>
      <li>2 cloves of garlic</li>
      <li>2 slices of ginger</li>
      <li>2 tbsp soy sauce</li>
      <li>1 tsp sesame oil</li>
      <li>2 green onions sliced</li>
      </ul>
    </div>
        </p>
      </div>
      <div className="parallax2">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white  bg-cover font-black flex font-serif flex-col items-center justify-center bg-[url('https://imgs.search.brave.com/m4WKBnu9C6bT8D7tAX0UIx-nV4Pa0j004cmVzCRYRuA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXNh/bWFsYXlzaWEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA0L3dvbnRvbl9z/b3VwMS5qcGc')] bg-opacity-100"
      >
        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
      <li>In a large bowl combine all filling ingredients. In a wonton wrapper put 1 tsp of filling and wrap like a tortelini.Tigtly close the ends together </li>
      <li>Dip the bottom of wontons  in flour and place on a parchment lined pan </li>
      <li>In a big deep boiler pan , boil all the broth ingredients and bring to a proper bubbly boil.</li>
      <li>Remove the garlic and onion</li>
      <li>Add wontons and simmer in the broth for 3 mins till the protein inside is cooked well .Serve along with the broth</li>
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default wontonsoup;
