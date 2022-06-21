import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
// import { getDatabase, ref, set } from "firebase/database"
import ReactGA from "react-ga4";
import history from "../utils/history";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`,
};

// Google Analytics setting
const trackingID = firebaseConfig.measurementId;
ReactGA.initialize(trackingID);
history.listen((location) => {
  ReactGA.send("pageview", { page: location.pathname });
});

//Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const db = getFirestore(app);

export async function sample() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function addSearchHistory(query) {
  try {
    const docRef = await addDoc(collection(db, "searchHistory"), {
      query: query,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getSearchHistory(query) {
  const querySnapshot = await getDocs(collection(db, "searchHistory"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}
export default firebase;
