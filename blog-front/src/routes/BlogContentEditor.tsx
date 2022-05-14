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
  const [blogText,setBlogText] = useState("")

  const [blog,setBlog]= useState([]);
  const [loading,setLoading]=useState(false)



  useEffect(() => {
    firebase.firestore().collection("blogs").doc(blogposteditorid).onSnapshot(async function(doc) {
      await setBlog( doc.data());
      // await setBlogText(doc.data().text)
      
      if(!loading){
        await setValue("blogtext",doc.data().text)
        await setBlogText(doc.data().text)
      }
      setLoading(false)
    })
  },[blogposteditorid])

  useEffect(()=>{
    console.log("register")
    register("blogtext")
  },[register])

  const onEditorStateChange = (editorState) => {
    console.log(editorState)
    setValue("blogtext", editorState)
  }
  const onSubmit = (data,event)=> {
    event?.preventDefault()
    console.log("submit",data)
    firebase.firestore().collection("blogs").doc(blogposteditorid).update({text: data.blogtext})
  }
  if (loading) return null
  // window.scrollTo(0, 0)
  console.log("loading done",blog.text)
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
        {blog.text && <ReactQuill theme="snow" className="w-[100%] h-[400px]" defaultValue={blog.text} value={blogText} onChange={onEditorStateChange}/>}
        {/* <p className="w-[100%] h-[400px] resize-none overflow-auto" dangerouslySetInnerHTML={{__html: blog.text}}></p> */}

        <Button type="submit" className="mt-[30px]">Save</Button>
      </form>
    </div>
  );
}

export default BlogContentEditor;
