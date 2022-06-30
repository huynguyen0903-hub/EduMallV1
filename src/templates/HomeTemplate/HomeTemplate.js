import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
function HomeTemplate({ Component }) {
  return (
    <>
      <HomeTemplateContainer>
        <Header />
        <Component />
        <Footer />
      </HomeTemplateContainer>
    </>
  );
}

export default HomeTemplate;

const HomeTemplateContainer = styled.div``;
