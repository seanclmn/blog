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
                className='flex flex-col justify-around items-center w-[300px] h-[320px] m-auto'>
                <h2 className='font-thin'>Welcome</h2>
                <TextInput label="Username" className='w-[250px]' {...register("email")}/>
                <TextInput label="Password" className='w-[250px]' {...register("password")}/>
                <Button type="submit" className='w-[250px] h-[40px] mt-[20px]'> Log in</Button>
                
            </form>
        </div>)
}

export default Login