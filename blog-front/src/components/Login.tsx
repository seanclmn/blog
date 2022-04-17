// @ts-nocheck
import {TextInput, Button} from '@mantine/core'
import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import { auth } from '../Firebase'
import { AuthContext } from '../auth/Auth'



const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, event) => {
        event?.preventDefault()
        console.log(data)
    }

    return( 
        <div>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='w-[300px] m-auto'>
                <p>Login here</p>
                <TextInput label="Username"/>
                <TextInput label="Password"/>
                <Button> Log in</Button>
                
            </form>
        </div>)
}

export default Login