import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
//import { getFirestore } from 'firebase/firestore';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC5AEsok1VRjWi1Tw6fJr0c7JQpaObyv7A",
  authDomain: "facebook-clone-a3dab.firebaseapp.com",
  projectId: "facebook-clone-a3dab",
  storageBucket: "facebook-clone-a3dab.appspot.com",
  messagingSenderId: "319819563769",
  appId: "1:319819563769:web:1c18b91972f62c860fd828",
  measurementId: "G-KC3BKT4FN2",
};
const firebaseApp = initializeApp(firebaseConfig);
//const user = firebase.auth().currentUser;
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const postsRef = collection(db, 'posts');

export const fetchPosts = (setPosts) => {
  onSnapshot(postsRef, (snapshot) => {
    const posts = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setPosts(posts);
  });
};

// Define the user variable

// Use the user variable in your code

export { auth, provider };

export default db;




// Initialize Firebase
//const db = getFirestore();

//const credential = EmailAuthProvider.credential(email, password);


//const auth = getAuth();


  // Your app's Firebase configuration







