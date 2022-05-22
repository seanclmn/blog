//@ts-nocheck
import React from 'react'
import {Link} from 'react-router-dom'
interface Props {}

function BlogBlock({title, date, img, link}) {
  return (
    <Link 
      to={`/explore/${link}`}
      className="transition delay-70 
        flex flex-col justify-between w-[300px] 
        h-[300px] px-[10px] pt-[10px] bg-white 
        rounded-md mx-auto 
        hover:shadow-[10px_10px_10px_5px_rgba(0,0,0,0.05)]
        cursor-pointer no-underline text-black
        ">
      <img 
        className="object-cover h-[80%] saturate-[.9] hover:saturate-[1]" 
        src={img}
				loading="lazy"
      />
      <div
        className='px-[20px]'
        >
        <p className="font-serif text-gray-500 leading-[5px] text-xs">{date}</p>

        <p className="font-seif leading-[0px] text-xl">{title}</p>
      </div>
    </Link>
  )
}

export default BlogBlock
