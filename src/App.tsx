import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // 페이지 이동 시 스크롤 최상단으로
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (1초)
      once: false, // 스크롤 시 한 번만 애니메이션 실행
    });
  }, []);

  return (
    <Router>
      <S.App>
        <S.PageWrapper>
          <S.NavbarWrapper>
            <Navbar />
          </S.NavbarWrapper>
          <S.MainContent>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/project" element={<Projects />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </S.MainContent>
          <Footer />
        </S.PageWrapper>
      </S.App>
    </Router>
  );
}

const S = {
  App: styled.div`
    text-align: center;
  `,
  PageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* 전체 화면 높이를 기준으로 설정 */
  `,
  NavbarWrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    transform: translateY(0);
    opacity: 1;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  `,
  MainContent: styled.main`
    flex: 1; /* 남는 공간을 채워 메인을 확장 */
    min-height: calc(100vh - 70px); /* 전체 높이에서 네비 바 빼기 */
  `,
  // MainContent: styled.main`
  //   flex: 1; /* 남는 공간을 채워 메인을 확장 */
  //   padding-top: 40px; /* 네비게이션 바 높이만큼 패딩 줘서 안 가려지게 */
  //   padding-bottom: 30px; /* 네비게이션 바 높이만큼 패딩 줘서 안 가려지게 */
  //   min-height: calc(100vh - 70px); /* 전체 높이에서 네비 바 빼기 */
  // `,
};

export default App;
