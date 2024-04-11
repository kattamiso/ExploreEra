// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAf2tnvif75dnL2OrWxfMraCfv6dgIC-M",
  authDomain: "exploreera-authentication.firebaseapp.com",
  projectId: "exploreera-authentication",
  storageBucket: "exploreera-authentication.appspot.com",
  messagingSenderId: "147162023006",
  appId: "1:147162023006:web:730cd803f541e3fc19e0cf",
  measurementId: "G-30L89PS5W8"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)