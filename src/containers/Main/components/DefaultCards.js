import React from "react";
import { Card, Button } from "react-bootstrap";

export default function DefaultCards({
  brand,
  title,
  link,
  image,
  hprice,
  lprice,
  category1,
  category2,
  category3,
  category4,
  marker,
  mallName,
  productId,
  productType,
}) {
  const lowestPrice = numberWithCommas(lprice)
  const mallStyle={
    position: "absolute",
    width: "3em",
  }
  return (
    <>
      <div className="d-flex justify-content-around mb-3">
      <Card class="col-sm-4" style={{ width: "18rem" }} className="mb-3" key={productId}>
        <Card.Img variant="top" src={image} />
        <Card.Img style={mallStyle} className="ml-2 mt-2" src="/naver.ico"></Card.Img>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Body>
            브랜드: {brand}
            <br />
            최저가: {lowestPrice} 원
          </Card.Body>
          <Button variant="primary" href={link}>상품 보러가기</Button>
        </Card.Body>
      </Card>
      </div>
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