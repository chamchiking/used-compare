import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../../services/firebase';
import SearchBar from './components/Searchbar';
import { naverShoppingApi } from '../../services/naver/shopping';
import DefaultCards from './components/DefaultCards';

export default function Main({user}) {
  const [keyword, setKeyword] = useState("");
  const [naverItems, setNaverItems] = useState([]);


  useEffect(()=> {
    naverShoppingApi('프라다');
  }, [])

  return (
    <>
      <h2>메인 페이지</h2>
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        setNaverItems={setNaverItems}
      />
      {naverItems.map((e)=>(<DefaultCards
        brand={e.brand}
        title={e.title}
        link={e.link}
        image={e.image}
        hprice={e.hprice}
        lprice={e.lprice}
        category1={e.category1}
        category2={e.category2}
        category3={e.category3}
        category4={e.category4}
        marker={e.marker}
        mallName={e.mallName}
        productId={e.productId}
        productType={e.productType}
      />))}


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