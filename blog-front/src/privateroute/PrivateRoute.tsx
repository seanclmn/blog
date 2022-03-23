import React,{useContext} from 'react'
import {Route, Navigate} from 'react-router-dom'
import {AuthContext} from '../auth/Auth'


function PrivateRoute({ children }) {
    const {currentUser}= useContext(AuthContext)
    return (
        !!currentUser ? children : (<Navigate to={"/signin"} />)
    )
}

export default PrivateRoute