import React, { useState, useEffect } from "react";
import "./index.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { auth } from "../../services/firebase";
import SearchBar from "./components/Searchbar";
import SearchBarBackground from "./searchbar_img.png";
import HistoryBox from "./components/HistoryBox";
import { naverShoppingApi } from "../../services/naver/shopping";
import DefaultCards from "./components/DefaultCards";

export default function Main({ user }) {
  const [keyword, setKeyword] = useState("");
  const [histories, setHistories] = useState([]);
  const [naverItems, setNaverItems] = useState([]);

  useEffect(() => {
    naverShoppingApi("프라다");
  }, []);
  return (
    <>
      <Container fluid className="p-0">
        <div
          fluid
          className="p-0 mb-4"
          style={{
            backgroundImage: `url(${SearchBarBackground})`,
            height: "200px",
          }}
        >
          New & Second hands
        </div>
        <SearchBar
          user={user}
          keyword={keyword}
          setKeyword={setKeyword}
          histories={histories}
          setHistories={setHistories}
          setNaverItems={setNaverItems}
        />
        <Container>
          <Row>
            <Col>새 상품</Col>
            <Col>중고 상품</Col>
          </Row>
          <Row>
            <Col>
              <Container>
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
              </Container>
            </Col>
            <Col>
              <Container>
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
              </Container>
            </Col>
          </Row>
        </Container>
        <HistoryBox histories={histories} />
      </Container>
    </>
  );
}
