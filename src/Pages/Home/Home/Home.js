import React from 'react';
import Activities from '../Activities/Activities';
import Search from '../Serchbox/Search';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Search></Search>
      <Activities></Activities>
    </div>
  );
};

export default Home;