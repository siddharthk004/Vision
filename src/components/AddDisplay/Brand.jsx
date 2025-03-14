import React from 'react';

function Brand({ data }) {
  return (
    <div className="h-[13vh] mt-4 w-[14vh] flex items-center justify-center border border-2 rounded-3xl border-gray-400 shadow-xl mx-2">
      <img
        src={data}
        alt="Brand"
        loading='lazy'
        className="rounded-3xl h-full w-full object-cover"
      />
    </div>
  );
}

export default Brand;
