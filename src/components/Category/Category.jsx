import React from 'react'
import { Link } from 'react-router-dom'

function Category({data,index}) {
  return (
    <Link to={`/${data.route}`} key={index} className='text-center font-semibold flex border-zinc-900'>
       <div className='p-[2vw]'>
        <img className='h-[5vw] rounded-full' src={data.url} />
        <h1 className='text-[1vw] pl-[.5vw] mt-[.1vw] font-sans'>{data.name}</h1>
       </div>
    </Link>
  )
}

export default Category
