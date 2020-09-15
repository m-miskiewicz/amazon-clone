import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBUo38ekggP2JW_LiqdKd0moCiNIf-iYQE",
  authDomain: "clone-33914.firebaseapp.com",
  databaseURL: "https://clone-33914.firebaseio.com",
  projectId: "clone-33914",
  storageBucket: "clone-33914.appspot.com",
  messagingSenderId: "137048495361",
  appId: "1:137048495361:web:75a8a1c527645c87d33700",
  measurementId: "G-JXK358V646",
});

const auth = firebase.auth();

export { auth };
