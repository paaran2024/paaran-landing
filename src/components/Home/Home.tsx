import styled, { css } from "styled-components";
import Home2 from "./Home2";
import { AiOutlineArrowDown } from "react-icons/ai";

function Home() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("intro-detail");
    if (nextSection) {
      const navBar = document.querySelector("nav.navbar");
      const navHeight =
        navBar instanceof HTMLElement ? navBar.offsetHeight : 60;
      const targetElementTop =
        nextSection.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: targetElementTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <S.HomeSection>
      {/* ================= 섹션 1: 메인 히어로 ================= */}
      <S.HeroContainer>
        <S.HeroContent data-aos="fade-down" data-aos-duration="1200">
          <S.Title>
            시대를 변화시킬 <br />
            <S.HighlightText>새로운 물결, 파아란</S.HighlightText>
          </S.Title>
        </S.HeroContent>

        {/* 하단 스크롤 안내 인디케이터 */}
        <S.ScrollDownBtn
          onClick={handleScrollDown}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <S.ScrollDownText>SCROLL DOWN</S.ScrollDownText>
          <S.ArrowBounce>
            <AiOutlineArrowDown size={22} />
          </S.ArrowBounce>
        </S.ScrollDownBtn>
      </S.HeroContainer>

      <Home2 />
    </S.HomeSection>
  );
}

const S = {
  HomeSection: styled.div`
    position: relative;
    width: 100%;
    overflow-x: hidden;
    background-color: #ffffff;
  `,

  HeroContainer: styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 90px 24px 50px 24px;
    box-sizing: border-box;
    background: radial-gradient(
      ellipse at 50% 30%,
      rgba(4, 132, 252, 0.09) 0%,
      rgba(255, 255, 255, 1) 72%
    );

    @media (max-width: 768px) {
      padding: 70px 16px 40px 16px;
      min-height: calc(100vh - 55px);
    }
  `,

  HeroContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 860px;
    margin: auto 0;
    gap: 16px;
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
    font-size: 3.8rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.25;
    margin: 0;
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 2.4rem;
    }
  `,

  HighlightText: styled.span`
    color: #0484fc;
    background: linear-gradient(135deg, #0484fc 0%, #0052cc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,

  CorePillList: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 14px;
  `,

  CorePill: styled.span`
    background: #ffffff;
    border: 1px solid #e2e8f0;
    color: #334155;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  `,

  ScrollDownBtn: styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    margin-top: 24px;
    color: #0484fc;
    padding: 0;
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
      transform: translateY(3px);
      color: #0052cc;
    }
  `,

  ScrollDownText: styled.span`
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 6px;
  `,

  ArrowBounce: styled.div`
    animation: bounce 1.8s infinite ease-in-out;

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(6px);
      }
      60% {
        transform: translateY(3px);
      }
    }
  `,
};

export default Home;
