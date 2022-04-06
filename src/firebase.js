import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAWJgC0yj7Kk2HJlf2-RCFqMUB-0C65c1U",
    authDomain: "mymessenger-fb478.firebaseapp.com",
    projectId: "mymessenger-fb478",
    storageBucket: "mymessenger-fb478.appspot.com",
    messagingSenderId: "153107130348",
    appId: "1:153107130348:web:00c551465f924280f042c9"
}).auth();