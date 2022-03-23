import BlogContent from "./routes/BlogContent";
import Home from "./routes/Home";
import BlogEditor from "./routes/BlogEditer";
import Signup from "./routes/Signup"
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
    path: "signup",
    element: <Signup />,
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
