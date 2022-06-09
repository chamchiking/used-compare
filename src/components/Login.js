import { signInWithGoogle } from '../services/firebase';

import '../App.css';
import { Button } from 'react-bootstrap';

export default function Login() {
  return (
    <>
      <Button onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</Button>
    </>
  )
}