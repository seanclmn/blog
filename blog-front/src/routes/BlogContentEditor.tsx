// @ts-nocheck
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {useForm } from 'react-hook-form'
import { Textarea, Button } from '@mantine/core'
import { auth } from "../Firebase";
import firebase from "firebase";
import { doc, onSnapshot } from "firebase/firestore";


function BlogContent() {  

  const [blog,setBlog]= useState([]);
  const [loading,setLoading]=useState(false)


  let {blogpostid} = useParams();
  useEffect(() => {
    firebase.firestore().collection("blogs").doc(blogpostid).onSnapshot(function(doc) {
      setBlog( doc.data());
      setLoading(false)
    })
  },[blogpostid])
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const blogString = "This is my blog post - I hope you enjoyed it."

  const onSubmit = (data,event)=> {
    event?.preventDefault()
    console.log(data)
    firebase.firestore().collection("blogs").doc(blogpostid).update({text: data.blogtext})
  }
  if (loading) return null
  window.scrollTo(0, 0)
  return (
    <div className="w-[100%] flex flex-col items-center">
      <p className="text-5xl">
        <b>{blog.title }</b>
      </p>
      <p>{blog.author} ({blog.date})</p>
      {/* <p>blog content {blogpostid}</p> */}
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

export default BlogContent;
