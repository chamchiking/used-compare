import React from "react";
import './component.css';
import { Stack, Form, Button, Container } from "react-bootstrap";
import { naverShoppingApi } from "../../../services/naver/shopping";

export default function HistoryBox({ histories }) {

  const HistoryList = ({histories}) => {
      return <>
          {histories.map(
            his => <AHistory his={his}/>
          )}
        </>;
  }
  const AHistory = ({his}) => {
      return <div class='one-his' >
          <div>{his}</div>  
      </div>;
  }

  return (
    <Container id='history-box'>
        <div id='history-title'>최근 검색기록</div>
        <div id='history-scroll-box'>
          <HistoryList histories={histories} />
        </div>
    </Container>
  );
}