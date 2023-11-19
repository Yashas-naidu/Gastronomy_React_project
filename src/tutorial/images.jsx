import React, { useState } from 'react';
import axios from 'axios';

const ImageSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=hIb0Lntnf6md7ox20VaEemCa8BzM-8n_OgVk47fRB9E`
      );

      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <button onClick={searchImages}>Search</button>

      <div className="image-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.description}
            className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
