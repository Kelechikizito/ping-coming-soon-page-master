// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7HBTK3-o8EeWMLJcdZPduLoL93SaTxkw",
  authDomain: "ping-coming-soon-68c8c.firebaseapp.com",
  projectId: "ping-coming-soon-68c8c",
  storageBucket: "ping-coming-soon-68c8c.appspot.com",
  messagingSenderId: "679685110145",
  appId: "1:679685110145:web:fea796ae0f4882c3871080",
  measurementId: "G-4W8EJ8KSPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);