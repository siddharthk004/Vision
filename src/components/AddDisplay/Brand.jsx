import React from 'react';

function Brand({ data }) {
  return (
    <div className="h-[7vw] mt-[.4vw] w-[14vh] flex items-center justify-center">
      <img
        src={data}
        alt="Brand"
        loading='lazy'
        className="w-[9vw]"
      />
    </div>
  );
}

export default Brand;
