import { auth, signInWithGoogle } from "../services/firebase";

import "../App.css";
import { Button } from "react-bootstrap";

export default function Login({ user, setUser }) {
  return (
    <>
      {user ? (
        <Logout setUser={setUser} />
      ) : (
        <Button onClick={signInWithGoogle}>
          <i className="fab fa-google"></i>Sign in with google
        </Button>
      )}
    </>
  );
}

function Logout({setUser}) {
  const logout = () => {
    auth.signOut();
    setUser(null);
  }
  return (
    <>
      <Button className="button signout" onClick={logout}>
        로그아웃
      </Button>
    </>
  );
}
