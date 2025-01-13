import React from 'react'

function Stripe({data}) {
  return (
    <div className='text-center justify-between h-[6vw] bg-gradient-to-r from-indigo-400 border-b-2 border-indigo-500 via-purple-500 to-pink-300 flex'>
      <div className='text-3xl m-6 ml-[30vh] font-serif'>
        <h1 className='text-bold text-white'>{data[0]}</h1>
        <h1 className='text-bold text-white ml-8'>{data[1]}</h1>
      </div>
      <div className='text-3xl m-6 font-serif'>
        <h1 className='text-bold text-white'>{data[2]}</h1>
        <h1 className='text-bold text-white ml-2'>{data[3]}</h1>
      </div>
      <div className='text-3xl m-6 mr-[30vh] font-serif'>
        <h1 className='text-bold text-white'>{data[4]}</h1>
        <h1 className='text-bold text-white ml-5'>{data[5]}</h1>
      </div>
    </div>
  )
}

export default Stripe
