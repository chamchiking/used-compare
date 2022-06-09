import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../../services/firebase';
import SearchBar from './components/Searchbar';

export default function Main({user}) {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <h2>메인 페이지</h2>
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
      />

      {(user)?<AuthMain user={user}/>:''}
    </>
  );
}

function AuthMain({user}) {
  return (
    <>
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <br /><br /><br />
      <Button className="button signout" onClick={() => auth.signOut()}>Sign out</Button>
    </>
  );
}