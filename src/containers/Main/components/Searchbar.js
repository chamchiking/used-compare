import React from "react";
import { Stack, Form, Button, Container } from "react-bootstrap";
import { naverShoppingApi } from "../../../services/naver/shopping";

export default function SearchBar({ keyword, setKeyword, setNaverItems }) {
  const searchNaver = () => {
    naverShoppingApi(keyword).then((data)=> {
      setNaverItems(data.items);
      console.log(data.items);
    });
  };
  const searchBarStyle={
    'position': 'sticky',
    'top': '20px',
    'z-index': '1',
    'padding': '2px 23px 2px 30px',
  }

  return (
    <Container style={searchBarStyle}>
      <Stack direction="horizontal" gap={3} className="mb-3">
        <Form.Control
          className="me-auto"
          placeholder="상품을 입력하세요."
          aria-label="usedSearchbar"
          aria-describedby="basic-addon2"
          defaultValue={keyword}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
        <Button variant="secondary" onClick={searchNaver}>
          검색
        </Button>
        <div className="vr" />
        <Button variant="outline-danger">내용 지우기</Button>
      </Stack>
    </Container>
  );
}
