import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBlAiVmWvJCMcu4vXJrOFv94NvgWBtmlTg",
    authDomain: "anichat-application.firebaseapp.com",
    projectId: "anichat-application",
    storageBucket: "anichat-application.appspot.com",
    messagingSenderId: "404372649914",
    appId: "1:404372649914:web:9af51af53f99ce4343cf83"
  }).auth();