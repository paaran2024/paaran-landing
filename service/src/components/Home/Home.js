// 241105
// 첫화면 첫번째 페이지

import React from "react";
import styled, { css } from "styled-components";
import Home2 from "./Home2";
import { AiOutlineArrowDown } from "react-icons/ai";

function Home() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      // const yOffset = -40; // 이게 정석
      const yOffset = -35; // 이건 아래 footer 보일려고 끝까지 내린거
      const y =
        nextSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <S.HomeSection>
      <S.HomeContainer>
        <div
          data-aos="fade-down" // 원하는 AOS 효과
          data-aos-duration="1500" // 애니메이션 시간
        >
          <S.Title>파아란 | PAARAN</S.Title>
          <S.SubTitle>시대를 변화시킬 새로운 물결</S.SubTitle>
        </div>
        {/* Scroll Down 버튼/화살표 */}
        <S.ScrollDownWrapper
          data-aos="fade-up"
          data-aos-duration="1500"
          onClick={handleScrollDown}
        >
          <S.ScrollDownText>소개 보기</S.ScrollDownText>
          <AiOutlineArrowDown size={30} />
        </S.ScrollDownWrapper>
      </S.HomeContainer>
      <div
        id="next-section"
        style={{ minHeight: "calc(100vh - 70px)", padding: 0 }}
      >
        <Home2 />
      </div>
    </S.HomeSection>
  );
}

const S = {
  HomeSection: styled.section`
    position: relative;
    background-color: transparent;
    background-position: top center;
    background-repeat: no-repeat;
    -webkit-user-select: none; /* Safari, Chrome */
    -webkit-touch-callout: none; /* 모바일에서 텍스트 꾹 누를 때 나오는 메뉴 비활성화 */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none; /* 표준 속성 */
    height: 100%;

    @media (max-width: 767px) {
      padding-top: 0px !important;
    }
  `,

  HomeContainer: styled.section`
    /* 화면 전체를 덮는 높이 */
    width: 100%;
    height: 100vh;
    position: relative;

    /* 요소 중앙 정렬 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* 글자 색상 등 */
    color: #fff;
    text-align: center;
  `,

  Title: styled.h1`
    ${css`
      @font-face {
        font-family: "HakgyoansimDunggeunmisoTTF-R";
        src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimDunggeunmisoTTF-R.woff2")
          format("woff2");
        font-weight: 0;
        font-style: normal;
      }
    `};
    font-family: "HakgyoansimDunggeunmisoTTF-R", sans-serif;
    font-size: 4rem;
    font-weight: 700;
    color: black;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  `,

  SubTitle: styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: black;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  `,

  ScrollDownWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-top: 3rem;
    color: black;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(5px);
    }
  `,

  ScrollDownText: styled.span`
    font-size: 1rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    color: black;
  `,
};

export default Home;
