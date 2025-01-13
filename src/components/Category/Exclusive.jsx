import React from 'react'

function Exclusive({value}) {
  return (
    <div className='text-center h-12 bg-gradient-to-r from-indigo-600 via-purple-300 to-pink-500'>
     <h1 className='text-2xl font-serif p-2 text-red-700 font-extrabold'>* {value} *</h1>
    </div>
  )
}

export default Exclusive
