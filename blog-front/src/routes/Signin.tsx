// @ts-nocheck
import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../components/Login'
import { AuthContext } from '../context/Authcontext'

interface Props {}

function Signin(props: Props) {
    const {} = props
    const { currentUser} = useContext(AuthContext)

    return (
        <>{!currentUser ? <Login/>: (<Navigate to={"/editor"}/>)}</>
    )
}

export default Signin
