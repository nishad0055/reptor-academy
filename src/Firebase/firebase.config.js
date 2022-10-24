// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCG1tbzn0qFreKR2RmcqCQYFTFPb-pf4U",
  authDomain: "brain-power-auth.firebaseapp.com",
  projectId: "brain-power-auth",
  storageBucket: "brain-power-auth.appspot.com",
  messagingSenderId: "1035425852922",
  appId: "1:1035425852922:web:614e10b25b10a7931bc843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;