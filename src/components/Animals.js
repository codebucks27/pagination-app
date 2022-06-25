import React, { useState } from 'react';
import { usePaginatedQuery, useQuery } from 'react-query';
import Animal from './Animal';

const fetchAnimals = async (key, page) => {
  const headers = { 'app-id': '628cfd76d7c13ab387fde193' }
  // GET request to get data
  const res = await fetch(`https://dummyapi.io/data/v1/post?limit=10&page=${page}`, { headers } );
    return res.json();
}


const Animals = () => {
  const [ page, setPage ] = useState(1);
  const { 
    resolvedData, 
    latestData, 
    status 
  } = usePaginatedQuery(['animals', page], fetchAnimals);
  console.log(latestData)
  return (
    <div>
    

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <>
      
          <div className="bg-gray-100">
            <h2>Animals</h2>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                  <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>
                  <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                      { resolvedData.data.map(animal => <Animal key={animal} animal={animal} /> ) }
                  </div>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
            onClick={() => setPage(old => Math.max(old - 1, 1))} 
            disabled={page === 1}>
            Previous Page
          </button>
          <span>{ page }</span>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))} 
            disabled={!latestData || !latestData.next}>
            Next page
          </button>
                </div>
              </div>
            </div>          
        </>
      )} 
    </div>
  );
}
 
export default Animals;