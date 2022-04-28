import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const addActivities = () => {

  const handleSubmit = event => {
    event.preventDefault();
    const activity = {
      picture: event.target.imgUrl.value,
      activitise: event.target.activities.value
    }
    const url = 'http://localhost:5000/add-activities';
    axios.post(url, activity)
      .then(response => {
        const { data } = response;
        if (data) {
          toast.success(data.success)
          event.target.reset()
        }
      })
  }



  return (
    <div className='w-2/4 h-82 mx-auto mt-20 bg-slate-300 border-2 rounded-3xl'>
      <h2 className='text-4xl text-center mt-8'>Add Activities</h2>
      <form className='w-3/4 mx-auto my-12' onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="activities" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label htmlFor='activities' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Activities Name</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="imgUrl" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label htmlFor="imgUrl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url</label>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form >
    </div >
  );
};

export default addActivities;