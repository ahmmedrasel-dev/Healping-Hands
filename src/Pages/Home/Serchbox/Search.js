import React from 'react';

const Search = () => {
  return (
    <div className='text-center mt-8'>
      <h1 className='mb-8 uppercase text-5xl'>I grow by helping people in need.</h1>
      <div className="flex items-center justify-center ">
        <div className="flex ">
          <input type="text" className="px-4 py-2 w-96 border-2 border-sky-500 rounded-l-lg" placeholder="Search..." />
          <button className="px-4 text-white bg-blue-500 border-l rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;