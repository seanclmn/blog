import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_APIKEY}`,
  authDomain: `${process.env.authDomain}`,
  databaseURL: `${process.env.databaseURL}`,
  projectId: `${process.env.projectId}`,
  storageBucket: `${process.env.storageBucket}`,
  messagingSenderId: `${process.env.messagingSenderId}`,
  appId: `${process.env.appId}`,
  measurementId: `${process.env.measurementId}`,
});

export const auth = firebase.auth();
export const storage = firebase.storage();
export default app;
