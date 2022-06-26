import React from 'react';



const LikeBtn = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
</svg>
  )
}

const Animal = ({ animal }) => {
  console.log(animal);
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
      <a href={animal.image} target="_blank">
        <span className="absolute inset-0" />
        {animal.text}
      </a>
      
    </h3>
    <p className="text-base font-semibold text-gray-900">{animal.text}</p>
    <div className='flex items-center py-1 mb-6 justify-between w-full '>
    <ul className='list-none flex items-center'>
    {
      animal.tags.map((t,id) =>{
        return <li className='pr-2'   key={id}>#{t}</li>
      })
    }
    </ul>
    <div className='flex items-center'><LikeBtn />&nbsp; {animal.likes}</div>

    </div>
    
  </div> 
  );
}
 
export default Animal;
