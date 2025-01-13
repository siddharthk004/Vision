import React, { useEffect, useState } from 'react';
import Axios from '../../Axios';
import Cardboost from '../Card/Cardboost';

function Show() {
    
  const [data, setData] = useState([]); // Store fetched data in state

  // Fetch the data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios().get('/user/ViewAllBooster'); // Replace with your actual API endpoint
        setData(response.data); // Set the fetched data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty de
  return (
    <div className='flex gap-2 p-8 justify-between flex-row flex-wrap bg-red-400 bg-zinc-100 w-full'>
        {data.map((item,index) => <Cardboost data = {item} key={index} index={index}/> )}
    </div>
  )
}

export default Show

