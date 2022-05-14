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

  if (loading) return null
  window.scrollTo(0, 0)
  return (
    <div className="w-[100%] flex flex-col items-center">
      <p className="text-5xl">
        <b>{blog.title }</b>
      </p>
      <p>{blog.author} ({blog.date})</p>
      {/* <p>blog content {blogpostid}</p> */}
      {document.readyState == "complete" && <img
        className="w-[50%] m-7"
        src={blog.image}
      />}
      
      <div className="flex flex-col items-center justify-between w-[80%] h-[450px] text-left">
        <p className="w-[100%] h-[400px] resize-none overflow-auto" dangerouslySetInnerHTML={{__html: blog.text}}></p>
      </div>
    </div>
  );
}

export default BlogContent;