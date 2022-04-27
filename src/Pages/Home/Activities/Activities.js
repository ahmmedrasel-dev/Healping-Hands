import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Activitiy from '../Activity/Activitiy';

const Activities = () => {
  const [activitis, setActivitis] = useState([]);

  useEffect(() => {
    async function getActivities() {
      try {
        const response = await axios.get('http://localhost:5000/activities');
        setActivitis(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getActivities()
  }, [])
  return (
    <div className='grid grid-cols-4 gap-5 mt-20'>
      {
        activitis.map(activity => <Activitiy
          key={activity._id}
          activitiy={activity}
        ></Activitiy>)
      }
    </div>
  );
};

export default Activities;