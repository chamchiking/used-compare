import logo from './logo.svg';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import firebase from './services/firebase';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Main from "./containers/Main/index";
import Users from "./containers/Users/index";
import About from "./containers/About/index";
import MainNavbar from './components/MainNavbar';



function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user=> {
      setUser(user);
    })
  }, [])
  console.log(user);



  return (
    <div className="App">
      <Router>
        <MainNavbar
          user={user}
        />
        <Routes>
          <Route path="/" element={<Main user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
