//@ts-nocheck
import React from 'react'
import {Link} from 'react-router-dom'
interface Props {}

function BlogBlock({title, date, img, link}) {
  return (
    <Link 
      to={`/explore/${link}`}
      className="flex flex-col justify-between w-[300px] 
        h-[300px] px-[10px] pt-[10px] bg-white 
        rounded-md border-solid border-[0.5px] 
        border-gray-200 mx-auto relative 
        shadow-[10px_10px_10px_5px_rgba(0,0,0,0.1)]
        cursor-pointer no-underline text-black
        ">
      <img className="object-cover h-[80%]" src={img}/>
      <div
        className='px-[50px] pb-[20px]'
        >
        <p className="leading-[0px] text-xs">{date}</p>

        <h2 className="leading-[0px]">{title}</h2>
      </div>
    </Link>
  )
}

export default BlogBlock
