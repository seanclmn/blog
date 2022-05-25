// @ts-nocheck
import React, {useEffect, useState} from "react";
import { useParams, Navigate } from "react-router-dom";
import {useForm } from 'react-hook-form'
import { Textarea, Button } from '@mantine/core'
import { auth } from "../Firebase";
import firebase from "firebase";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import Texteditor from "../components/Texteditor";
import { doc, onSnapshot } from "firebase/firestore";
import DeleteButton from "../components/DeleteButton";


function BlogContentEditor() {  
  let {blogposteditorid} = useParams();

  const { setValue, register, handleSubmit, watch, formState: { errors } } = useForm();
  const [blogText,setBlogText] = useState("")

  const [blog,setBlog]= useState({title:"",text: "",author:"",date:"",});
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    firebase.firestore().collection("blogs").doc(blogposteditorid).onSnapshot(async function(doc) {
      setBlog( doc.data());
      if(!loading){
        setValue("blogtext",doc.data().text)
        setBlogText(doc.data().text)
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

  if (!loading && blog == null) return <Navigate to="/editor"/>
  if (loading) return null
  return (
    <div className="w-[100%] flex flex-col items-center">
      <p className="text-5xl">
        <b>{blog.title }</b>
      </p>
      <p>{blog.author} ({blog.date})</p>
      {
        !blog.image ? 
        <div 
          className="border-solid rounded border-[0.5px] w-[60%] h-[300px] m-7 text-center "
          >
          <p>Loading...</p>
        </div>:
        <img
          className="w-[60%] m-7"
          src={blog.image}
          alt={blog.image}
        />
      }
      
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[80%]">
        <Texteditor 
          defaultValue={blog.text} 
          value={blogText} 
          onChange={onEditorStateChange}
        />
        <div className="w-[200px] flex flex-row justify-between">
          {/* <Button className="w-[80px]" color={"red"} onClick={()=>deleteBlog()}>Delete</Button> */}
          <DeleteButton id={blogposteditorid}/>
          <Button className="w-[80px]" type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}

export default BlogContentEditor;
