import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAxNkC0LdIkhuAIwVpuHBTApRKpzbZm75c",
    authDomain: "product-compare-f7352.firebaseapp.com",
    projectId: "product-compare-f7352",
    storageBucket: "product-compare-f7352.appspot.com",
    messagingSenderId: "396093170553",
    appId: "1:396093170553:web:c6828a887c61c4ba9105a8",
    measurementId: "G-G7T0F6JYJB"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;