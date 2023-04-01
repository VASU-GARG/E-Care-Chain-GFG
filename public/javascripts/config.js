const firebase = require("firebase");
const { getStorage, ref } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyAqk4ycv5Y4BGGfYXUKyOdRrevfvIFNOok",
  authDomain: "dense-364214.firebaseapp.com",
  projectId: "dense-364214",
  storageBucket: "dense-364214.appspot.com",
  messagingSenderId: "977786200477",
  appId: "1:977786200477:web:6d896cd5f8a89f446a0f74",
  measurementId: "G-CC80BEZREX",
};

firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// const storage = firebase.storage();

// var storageRef = firebase.storage().ref();
// var fileRef = storageRef.child("images/d1.jpg");

module.exports = firebase;
