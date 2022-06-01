import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'
import {Button} from '@mantine/core'
import firebase from "firebase";

function DeleteButton({id}: {id: string}) {
  const [deleted]=useState(false)

  const deleteDocument = () => {
    firebase.firestore().collection("blogs").doc(id).delete()
  }

  return (
    <> 
      {deleted ? 
        <Navigate to="/editor"/>:
        <Button color={"red"} onClick={()=>deleteDocument()}>
          Delete
        </Button>
      }
    </>
  )
}

export default DeleteButton
