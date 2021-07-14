import firebase from "firebase/app";
import "@firebase/firestore"



const app = firebase.initializeApp(  {
    apiKey: "AIzaSyC9ljSUaBq5rj3lqVdei75M8N7zDrBSk5A",
    authDomain: "coderhouse-ecommerce-sd.firebaseapp.com",
    projectId: "coderhouse-ecommerce-sd",
    storageBucket: "coderhouse-ecommerce-sd.appspot.com",
    messagingSenderId: "781012729024",
    appId: "1:781012729024:web:b8b0f83b3e7603d825c125",
    measurementId: "G-VRW2407ZGL"
  });

  export function getFirebase() {
    return  app;
}

export function getFirestore() {
    return firebase.firestore(app);
}