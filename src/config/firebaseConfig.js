import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
    apiKey: "AIzaSyC9KuS_cGUIJkLf9UUCWxs63slM6dQIZZQ",
    authDomain: "cse316-finalproject.firebaseapp.com",
    databaseURL: "https://cse316-finalproject.firebaseio.com",
    projectId: "cse316-finalproject",
    storageBucket: "cse316-finalproject.appspot.com",
    messagingSenderId: "333067371922",
    appId: "1:333067371922:web:219c4dd0b17d8afdc66d4b",
    measurementId: "G-5SM87JY9Z3"
};
firebase.initializeApp(firebaseConfig);

// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;