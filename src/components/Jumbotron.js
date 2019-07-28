import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import boatImage from "../assets/boatImage.jpg";

const Styles = styled.div``;

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
