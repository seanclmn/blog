import React from 'react'
import {Link} from 'react-router-dom'

interface BlogLinkProps {
    blog_post: string;
    date: string;
    link: string;
    page: string;
  }
function BlogLink(props: BlogLinkProps) {
    const { blog_post, date, link, page } = props;
    return (
      <Link to={page.length==0 ? `/${link}`:`/${page}/${link}`} className="no-underline text-black ]">
        <div className="hover:bg-gray-100 border-solid border-x-0 border-[1px] border-gray-200 h-[30px] p-[5px] pl-[20px] cursor-pointer flex flex-row justify-between items-center">
          <p className="leading-1 text-[14px] w-[80px] overflow-hidden truncate">{blog_post} </p>
          <p className="leading-1 text-[14px] mr-[20px]">({new Date(date).toLocaleDateString("en-US")})</p>
        </div>
      </Link>
    );
  }

export default BlogLink
