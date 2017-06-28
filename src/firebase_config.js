import * as firebase from "firebase";

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_SECRET_CODE,
    authDomain: "automatedscheduler.firebaseapp.com",
    databaseURL: "https://automatedscheduler.firebaseio.com",
    projectId: "automatedscheduler",
    storageBucket: "automatedscheduler.appspot.com",
    messagingSenderId: "405720559957"
  };

export const boylan = firebase.initializeApp(firebaseConfig);
export const database = firebase.database();