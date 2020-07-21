import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBvmnNBQp3DSf4rKhI5d4b9qqMTqwS34WQ",
    authDomain: "beyond-body.firebaseapp.com",
    databaseURL: "https://beyond-body.firebaseio.com",
    projectId: "beyond-body",
    storageBucket: "beyond-body.appspot.com",
    messagingSenderId: "285234665008",
    appId: "1:285234665008:web:bcb556b3b89037e3417ff5",
    measurementId: "G-3FFZ44VFFC"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  export default firebase;