//@ts-nocheck
import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { auth } from "../Firebase"
import firebase from "firebase"
import { doc, setDoc } from "firebase/firestore"; 


import {
  Button, 
  TextInput,
  Textarea,
} from "@mantine/core"


interface Props {}

function NewBlogContentEditor(props: Props) {  

    const [blog,setBlog]= useState([]);
    const [loading,setLoading]=useState(false)
  
    const onSubmit = (data,event) => {
        const today = new Date
        event?.preventDefault()
        const post = data
        post.author = "Sean Coleman"
        post.date = today.toLocaleDateString("en-US")
        console.log(post)
        firebase.firestore().collection("blogs").add(post)
    }
  
    const { register, handleSubmit, watch, formState: { errors } } = useForm();  

    if (loading) return null
    window.scrollTo(0, 0)
    return (
      <div className="w-[100%] flex flex-col items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[100%] flex flex-col items-center h-[550px]">
          <div className="flex flex-col items-center justify-between w-[80%] h-[450px] text-left">
            <TextInput type="text" label="Title" {...register("title")}/>
            <TextInput type="text" label="Image Link" {...register("image")}/>
            <Textarea 
              autosize
              minRows={10}
              className="w-[100%] mt-[50px] resize-none overflow-auto" 
              {...register("text")} 
              defaultValue={blog.text}>    
            </Textarea>
          </div>
          <Button 
            type="submit"
            className="mt-[30px]">
              Post
          </Button>
        </form>
      </div>
    );
  }

export default NewBlogContentEditor