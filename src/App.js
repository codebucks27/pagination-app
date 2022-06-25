import React, { useState } from 'react';
import Animals from './components/Animals';

import { ReactQueryDevtools } from 'react-query-devtools';


function App() {

  return (
    <>
      <div className="App" >
        <Animals />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
