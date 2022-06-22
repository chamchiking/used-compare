import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  limit,
  onSnapshot,
  Timestamp,
  orderBy
} from "firebase/firestore";
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
export async function addSearchHistory(query, userId) {
  try {
    const docRef = await addDoc(collection(db, "searchHistory"), {
      userId: userId,
      query: query,
      createdAt: Timestamp.now(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function queryForDocument(userId) {
  const searchHistoryQuery = query(
    collection(db, "searchHistory"),
    where("userId", "==", userId),
    orderBy("createdAt", "desc"),
    limit(20)
  );
  const querySnapshot = await getDocs(searchHistoryQuery);
  const allDocs = []
  querySnapshot.forEach((snap) => {
    // console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
    allDocs.push(snap.data().query)
  });
  return allDocs;
  // let unsubscribeSearchHistory = onSnapshot(
  //   searchHistoryQuery,
  //   (querySnapshot) => {
  //     console.log(JSON.stringify(querySnapshot.docs.map((e)=> e.data())))
  //   }
  // )
}

export async function getSearchHistory(query) {
  const querySnapshot = await getDocs(collection(db, "searchHistory"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}
export default firebase;
