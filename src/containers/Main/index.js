import React, { useState, useEffect } from "react";
import './index.css';
import { Button, Container } from "react-bootstrap";
import { auth } from "../../services/firebase";
import SearchBar from "./components/Searchbar";
import HistoryBox from "./components/HistoryBox";
import { naverShoppingApi } from "../../services/naver/shopping";
import DefaultCards from "./components/DefaultCards";

export default function Main({ user }) {
	const [historyies, setHistoryies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [naverItems, setNaverItems] = useState([]);

  useEffect(() => {
    naverShoppingApi("프라다");
  }, []);
  return (
    <>
      <Container>
        <Container id="top-container">
          <h2>메인 페이지</h2>
        </Container>
        <SearchBar
          keyword={keyword}
          setKeyword={setKeyword}
					historyies={historyies}
					setHistoryies={setHistoryies}
          setNaverItems={setNaverItems}
        />
				
				<Container id='boxes'>
					<Container id='left-box' className="two-box">
						<Container id='new-items-title' className="items-title">
							<h5>새 상품</h5>
						</Container>
						<Container id='new-items-box' className="items-box">
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
					</Container>
					
					<Container id='center-line'/>
					
					<Container id='left-box' className="two-box">
						<Container id='sh-items-title' className="items-title">
							<h5>중고 상품</h5>
						</Container>
						<Container id='sh-items-box' className="items-box">

						</Container>
					</Container>

				</Container>
			</Container>
			<HistoryBox historyies={historyies}/>
    </>
  );
}
