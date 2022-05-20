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

function Home(props: Props) {

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

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

  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  useEffect(()=>{
    getBlogs()
    setLoading(false)
  },[])

  if(loading || !blogs.length) return <div className="w-[100vw] h-[100vh] relative"><></><LoadingOverlay visible={loading || !blogs.length}/></div>


  return (
    <AuthProvider>
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
              {blogs && blogs.map((blog)=><BlogLink blog_post={blog.data.title} date={blog.data.date} link={blog.id} page="home" key={blog.id}/>)}
            </Navbar.Section>
          </Navbar>
        }
        header={  
          <Header height={70} padding="md">
            <div className="flex items-center h-[100%]">
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
            </div>
          </Header>
        }
      >
       {!outlet ?<Navigate to={`/home/${blogs[0].id}`} />: <Outlet/>}
      </AppShell>
    </AuthProvider>
  );
}

export default Home;