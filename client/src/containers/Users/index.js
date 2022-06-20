import React from 'react';
import { auth } from '../../services/firebase';
import { Button } from 'react-bootstrap';


export default function Users({user}) {
  return (
    <>
      <h2>Users 페이지</h2>

      {(user)?<AuthUser user={user}/>:''}
    </>
  );
}

function AuthUser({user}) {
  return (
    <>
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <br /><br /><br />
      <Button className="button signout" onClick={() => auth.signOut()}>Sign out</Button>
    </>
  );
}