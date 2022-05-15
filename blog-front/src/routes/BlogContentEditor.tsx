// @ts-nocheck
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {useForm } from 'react-hook-form'
import { Textarea, Button } from '@mantine/core'
import { auth } from "../Firebase";
import firebase from "firebase";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import Texteditor from "../components/Texteditor";
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
  if (loading || !blog.image) return null
  // window.scrollTo(0, 0)
  console.log("loading done",blog.text)
  return (
    <div className="w-[100%] flex flex-col items-center">
      <p className="text-5xl">
        <b>{blog.title }</b>
      </p>
      <p>{blog.author} ({blog.date})</p>
      <img
        className="w-[60%] m-7"
        src={blog.image}
        alt={blog.image}
      />
      
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[80%]">
        {blog.text && 
          <Texteditor 
            defaultValue={blog.text} 
            value={blogText} 
            onChange={onEditorStateChange}
          />
        }
        <Button type="submit" className="mt-[60px]">Save</Button>
      </form>
    </div>
  );
}

export default BlogContentEditor;
