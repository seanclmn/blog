// @ts-nocheck
import React, {useState,useEffect} from "react";
import logo from "./logo.svg";

import { AuthProvider } from "./context/Authcontext"
import {auth} from "./Firebase"
import { BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom'
import Home from "./routes/Home";
import PrivateRoute from "./privateroute/PrivateRoute.tsx";
import SignIn from "./routes/Signin"
import SignUp from "./routes/Signup"
import BlogEditor from "./routes/BlogEditer";
import BlogContentEditor from "./routes/BlogContentEditor";
import BlogContent from "./routes/BlogContent"
import NewBlogContentEditor from "./routes/NewBlogContentEditor"
// require('dotenv').config({ path: '../.env' })

function App() {

  const [currentUser,setCurrentUser] = useState([{}])

  useEffect(()=>{
      auth.onAuthStateChanged(setCurrentUser)
  },[])

  return (
    <div className="App">
      <AuthProvider> 
        <Router>
          <Routes>
            <Route path= '/editor' element={<PrivateRoute><BlogEditor/> </PrivateRoute>}>
              <Route path=":blogposteditorid" element={<BlogContentEditor/>}/>
              <Route path="newblog" element={<NewBlogContentEditor/>} />
            </Route>
            <Route path='/home' element={<Home/>}>
              <Route path=":blogpostid" element={<BlogContent/>}/>
            </Route>
            <Route exact path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
