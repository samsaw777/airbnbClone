// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCtsvK9KFPuSu28D-dwCj5No4omvzFBKY",
  authDomain: "bookmyroom-36250.firebaseapp.com",
  projectId: "bookmyroom-36250",
  storageBucket: "bookmyroom-36250.appspot.com",
  messagingSenderId: "705825533858",
  appId: "1:705825533858:web:9cd6c8bb54ab7844254cfb",
  measurementId: "G-W8Z2N9CF11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
