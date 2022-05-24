//@ts-nocheck
import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'
import {Button} from '@mantine/core'
import firebase from "firebase";

function DeleteButton({id}) {
  const [deleted,setDeleted]=useState(false)

  const deleteDocument = () => {
    firebase.firestore().collection("blogs").doc(id).delete()
  }

  return (
   <> {deleted ? <Navigate to="/editor"/>:<Button color={"red"} onClick={()=>deleteDocument()}>Delete</Button>}</>
  )
}

export default DeleteButton
