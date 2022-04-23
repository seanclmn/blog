// @ts-nocheck

import React from 'react'
import { Button } from '@mantine/core'
import { auth } from '../Firebase.js'
interface Props {}

function Signout(props: Props) {
    const {} = props
    const onSubmit = () => {
        console.log("signing out")
        auth.signOut()

    }
    return (
        <div>
            <Button
                onClick={()=>onSubmit()}
            >
                Sign out
            </Button>

        </div>
    )
}

export default Signout
