//@ts-nocheck
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  ScrollArea,
  useMantineTheme,
} from "@mantine/core";
import Signout from '../components/Signout'
import { AuthProvider } from "../context/Authcontext";
import BlogContent from "./BlogContentEditor";
import BlogLink from "../components/BlogLink"

interface Props {}

function Home(props: Props) {

  const [blogs, setBlogs] = useState()
  const [loading, setLoading] = useState(true)

  const ref = firebase.firestore().collection("blogs")
  function getBlogs(){
    
    ref.onSnapshot((querySnapshot)=>{
      const items = []
      querySnapshot.forEach((doc)=>{
        items.push({data: doc.data(), id: doc.id})
      })
      console.log(items)
      setBlogs(items.sort((a,b)=>new Date(a.data.date)-new Date(b.data.date)))
    })
  }

  const {} = props;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  useEffect(()=>{
    getBlogs()
    setLoading(false)
  },[])

  if(loading) return <p>loading...</p>

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
        {/* {document.readyState == "complete" && <Outlet/>} */}
        <Outlet/>
      </AppShell>
    </AuthProvider>
  );
}

export default Home;