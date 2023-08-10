// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2HPpLpVeKi96E1k76jJgoQD5PwwpxH6Q",
  authDomain: "escape-methamphetamine-game.firebaseapp.com",
  projectId: "escape-methamphetamine-game",
  storageBucket: "escape-methamphetamine-game.appspot.com",
  messagingSenderId: "381663271752",
  appId: "1:381663271752:web:011fc5c1e26dbdb7f5f17d",
  measurementId: "G-0H8WHKLCWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);