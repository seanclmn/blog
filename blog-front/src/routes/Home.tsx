//@ts-nocheck

import React,{useEffect, useState} from 'react'
import firebase from "firebase"
import {doc,onSnapshot} from "firebase/firestore"
import BlogBlock from "../components/BlogBlock"
import {Link} from 'react-router-dom'
import {
  SimpleGrid,
  LoadingOverlay,
  AppShell,
  Header
} from "@mantine/core";
interface Props {}

function Home(props: Props) {
  const [blogs,setBlogs]=useState([])
  const [loading,setLoading]=useState(true)

  const ref = firebase.firestore().collection("blogs")

  function getBlogs(){  
    ref.onSnapshot((querySnapshot)=>{
      const items = []
      querySnapshot.forEach((doc)=>{
        items.push({data: doc.data(), id: doc.id})
      })
      console.log(items)
      setBlogs(items.sort((a,b)=>new Date(b.data.date)-new Date(a.data.date)))
    })
  }

  useEffect(()=>{
    getBlogs()
    setLoading(false)
  },[])

  if(loading || !blogs.length) return <div className="w-[100%] h-[100vh]"><></><LoadingOverlay visible={loading || !blogs.length}/></div>
  return (

    <AppShell
    fixed
    header={
      <Header height={70} p="xs" className="px-[50px]">
        <Link to="/" className="cursor-pointer no-underline text-black">
          <h1>Blog</h1>
        </Link>
      </Header>
    }
  >
    <SimpleGrid 
        className="w-[75%] mx-auto my-[20px]"
        breakpoints={[
          { minWidth: 0, cols: 1 },
          { minWidth: 1000, cols: 2 },
          { minWidth: 1400, cols: 3 },
        ]}
        cols={3}>
        {blogs.map((blog)=>
          <BlogBlock 
            key={blog.id} 
            title={blog.data.title} 
            date={blog.data.date} 
            img={blog.data.image} 
            link={blog.id}/>
          )}
      </SimpleGrid>
  </AppShell>
    // <div className="bg-gray-50 w-[100%]">
      // <div 
      //   className="h-[60px] px-[40px] bg-white 
      //   border-solid border-b-gray-200 
      //   border-[0px] border-b-[1px]">
      //   <h1>Blog</h1>      </div>
    // </div>
  )
}

export default Home
