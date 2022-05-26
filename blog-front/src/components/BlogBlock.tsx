import React from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  date: string;
  img: string;
  link: string;
}

function BlogBlock({ title, date, img, link }: Props) {
  return (
    <Link
      to={`/explore/${link}`}
      className="transition delay-70 
        flex flex-col justify-between w-[100%] max-w-[300px] 
        h-[300px] bg-white 
        rounded-md border border-solid border-gray-100 border-w-[0.5px] mx-auto 
        hover:shadow-[10px_10px_10px_5px_rgba(0,0,0,0.05)]
        cursor-pointer no-underline text-black
        "
    >
      <img
        className="object-cover h-[80%] saturate-[.9] hover:saturate-[1]"
        src={img}
        loading="lazy"
      />
      <div className="px-[20px] pb-[10px]">
        <p className="font-serif text-gray-500 leading-[5px] text-xs">{date}</p>

        <p className="font-seif leading-[0px] text-xl">{title}</p>
      </div>
    </Link>
  );
}

export default BlogBlock;
