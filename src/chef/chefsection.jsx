import React from 'react';

const ChefSection = ({ name, photo, dishes, saying }) => {
  return (
    <div className="flex flex-col md:flex-row py-8">
      <div className="w-full md:w-1/2 md:pr-4">
        <img src={photo} alt={`${name} - Chef`} className="w-40 h-40 rounded-full mb-4 md:mb-0" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{saying}</p>
        <div className="text-left space-y-2">
          <h3 className="text-lg font-semibold">Recommended Dishes</h3>
          <ul>
            {dishes.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
