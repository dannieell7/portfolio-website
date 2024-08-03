// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcsAZXkdgEEBiKRYKJlOE68HBi0QOtGxI",
  authDomain: "inventory-management-c9138.firebaseapp.com",
  projectId: "inventory-management-c9138",
  storageBucket: "inventory-management-c9138.appspot.com",
  messagingSenderId: "382009194620",
  appId: "1:382009194620:web:7f22ec2022bd140a26b1f9",
  measurementId: "G-ZZNW0JJ77W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

// so we can access our firestore from other apps
export {firestore}