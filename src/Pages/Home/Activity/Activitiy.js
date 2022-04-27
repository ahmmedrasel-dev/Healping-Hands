import React from 'react';

const Activitiy = ({ activitiy }) => {
  const { picture, activitise } = activitiy
  return (
    <div className='relative'>
      <img src={picture} alt="" />
      <div className='absolute bottom-0 left-50 bg-red-300 w
      w-full text-center py-4 text-white rounded-b-lg'><h2>{activitise}</h2></div>
    </div>
  );
};

export default Activitiy;