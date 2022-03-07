import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAqyS83oZ_FyReI6Z3xlloDDQP8j-CG5FA",
  authDomain: "blog-2a160.firebaseapp.com",
  databaseURL: "https://blog-2a160-default-rtdb.firebaseio.com",
  projectId: "blog-2a160",
  storageBucket: "blog-2a160.appspot.com",
  messagingSenderId: "204056153647",
  appId: "1:204056153647:web:f312f1035c04ab8548c0da",
  measurementId: "G-CPPZEW89DP",
});

export const auth = firebase.auth();
export const storage = firebase.storage();
export default app;
