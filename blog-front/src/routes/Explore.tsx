//@ts-nocheck
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { Routes, Route, Link, Outlet, useOutlet,Navigate } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  ScrollArea,
  useMantineTheme,
  LoadingOverlay
} from "@mantine/core";
import Signout from '../components/Signout'
import { AuthProvider } from "../context/Authcontext";
import BlogContent from "./BlogContentEditor";
import BlogLink from "../components/BlogLink"

interface Props {}

function Explore(props: Props) {

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const outlet = useOutlet()
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
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section grow component={ScrollArea}>
            {blogs && blogs.map((blog)=><BlogLink blog_post={blog.data.title} date={blog.data.date} link={blog.id} page="explore" key={blog.id}/>)}
          </Navbar.Section>
        </Navbar>
      }
      header={  
        <Header height={70} >
          <div className="flex items-center h-[100%] px-[50px]">

            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Link to="/" className="cursor-pointer no-underline text-black"><h1>Blog</h1></Link>
          </div>
        </Header>
      }
    >
      {!outlet ?<Navigate to={`/explore/${blogs[0].id}`} />: <Outlet/>}
    </AppShell>
  );
}

export default Explore;