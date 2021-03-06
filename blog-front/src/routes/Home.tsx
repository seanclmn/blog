//@ts-nocheck

import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { doc, onSnapshot } from "firebase/firestore";
import BlogBlock from "../components/BlogBlock";
import { Link } from "react-router-dom";
import { SimpleGrid, LoadingOverlay, AppShell, Header } from "@mantine/core";
interface Props {}

function Home(props: Props) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const ref = firebase.firestore().collection("blogs");

  function getBlogs() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ data: doc.data(), id: doc.id });
      });
      console.log(items);
      setBlogs(
        items.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
      );
    });
  }

  useEffect(() => {
    getBlogs();
    setLoading(false);
  }, []);

  if (loading || !blogs.length)
    return (
      <div className="w-[100%] h-[100vh]">
        <></>
        <LoadingOverlay visible={loading || !blogs.length} />
      </div>
    );
  return (
    <AppShell
      className="trueGray-50"
      fixed
      header={
        <Header height={70} p="xs" className="px-[50px]">
          <div className="w-[60px]">
            <Link to="/" className="cursor-pointer no-underline text-black">
              <h1>Blog</h1>
            </Link>
          </div>
        </Header>
      }
    >
      {blogs.length !== 0 && (
        <SimpleGrid
          className="w-[75%] mx-auto"
          breakpoints={[
            { minWidth: 0, cols: 1 },
            { minWidth: 1000, cols: 2 },
            { minWidth: 1400, cols: 3 },
          ]}
          cols={3}
        >
          {blogs.map((blog) => (
            <BlogBlock
              key={blog.id}
              title={blog.data.title}
              date={blog.data.date}
              img={blog.data.image}
              link={blog.id}
            />
          ))}
        </SimpleGrid>
      )}
    </AppShell>
  );
}

export default Home;
