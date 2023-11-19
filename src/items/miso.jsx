import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function Miso() {
  return (
    <div>

      <div className="parallax " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white   font-serif flex flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/6gUQ6ORS8sht8QmtB19qg_2AftoVXbv_N0NtTzAhbrk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjUw/MTk3MTEyL3Bob3Rv/L21pc28tc291cC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WGtZSXNSMmZwUDV4/ejJpVzBZN0gtOEc2/TXFxMUxZUDRCWmV4/VF9XbzV2cz0')]"
      >
        <h1 className="text-7xl font-black font-serif  text-white">Miso Soup</h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
        Miso soup is a staple in Japanese cuisine and is soup for the soul.
        There are many paths to making miso soup, but you can branch out and customize once you know the basics.
        Served as a side along rice  it has been one of the staples of Japanese cuisine.
        Traditionally, miso soup begins with a broth called “dashi,” made by soaking seaweed such as kombu in water and cooking with bonito flakes (flakes of dried fermented fish).
        </p>
        <br />
      </div>

      <div className="parallax1">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white text-white text-2xl font-serif flex flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/7WUw99OBa_Vcq5O2nKIkFIFRH5FNoJFym7oq8nhqJIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/NjY2NzQ5L3Bob3Rv/L21pc28tc291cC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bk5VZUVlV0xibkVu/VUk3RGJBMkQxWm1B/M0RoMVhUVUJBSGww/RFIwTDY1WT0')]"
      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
       <li>Dried kombu leaves/kelp</li>
       <li>dried bonito flakes</li>
       <li>Silken tofu</li>
       <li> Scallions/Spring onions</li>
       <li>Tamari</li>
       <li>Wakame sea weed</li>
       <li>miso paste</li>
      </ul>
    </div>
        </p>
      </div>
      <div className="parallax2">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white  font-black flex font-serif flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/Kx5vfvkSS1afmRB5NuyHjYi7IjTz7YmoWyVtc-g43v8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE5/MDkwMTA4L3Bob3Rv/L21pc28uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTlxWXhU/TUhTRDRqTkdzVXpK/dXRrdFBfNlhKMVIz/VkUxZWYwZHhVMjJZ/eXc9')] bg-opacity-100"
      >
        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
       <li>Soak the dried kombu leaves in a bowl of water and rinse . In a medium size pot simmer over the low heat the kombu leaves in water along with the bonito flakes for 10 minutes.</li>
       <li>In a small bowl soak the wakame in warm water for five minutes and discard the water.</li>
       <li>Now take some of the broth from previous and add it to the miso paste and mix it properly to remove lumps and make a smooth slurry .</li>
       <li>Add this slurry to back to the broth along with tofu, chopped scallions ,soaked wakame and heat for a couple of minutes .</li>
       <li>And the miso soup is ready to served along with hot rice .</li>
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default Miso;
