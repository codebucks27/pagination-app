import React from 'react';

const Animal = ({ animal }) => {
  return (
    <div key={animal.text} className="group relative">
    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
      <img
        src={animal.image}
        alt={animal.imageAlt}
        className="w-full h-full object-center object-cover"
      />
    </div>
    <h3 className="mt-6 text-sm text-gray-500">
      <a href={animal.text}>
        <span className="absolute inset-0" />
        {animal.text}
      </a>
    </h3>
    <p className="text-base font-semibold text-gray-900">{animal.text}</p>
  </div> 
  );
}
 
export default Animal;
