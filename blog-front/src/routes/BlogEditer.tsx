import React, { useState } from "react";
import { Link } from "react-router-dom";
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

interface Props {}

interface BlogLinkProps {
  blog_post: string;
  date: string;
  link: string;
}

export function BlogLink(props: BlogLinkProps) {
  const { blog_post, date, link } = props;
  return (
    <Link to={`/editing/${link}`}>
      <div className="border-solid border-x-0 border-[1px] border-gray-200 p-[10px] cursor-pointer">
        <p>{blog_post}</p>
        <p>{date}</p>
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

              <BlogLink blog_post="blog" date={"datedate"} link="1234" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
              <BlogLink blog_post="blog" date={"datedate"} link="home" />
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
        <p>hello</p>
        <Signout/>
      </AppShell>
    </AuthProvider>
  );
}

export default BlogEditor;
