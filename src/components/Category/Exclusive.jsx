import React from 'react'

function Exclusive({value}) {
  return (
    <div className='text-center h-[1vw] bg-zinc-100 mb-[1vw]'>
     <h1 className='text-[1.3vw] font-serif p-2 text-blue-900 font-extrabold'>* {value} *</h1>
    </div>
  )
}

export default Exclusive
