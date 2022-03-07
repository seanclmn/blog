import BlogContent from "./routes/BlogContent";
import Home from "./routes/Home";
import BlogEditor from "./routes/BlogEditer";

export const Routes = [
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: ":blogpostid",
        element: <BlogContent />,
      },
    ],
  },
  {
    path: "editing",
    element: <BlogEditor />,
    children: [
      {
        path: ":blogpostid",
        element: <BlogContent />,
      },
    ],
  },
];
