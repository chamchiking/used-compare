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
  return (
    <>
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Body>최저가: {lowestPrice} 원</Card.Body>
          <Button variant="primary" href={link}>상품 보러가기</Button>
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