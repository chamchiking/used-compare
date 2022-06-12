import React from "react";
import { Stack, Form, Button, Container } from "react-bootstrap";
import './component.css';
import { naverShoppingApi } from "../../../services/naver/shopping";

export default function HistoryBox({ historyies }) {

  const HistoryList = ({historyies}) => {
      return <>
          {historyies.map(
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
          <HistoryList historyies={historyies} />
        </div>
    </Container>
  );
}
