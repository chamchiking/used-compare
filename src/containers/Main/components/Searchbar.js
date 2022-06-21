import React from "react";
import { Stack, Form, Button, Container } from "react-bootstrap";
import { naverShoppingApi } from "../../../services/naver/shopping";
import { addSearchHistory, getSearchHistory } from "../../../services/firebase";

export default function SearchBar({ keyword, setKeyword, histories, setHistories, setNaverItems }) {
  const search = ()=> {
    addSearchHistory(keyword);
    getSearchHistory();
    setHistories([keyword, ...histories]);
    searchNaver();
  }

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
  }

  return (
    <Container style={searchBarStyle}>
      <Stack direction="horizontal" gap={3} className="mb-3">
        <Form.Control
          className="me-auto"
          placeholder="중고 검색창"
          aria-label="usedSearchbar"
          aria-describedby="basic-addon2"
          defaultValue={keyword}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
        <Button variant="secondary" onClick={search}>
          Submit
        </Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>
    </Container>
  );
}
