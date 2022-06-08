import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxNkC0LdIkhuAIwVpuHBTApRKpzbZm75c",
  authDomain: "product-compare-f7352.firebaseapp.com",
  projectId: "product-compare-f7352",
  storageBucket: "product-compare-f7352.appspot.com",
  messagingSenderId: "396093170553",
  appId: "1:396093170553:web:c6828a887c61c4ba9105a8",
  measurementId: "G-G7T0F6JYJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



function App() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user)=> {
    if(user) {
      const uid = user.uid;
      console.log(user);
    } else {
      console.log('not loggedin');
    }
  });
  
  const showLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const db = getFirestore(app);




  return (
    <div className="App">
      <></>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
