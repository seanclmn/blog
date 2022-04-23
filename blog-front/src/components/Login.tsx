// @ts-nocheck
import {TextInput, Button} from '@mantine/core'
import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { auth } from '../Firebase'
import { AuthContext } from '../auth/Auth'



const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, event) => {
        event?.preventDefault()
        auth.signInWithEmailAndPassword(data.email,data.password).then(cred=>{
            console.log(cred)
            })
           
    }

    return( 
        <div>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col items-center w-[300px] m-auto'>
                <p>Login here</p>
                <TextInput label="Username" {...register("email")}/>
                <TextInput label="Password" {...register("password")}/>
                <Button type="submit"> Log in</Button>
                
            </form>
        </div>)
}

export default Login