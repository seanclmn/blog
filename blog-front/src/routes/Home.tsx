import React, { useState } from "react";
import { Link, Outlet } from "@tanstack/react-location";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  ScrollArea,
  Text,
  useMantineTheme,
} from "@mantine/core";

interface Props {}

interface BlogLinkProps {
  blog_post: string;
  date: string;
  link: string;
}

export function BlogLink(props: BlogLinkProps) {
  const { blog_post, date, link } = props;
  return (
    <Link to={`/home/${link}`}>
      <div className="border-solid border-x-0 border-[1px] border-gray-200 p-[10px] cursor-pointer">
        <p>{blog_post}</p>
        <p>{date}</p>
      </div>
    </Link>
  );
}

function Home(props: Props) {
  const {} = props;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

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
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
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
      <Outlet />
    </AppShell>
  );
}

export default Home;
