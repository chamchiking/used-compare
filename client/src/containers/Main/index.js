import React, { useState, useEffect } from "react";
import "./index.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { auth, queryForDocument } from "../../services/firebase";
import SearchBar from "./components/Searchbar";
import SearchBarBackground from "./searchbar_img.png";
import HistoryBox from "./components/HistoryBox";
import { naverShoppingApi } from "../../services/naver/shopping";
import DefaultCards from "./components/DefaultCards";
import SHCards from "./components/SHCards";

export default function Main({ user }) {
  const [keyword, setKeyword] = useState("");
  const [isItHome, setIsItHome] = useState(true);
  const [histories, setHistories] = useState([]);
  const [naverItems, setNaverItems] = useState([]);
  const [searchData, setSearchData] = useState([]);


  const getData = (keyword) => {
    fetch(`http://localhost:5000/crawling/data?keyword=${keyword}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchData(data.slice(0, 10));
        console.log(searchData);
        console.log(keyword);
      });
  };


  useEffect(() => {
    const fetchHistory = async ()=> {
      const allHistories = await queryForDocument(user.uid);
      setHistories(allHistories);
    }

    fetchHistory()
  }, [user]);
  return (
    <>
      <Container fluid className="p-0">
        <div
          fluid
          className="p-0 mb-4 py-5 fs-1 text-white"
          style={
            isItHome? 
              { 
                marginTop: '80px',
                backgroundImage: `url(${SearchBarBackground})`,
                height: "400px",
              }
            :
              {
                marginTop: '20px',
                backgroundImage: `url(${SearchBarBackground})`,
                height: "200px",
              }
          }
        >
          <div
            style={
              isItHome? 
                {
                  marginTop: '80px',
                  height: "150px",
                }
              :
                {height: "80px"}
          }>
            New & Second hands
          </div>
          <SearchBar
            user={user}
            keyword={keyword}
            setKeyword={setKeyword}
            histories={histories}
            setHistories={setHistories}
            setNaverItems={setNaverItems}
            getData={getData}
            setIsItHome={setIsItHome}
          />
        </div>
        
				{isItHome?
          <>
          <div id='main-about' style={{marginRight: '300px', marginTop: "70px"}}>
            <div>
              <div id='main-about-large'>
                Don't miss the chance to buy a new product at a lower price.
              </div>
              <div id='main-about-small'>
              We make it possible for you to consume more efficiently by efficiently comparing the market price of used products to the lowest price of new products on the market.
              Our services prevent a sad case of buying a new product that is more expensive and the quality is similar to used one, without knowing that there is a good used product.
              We hope you use our service to make smart consumption.
              </div>
              <div id='main-about-bottom'>
                Smart shopping for you, New & Second Hands
              </div>
            </div>
              <img style={{
                width: "40%"
              }} alt="Main page" src={require('./main_page_img.jpg')} />
          </div>
          </>
				:
          <Container>
            <Row style={{marginBottom: '15px', paddingBottom: '15px', borderBottom: "1px solid rgb(215, 225, 225)"}}>
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
                  {searchData.map((e) => (
                    <SHCards
                      title={e.title}
                      keyword={keyword}
                      image={e.image}
                      lprice={e.price}
                      date={e.date}
                    />
                  ))
                  }
                </Container>
              </Col>
            </Row>
          </Container>
        }
        <HistoryBox histories={histories} />
      </Container>
    </>
  );
}
