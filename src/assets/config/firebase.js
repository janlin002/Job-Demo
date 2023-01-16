// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use

import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZm3EDn5lLGE8S26NY7CAn1CIrlc9xJTk",
  authDomain: "oauth-test-d889f.firebaseapp.com",
  projectId: "oauth-test-d889f",
  storageBucket: "oauth-test-d889f.appspot.com",
  messagingSenderId: "57119496676",
  appId: "1:57119496676:web:3f39309bb2b88389928ff1",
  measurementId: "G-N3KF2CM5S7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth(app)
export const provide = new GoogleAuthProvider()