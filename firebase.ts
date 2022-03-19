import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const clientCredentials = {
  apiKey: "AIzaSyDCtsvK9KFPuSu28D-dwCj5No4omvzFBKY",
  authDomain: "bookmyroom-36250.firebaseapp.com",
  projectId: "bookmyroom-36250",
  storageBucket: "bookmyroom-36250.appspot.com",
  messagingSenderId: "705825533858",
  appId: "1:705825533858:web:9cd6c8bb54ab7844254cfb",
  measurementId: "G-W8Z2N9CF11",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
