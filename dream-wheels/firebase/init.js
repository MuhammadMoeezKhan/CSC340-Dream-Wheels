import {getFirestore} from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcc3BevKY8wokUnWX3GWuRZ8E473EBtxo",
  authDomain: "dream-wheels-20cb5.firebaseapp.com",
  projectId: "dream-wheels-20cb5",
  storageBucket: "dream-wheels-20cb5.appspot.com",
  messagingSenderId: "707702497274",
  appId: "1:707702497274:web:12670735d6312820f3ce43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
export default db //this will allow us to use the database anywhere from the application