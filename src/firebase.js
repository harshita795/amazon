import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWM9mVZrLv2W6uy3EQHUOYOTshCnxN1oU",
  authDomain: "clone-24f1d.firebaseapp.com",
  projectId: "clone-24f1d",
  storageBucket: "clone-24f1d.appspot.com",
  messagingSenderId: "870989778836",
  appId: "1:870989778836:web:5010f2e824e10545b84981",
  measurementId: "G-85SFTSE3L7"

});


const auth = firebase.auth();

export { auth };