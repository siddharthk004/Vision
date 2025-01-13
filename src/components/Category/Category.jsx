import React from 'react'
import { Link } from 'react-router-dom'

function Category({data,index}) {
  return (
    <Link to={`/${data.route}`} key={index} className='text-center  h-[170px] w-full bg-green-200 flex border-zinc-900'>
       <div className='p-7'>
        <img className='h-[100px] rounded-full' src={data.url} />
        <h1 className='text-xl pl-3 mt-2 font-sans'>{data.name}</h1>
       </div>
    </Link>
  )
}

export default Category
