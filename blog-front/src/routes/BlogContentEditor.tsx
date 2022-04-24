// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";
import {useForm } from 'react-hook-form'
import { Textarea, Button } from '@mantine/core'
import { auth } from "../Firebase";

function BlogContent() {  
  let {blogpostid} = useParams();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const blogString = "This is my blog post - I hope you enjoyed it."
  const onSubmit = (data,event)=> {
    event?.preventDefault()
    console.log(data)
  }
  return (
    <div className="w-[100%] flex flex-col items-center">
      <p className="text-5xl">
        <b>Lorem Ipsum </b>
      </p>
      <p>{blogpostid} 3/6/2022</p>
      {/* <p>blog content {blogpostid}</p> */}
      <img
        className="w-[50%] m-7"
        src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg"
      />
      
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-between w-[80%] h-[450px] text-left">
        <textarea className="w-[100%] h-[400px] resize-none overflow-auto" {...register("blogtext")} defaultValue={blogString}></textarea>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}

export default BlogContent;
