// @ts-nocheck
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {useForm } from 'react-hook-form'
import { Textarea, Button } from '@mantine/core'
import { auth } from "../Firebase";
import firebase from "firebase";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { doc, onSnapshot } from "firebase/firestore";


function BlogContentEditor() {  
  let {blogposteditorid} = useParams();

  const { setValue, register, handleSubmit, watch, formState: { errors } } = useForm();
  const blogText = watch("blogtext")

  const [blog,setBlog]= useState([]);
  const [blogDefaultText,setDefaultBlogText]=useState("")
  const [loading,setLoading]=useState(false)



  useEffect(() => {
    firebase.firestore().collection("blogs").doc(blogposteditorid).onSnapshot(async function(doc) {
      await setBlog( doc.data());
      await setDefaultBlogText(doc.data().text)
      // await setValue("blogtext",doc.data().text)
      setLoading(false)
    })
  },[blogposteditorid])

  useEffect(()=>{
    register("blogtext")
  },[register])

  const onEditorStateChange = (editorState) => {
    setValue("blogtext", editorState)
  }
  const onSubmit = (data,event)=> {
    event?.preventDefault()
    console.log(data)
    // firebase.firestore().collection("blogs").doc(blogposteditorid).update({text: data.blogtext})
  }
  if (loading) return null
  // window.scrollTo(0, 0)
  return (
    <div className="w-[100%] flex flex-col items-center overflow-auto">
      <p className="text-5xl">
        <b>{blog.title }</b>
      </p>
      <p>{blog.author} ({blog.date})</p>
      {/* <p>blog content {blogposteditorid}</p> */}
      <img
        className="w-[50%] m-7"
        src={blog.image}
      />
      
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[80%] overflow-auto">
        {/* <textarea className="w-[100%] h-[400px] resize-none overflow-auto" {...register("blogtext")} defaultValue={blog.text}></textarea> */}
        <ReactQuill theme="snow" className="w-[100%] h-[400px]" defaultValue={blogDefaultText}/>
        <p className="w-[100%] h-[400px] resize-none overflow-auto" dangerouslySetInnerHTML={{__html: blogDefaultText}}></p>

        <Button type="submit" className="mt-[30px]">Save</Button>
      </form>
    </div>
  );
}

export default BlogContentEditor;
