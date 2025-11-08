// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEVI_QBx5ULlldz-dposmmpPTFNWt8yMU",
  authDomain: "home-nest-real-state.firebaseapp.com",
  projectId: "home-nest-real-state",
  storageBucket: "home-nest-real-state.firebasestorage.app",
  messagingSenderId: "99221662937",
  appId: "1:99221662937:web:45ed36d6fbdf1e6e9262c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
