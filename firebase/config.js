
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const app = firebase.initializeApp({
    apiKey: "AIzaSyABJtA5PfIv05cDC5q06x00LkI-n6-p1Ao",
    authDomain: "next-chat-25666.firebaseapp.com",
    projectId: "next-chat-25666",
    storageBucket: "next-chat-25666.appspot.com",
    messagingSenderId: "1000316415893",
    appId: "1:1000316415893:web:38501f3baca60ea459909c"
});
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { app, db, auth, provider };