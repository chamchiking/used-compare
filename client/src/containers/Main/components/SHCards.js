import React from "react";
import { Card, Button } from "react-bootstrap";
import "../index.css";

export default function SHCards({
  title,
  keyword,
  image,
  lprice,
  date,
}) {
  const lowestPrice = numberWithCommas(lprice)
  const mallStyle={
    position: "absolute",
    width: "3em",
  }
  
  return (
    <>
      <Card className='item-card' key={Math.floor(Math.random()*10000000)}>
        <Card.Img variant="top" src={image} />
        {/* <Card.Img style={mallStyle} className="ml-2 mt-2" src="/naver.ico"></Card.Img> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Body>
            등록일: {date}
            <br />
            최저가: {lowestPrice} 원
          </Card.Body>
          <Button variant="primary" className="link-button" href={`https://m.bunjang.co.kr/search/products?q=${keyword}`}>상품 보러가기</Button>
        </Card.Body>
      </Card>
    </>
  );
}

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
  return x;
}