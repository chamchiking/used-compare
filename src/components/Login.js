import { auth, signInWithGoogle } from "../services/firebase";

import "../App.css";
import { Button } from "react-bootstrap";

export default function Login({ user }) {
  return (
    <>
      {user ? (
        <Logout />
      ) : (
        <Button onClick={signInWithGoogle}>
          <i className="fab fa-google"></i>Sign in with google
        </Button>
      )}
    </>
  );
}

function Logout() {
  return (
    <>
      <Button className="button signout" onClick={() => auth.signOut()}>
        로그아웃
      </Button>
    </>
  );
}
