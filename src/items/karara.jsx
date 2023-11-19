import React from 'react';
import '../App.css'; // Your Tailwind CSS styles should be imported here

function karaage() {
  return (
    <div>

      <div className="parallax " >
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className="p-12  text-white   font-serif flex flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/7ptNvIC1zrtN2xG9l00j6H9ue5niK7GTxWjhH3kWbq4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWF0dGhlbG92ZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMTAvY2hpY2tl/bi1rYXJhYWdlLXJl/Y2lwZS0yLTY2N3gx/MDAwLmpwZw')]"
      >
        <h1 className="text-7xl font-black font-serif  text-white">Karaage Chicken</h1>
        <br />
        <p className='text-2xl font-black text-white slidein' >
        Karaage chicken, also known as Japanese fried chicken, is a popular and beloved dish known for its flavorful, juicy, and crispy characteristics. Here's a concise description based on the search results:
Karaage chicken is a Japanese dish where bite-sized pieces of chicken, typically thigh meat, are marinated in a mixture of soy sauce, sake, ginger, and mirin to infuse them with savory and slightly sweet flavors. The marinated chicken is then coated with potato starch or flour and deep-fried until it achieves a crispy and golden exterior while maintaining a tender and succulent interior. The dish is often served as a standalone appetizer, in bento boxes, or as a side dish in Japanese cuisine. It is highly versatile and can be enjoyed with various dipping sauces, such as Japanese mayo mixed with sriracha or a squeeze of lemon for added brightness.
Karaage chicken is a staple in Japanese home cooking, bento boxes, and izakayas, and it has gained popularity both in Japan and abroad due to its delicious taste and satisfying texture. The dish's simple yet flavorful preparation and its ability to be enjoyed hot or cold make it a favorite among food enthusiasts.
        </p>
        <br />
      </div>

      <div className="parallax1">
        {/* The background image will be applied via CSS */}
      </div>

      <div
        
        className=" p-12 bg-white text-white text-2xl font-serif flex flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/MgMEplB3fNt4oxlrrnyDhZiwp5RMxMAHW26h3j45odI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXNh/bWFsYXlzaWEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA3L2NoaWNrZW4t/a2FyYWFnZTQuanBn')]"
      >
        <h1 className="text-7xl font-black font-serif ">Ingredients</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      <ul className="list-disc pl-4">
       <li>Chicken thighs  with skin</li>
       <li>cornstarch</li>
       <li>vegetable oil for frying</li>
       <li>Dark soy sauce</li>
       <li>cooking sake</li>
       <li>Mirin</li>
       <li>Fresh grated ginger with the juice</li>
      </ul>
    </div>
        </p>
      </div>
      <div className="parallax2">
        {/* The background image will be applied via CSS */}
      </div>
      <div
        
        className="p-12 text-white  font-black flex font-serif flex-col items-center justify-center bg-cover bg-[url('https://imgs.search.brave.com/cBvk3ZYfs5V-ult5IXDKPft2_tiPcBkGzMMBLufaKks/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVuZ3J5aHV5LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvdHJh/eS1vZi1jaGlja2Vu/LWthcmFhZ2UtNjgw/eDg1MC5qcGc')] bg-opacity-100"

      >
        <h1 className="text-7xl p-7 ">Instructions</h1>
        <br />
        <p className='text-2xl font-black'>
        <div className="container mx-auto mt-8">
      
      <ol className="list-decimal pl-4">
      <li>Cut the chicken thighs into large bite size pieces </li>
      <li>In a  ziplock bag put all the marinade components :soy sauce , mirin , grated ginger , sake  along with the chicken pieces and massage well to coat the chicken pieces with the marinade.Keep it aside for about 1 hour.</li>
      <li>Now remove the chicken pieces and pat them dry and coat them in corn starch with an even coat.</li>
      <li>Now deep fry the chicken pieces at 160 C/320F. Take them out and rest them for 4 minutes . This develops the cripsy crust .</li>
      <li> Deep fry again at 190-200C/374-392F to cook the chicken and garnish with cabbage shreds.</li>
      </ol>
    </div>
        </p>
      </div>
      

    </div>
  );
}

export default karaage;
