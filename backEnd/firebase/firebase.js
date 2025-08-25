// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDErrJIUM9mISFMS_or6ffQUXrhDJpmKg0",
  authDomain: "bankapp-796c2.firebaseapp.com",
  projectId: "bankapp-796c2",
  storageBucket: "bankapp-796c2.firebasestorage.app",
  messagingSenderId: "804904433250",
  appId: "1:804904433250:web:fa05cc8b50b638bcbd433b",
  measurementId: "G-Y46W8TVFCJ"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);