import React, {useState} from 'react'
import { Link, Outlet } from "@tanstack/react-location";
import {auth} from '../Firebase'
import Firebase from '../Firebase'

interface Props {}

const db = Firebase.firestore()

function Signup(props: Props) {
    const {} = props

    const [passwordToggle,setPasswordToggle]=useState(true)
    const [newEmail,setNewEmail]=useState("")
    const [newPassword, setNewPassword]=useState("")

    function emailChangeHandler(e: React.ChangeEvent<HTMLInputElement>){
        setNewEmail(e.target.value)
    }
    function passwordChangeHandler(e: React.ChangeEvent<HTMLInputElement>){
        setNewPassword(e.target.value)
    }

    function passwordHandler(){
        setPasswordToggle(!passwordToggle)
    }
    function submitHandler(e: React.MouseEvent<HTMLButtonElement>){
        auth.createUserWithEmailAndPassword(newEmail,newPassword).then(cred=>{
            e.preventDefault()
            return db.collection('users').doc(cred.user!.uid)
        })
        console.log(newEmail)
    }

    return (
        <div>
            <p>signup here</p>

            <div className="signup-card-container">
            <h2 id="title">Sign up</h2>

            <form 
                className="flex flex-col items-center"
                >
                <input
                    name="email"
                    type="text"
                    className="border-solid border-[1px] border-gray-900"
                    placeholder="email"
                    autoComplete="off"
                    onChange={emailChangeHandler}
                />  

                <input
                    name="password"    
                    type={passwordToggle ? "password": "text"}
                    className="border-solid border-[1px] border-gray-900"
                    placeholder="password"
                    autoComplete="off"
                    onChange={passwordChangeHandler}
                />

                <div>
                    <input
                        type="checkbox"
                        className="password-toggle"
                        onClick={passwordHandler}
                        
                    />Show Password
                </div>

                <button
                className="submit"
                    onClick={(e)=>submitHandler(e)}
                    >
                    Sign Up
                </button>
            </form>
            <div className="signup-link-container">
                <Link to='/signin' style={ {textDecoration: 'none'}}>
                    <p className="signin-link">
                        Already have an account? Sign in
                    </p>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Signup
