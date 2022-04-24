import React, { useState } from "react";
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

interface Props {}

interface BlogLinkProps {
  blog_post: string;
  date: string;
  link: string;
}

export function BlogLink(props: BlogLinkProps) {
  const { blog_post, date, link } = props;
  return (
    <Link to={`/editor/${link}`}>
      <div className="border-solid border-x-0 border-[1px] border-gray-200 p-[10px] cursor-pointer">
        <p>{blog_post} ({date})</p>
      </div>
    </Link>
  );
}

function BlogEditor(props: Props) {
  const {} = props;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

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

              <BlogLink blog_post="blog" date={"11/1/1998"} link="1234" />
              <BlogLink blog_post="blog" date={"11/1/1998"} link="yo-mama" />
              <BlogLink blog_post="blog" date={"11/1/1998"} link="noice-one" />
              <BlogLink blog_post="blog" date={"11/1/1998"} link="home" />
            </Navbar.Section>
          </Navbar>
        }
        header={  
          <Header height={70} padding="md">
            <div className="flex items-center h-[100%]">
              <Signout/>
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
        <Outlet/>
      </AppShell>
    </AuthProvider>
  );
}

export default BlogEditor;
