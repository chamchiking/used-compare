import React from "react";
import { Stack, Form, Button, Container } from "react-bootstrap";

export default function SearchBar({ keyword, setKeyword }) {
  return (
    <Container>
      <div>검색창</div>
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
        <Button variant="secondary" onClick={console.log(keyword)}>
          Submit
        </Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>
    </Container>
  );
}
