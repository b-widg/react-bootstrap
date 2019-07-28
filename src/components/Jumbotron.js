import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import boatImage from "../assets/boatImage.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: "#ccc"
    height: 200px;
    background-position: relative;
    z-index: -2;
  }
  .overlay{
      background-color: rgba(33, 33, 33, 0.1);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className='jumbo'>
      <div className='overlay' />
      <Container>
        <h1>Welcome</h1>
        <p>Learn stuff from youTube.</p>
      </Container>
    </Jumbo>
  </Styles>
);
