import React, { useEffect, useState } from 'react';
import Axios from '../../Axios';
import Cardpest from '../Card/Cardpest';
  
function Selling() {
    const [data, setData] = useState([]); // Store fetched data in state
  
    // Fetch the data from the API when the component mounts
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await Axios().get('/user/ViewAllPesticides'); // Replace with your actual API endpoint
          setData(response.data); // Set the fetched data in state
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts
  
  return (
    <div className='flex gap-2 p-8 justify-between flex-row flex-wrap bg-red-400 bg-zinc-100 w-full'>
        {data.slice(10,34).map((item,index) => <Cardpest data={item} index={index} key={index}/> )}
    </div>
  )
}

export default Selling
