import BlogContent from "./routes/BlogContentEditor";
import Home from "./routes/Home";
import BlogEditor from "./routes/BlogEditer";
import Signup from "./routes/Signup"
import Signin from "./routes/Signin"
export const Routes = [
  {
    path: "/",
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
    path: "signin",
    element: <Signin />,
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
