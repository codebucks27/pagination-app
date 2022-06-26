import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Animal from "./Animal";
import PaginationComponent from "./paginationComponent";
import LoadingIndicator from "./LoadingIndicator";

const fetchAnimals = async (key, page, pageNumberLimit) => {
  const headers = { "app-id": "628cfd76d7c13ab387fde193" };
  // GET request to get data
  const res = await fetch(
    `https://dummyapi.io/data/v1/post?limit=${pageNumberLimit}&page=${page}`,
    { headers }
  );

  return res.json();
};

const Animals = () => {
  const [page, setPage] = useState(1);

  const [totalPage, setTotalPage] = useState(1);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);

  const { data, isError, error, isFetching, isPreviousData  } = useQuery(
    ["animals", page, pageNumberLimit],
    fetchAnimals,
    {
      keepPreviousData: true,
      refetchOnWindowFocus:false,
    }
  );

  // console.log(isFetching,isSuccess)

  const handlePage = (val) => {
    setPage(val);
  };

  const handleLimit = (val) => {
    setpageNumberLimit(val);
  };



  return (
    <div>
      {isError && <div>Error in fetching data</div>}
     

      <>
        <div className={isFetching ? "bg-gray-100 h-full" : "bg-gray-100"}>
          <h2 className="text-4xl text-gray-900">Animals</h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">
                Collections
              </h2>
              {isFetching ? (
                <LoadingIndicator />
              ) : (
                <>
                  <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                    {data.data.map((animal) => (
                      <Animal key={animal.id} animal={animal} />
                    ))}
                  </div>
                  
                </>
              )}
              <PaginationComponent
                currentPage={page}
                handleLimit={handleLimit}
                handlePage={(v) => handlePage(v)}
                pageLimit={pageNumberLimit}
                totalPages={ Math.ceil(data?.total / data?.limit)}
              />

              {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
            onClick={() => setPage(old => Math.max(old - 1, 1))} 
            disabled={page === 1}>
            Previous Page
          </button>
          <span>{ page }</span>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))} 
            disabled={!latestData || !latestData.next}>
            Next page
          </button> */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Animals;
