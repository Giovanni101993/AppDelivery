// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzdJu5S3aW7KR-5M_oX472z8sZrpbc18A",
  authDomain: "app-de-delivery-70b08.firebaseapp.com",
  databaseURL: "https://app-de-delivery-70b08-default-rtdb.firebaseio.com",
  projectId: "app-de-delivery-70b08",
  storageBucket: "app-de-delivery-70b08.appspot.com",
  messagingSenderId: "69185372888",
  appId: "1:69185372888:web:cb9fe526d8fd6dc8658dad"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;