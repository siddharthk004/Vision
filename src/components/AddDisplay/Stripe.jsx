import React from 'react'

function Stripe({data}) {
  return (
    <div className='text-center justify-between h-full text-zinc-800 font-medium bg-gradient-to-r from-pink-200 via-purple-200 to-pink-100 flex'>
      <div className='font-bold flex gap-[16vw] text-[1.5vw] m-[1vw] ml-[14vh] mr-[18vh] font-serif'>
        <p className=' '>{data[0]}</p>
        <p className=''>{data[1]}</p>
        <p className=' '>{data[2]}</p>
      </div>
    </div>
  )
}

export default Stripe
