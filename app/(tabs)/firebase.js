// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4r_8lyRwEcETSkg_frRx0ZEHuI86Q36A",
  authDomain: "expo-app-9ab19.firebaseapp.com",
  databaseURL: "https://expo-app-9ab19-default-rtdb.firebaseio.com",
  projectId: "expo-app-9ab19",
  storageBucket: "expo-app-9ab19.appspot.com",
  messagingSenderId: "229784448664",
  appId: "1:229784448664:web:361c6c2ec0f213cf5c2aed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app