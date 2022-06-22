import React from 'react';
import { auth } from '../../services/firebase';
import { Button } from 'react-bootstrap';
import { bungaeShoppingApi } from '../../services/bungae/shopping';

export default function Users({user}) {

  const res = bungaeShoppingApi("desks");
  console.log(res);

  // const $ = cheerio.load(resp.data);

  // const extractedCode = $('script').first().html();

  // const $bodyList = $('ul.row1').children("li")
  // let ulList = [];
  // $bodyList.each(function(i, elem) {
  //   ulList[i] = {
      
  //       title: $(this).find('div.list_title a').text(),
  //       url: 'search.naver.com/search.naver'+$(this).find('div.list_title a').attr('href'),
  //       image_url: $(this).find('div.list_thumb a img').attr('src'),
  //       image_alt: $(this).find('div.list_thumb a img').attr('alt'),
  //   };
  // });
  // console.log(ulList);


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