import React, {  useState } from "react";

function PaginationComponent({currentPage, handlePage, totalPages, handleLimit}) {


  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    handlePage(Number(event.target.id));
  };

  


  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }


  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "rounded cursor-pointer inline-block mx-1 px-2 bg-blue-500 text-white" : "rounded cursor-pointer inline-block mx-1 px-1  "}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });



  const handleNextbtn = () => {
    handlePage(currentPage + 1);
    

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    handlePage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li className="cursor-pointer px-2" onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className="cursor-pointer px-2" onClick={handlePrevbtn}> &hellip; </li>;
  }



  return (
<div className="flex justify-between">
<div className="flex items-center">
  


  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
onClick={handlePrevbtn}
        disabled={currentPage == pages[0] ? true : false}
        >
        Prev
      </button>
     <ul className="list-none flex items-center">
     {pageDecrementBtn}
    {renderPageNumbers}
    {pageIncrementBtn}
     </ul>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
onClick={handleNextbtn}
        disabled={currentPage == pages[pages.length - 1] ? true : false}
        >
        Next 
      </button>


      
</div>
<div>
Items per page: &nbsp;
<select   onChange={(e) => handleLimit(e.target.value)}  class="px-2  py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
<option value={5}>5</option>
<option value={10}>10</option>
<option value={15}>15</option>
<option value={20}>20</option>

</select>
</div>
</div>
  );
}

export default PaginationComponent;