import React from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../../services/firebase';

export default function Main({user}) {
  return (
    <>
      <h2>메인 페이지</h2>
      {(user)?
        (
        <>
          <h1>Hello, <span></span>{user.displayName}</h1>
          <img src={user.photoURL} alt="" />
          <Button className="button signout" onClick={() => auth.signOut()}>Sign out</Button>
        </>
        )
        :
        ''
      }
    </>
  );
}