//@ts-nocheck
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { Routes, Route, Link, Outlet, useOutlet, Navigate } from "react-router-dom";
import {
  AppShell,
  Burger,
  Button,
  Header,
  MediaQuery,
  Navbar,
  ScrollArea,
  useMantineTheme,
  Tabs
} from "@mantine/core";
import Signout from '../components/Signout'
import { AuthProvider } from "../context/Authcontext";
import BlogContent from "./BlogContentEditor";
import BlogLink from "../components/BlogLink"

interface Props {}

interface BlogLinkProps {
  blog_post: string;
  date: string;
  link: string;
}

function BlogEditor(props: Props) {

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

  const {} = props;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  useEffect(()=>{
    getBlogs()
    setLoading(false)
  },[])

  if(loading || !blogs.length) return <p>loading...</p>

  return (
    <AuthProvider>
      <AppShell
        navbarOffsetBreakpoint="sm" 
        fixed
        navbar={
          <Navbar
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 250, lg: 250 }}
            // className="flex flex-col items-center"
          >
            <Navbar.Section className="flex flex-col items-center">
             <Link to="/editor/newblog"> <Button variant="subtle" radius="xl" className="my-[10px]">New Post</Button></Link>
            </Navbar.Section>
            <Navbar.Section grow component={ScrollArea}>
              {blogs && blogs.map((blog)=><BlogLink blog_post={blog.data.title} date={blog.data.date} link={blog.id} page={"editor"} key={blog.id}/>)}
            </Navbar.Section>
          </Navbar>
        }
        header={  
          <Header height={70} padding="md">
            <div className="flex items-center h-[100%] justify-between">
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Signout/>

            </div>
          </Header>
        }
      >
       {!outlet ?<Navigate to={`/editor/${blogs[0].id}`} />: <Outlet/>}
      </AppShell>
    </AuthProvider>
  );
}

export default BlogEditor;
