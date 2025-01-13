import React, { useEffect, useState } from 'react';
import Axios from '../../Axios';
import Cardpest from '../Card/Cardpest';

function SellingOffer() {
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
    <div className='flex p-8 flex-row flex-wrap justify-between bg-red-400 bg-zinc-100 w-full'>
      {/* Map through the data and render a Card for each item */}
      {data.slice(5,23).map((item, index) => (
        <Cardpest data={item} key={index} index={index} />
      ))}
    </div>
  );
}

export default SellingOffer;
