// @ts-nocheck
import React, {useState,useEffect} from "react";
import logo from "./logo.svg";

import { AuthProvider } from "./context/Authcontext"
import {auth} from "./Firebase"
import { BrowserRouter as Router, Navigate, Routes, Route} from 'react-router-dom'
import Explore from "./routes/Explore";
import Home from "./routes/Home"
import PrivateRoute from "./privateroute/PrivateRoute.tsx";
import SignIn from "./routes/Signin"
import SignUp from "./routes/Signup"
import BlogEditor from "./routes/BlogEditer";
import BlogContentEditor from "./routes/BlogContentEditor";
import BlogContent from "./routes/BlogContent"
import NewBlogContentEditor from "./routes/NewBlogContentEditor"
import { isOmittedExpression } from "typescript";
// require('dotenv').config({ path: '../.env' })

function App() {

  const [currentUser,setCurrentUser] = useState([{}])

  useEffect(()=>{
      auth.onAuthStateChanged(setCurrentUser)
  },[])

  return (

    <AuthProvider className="bg-gray-50"> 
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>          
          <Route path= '/editor' element={<PrivateRoute><BlogEditor/> </PrivateRoute>}>
            <Route path=":blogposteditorid" element={<BlogContentEditor/>}/>
            <Route element={<p>noice</p>}/>
            <Route path="newblog" element={<NewBlogContentEditor/>} />
          </Route>
          <Route path='/explore' element={<Explore/>}>
            <Route path=":blogpostid" element={<BlogContent/>}/>
          </Route>
          <Route exact path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
