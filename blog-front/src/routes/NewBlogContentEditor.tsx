//@ts-nocheck
import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { auth } from "../Firebase"
import firebase from "firebase"

import {Button} from "@mantine/core"


interface Props {}

function NewBlogContentEditor(props: Props) {  

    const [blog,setBlog]= useState([]);
    const [loading,setLoading]=useState(false)
  
    const onSubmit = (data,event) => {
        event?.preventDefault()
        console.log(data)
    }
  
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const blogString = "This is my blog post - I hope you enjoyed it."
  

    if (loading) return null
    window.scrollTo(0, 0)
    return (
      <div className="w-[100%] flex flex-col items-center">
        <p className="text-5xl">
          <b></b>
        </p>
        <p>author here (date here)</p>
        {/* <p>blog content {blogposteditorid}</p> */}
        <img
          className="w-[50%] m-7"
          src={blog.image}
        />
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-between w-[80%] h-[450px] text-left">
          <textarea className="w-[100%] h-[400px] resize-none overflow-auto" {...register("blogtext")} defaultValue={blog.text}></textarea>
          <Button type="submit">Save</Button>
        </form>
      </div>
    );
  }

export default NewBlogContentEditor