import React from "react";
import { Card, Button } from "react-bootstrap";

export default function DefaultCards({
  brand,
  title,
  link,
  image,
  category1,
  category2,
  category3,
  category4,
  marker,
  mallName,
  productId,
  productType,
}) {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary" href={link}>상품 보러가기</Button>
        </Card.Body>
      </Card>
    </>
  );
}
