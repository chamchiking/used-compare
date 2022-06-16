import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { auth } from "../../services/firebase";
import SearchBar from "./components/Searchbar";
import { naverShoppingApi } from "../../services/naver/shopping";
import DefaultCards from "./components/DefaultCards";

export default function Main({ user }) {
  const [keyword, setKeyword] = useState("");
  const [naverItems, setNaverItems] = useState([]);

  useEffect(() => {
    naverShoppingApi("프라다");
  }, []);
  const topContainerStyle={
    'height': '250px'
  }
  return (
    <>
      <Container fluid>
        <div className="gradient__container1">
        <Container style={topContainerStyle}>
          <h1 className="display-1">Shop Smart!</h1>
        </Container>
        <SearchBar
          keyword={keyword}
          setKeyword={setKeyword}
          setNaverItems={setNaverItems}
        />
        {naverItems.map((e) => (
          <DefaultCards
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
          />
        ))}
        </div>
      </Container>
      <Container fluid>
        <h3>새 상품과 중고 상품을 한눈에!</h3>
      </Container>
    </>
  );
}
