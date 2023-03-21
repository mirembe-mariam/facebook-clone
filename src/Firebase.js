// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
//import { EmailAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5AEsok1VRjWi1Tw6fJr0c7JQpaObyv7A",
  authDomain: "facebook-clone-a3dab.firebaseapp.com",
  projectId: "facebook-clone-a3dab",
  storageBucket: "facebook-clone-a3dab.appspot.com",
  messagingSenderId: "319819563769",
  appId: "1:319819563769:web:1c18b91972f62c860fd828",
  measurementId: "G-KC3BKT4FN2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
//const credential = EmailAuthProvider.credential(email, password);


//const auth = getAuth();


export { auth, provider };

export default db;
