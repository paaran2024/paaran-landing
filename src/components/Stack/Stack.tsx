import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Techstack from "./Techstack";
import DevStack from "./DevStack";
import Toolstack from "./Toolstack";
import { AiOutlineArrowDown } from "react-icons/ai";

function Stack() {

  const handleScrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const currentY = window.pageYOffset;
    const targetY = targetElement.getBoundingClientRect().top + currentY;

    // 대상이 아래에 있다면(내려갈 때) offset을 덜 적용
    const yOffset = targetY > currentY ? -140 : -40;
    const y = targetY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <S.StackSection fluid>
      {/* ========== 섹션1 ========== */}
      <S.SectionWrapper
        id="section1"
        style={{
          height: "calc(100vh - 70px)",
          marginTop: "40px",
        }}
      >
        <div
          data-aos="fade-down" // 원하는 AOS 효과
          data-aos-duration="1500" // 애니메이션 시간
        >
          <h1 className="project-heading">
            <strong className="purple">스택</strong>
          </h1>
          <p>파아란이 사용하는 스택을 소개합니다.</p>
        </div>
        <S.ButtonWrapper
          data-aos="fade-up"
          data-aos-duration="1500"
          onClick={() => handleScrollToSection("section2")}
        >
          <S.ScrollDownText>소개 보기</S.ScrollDownText>
          <AiOutlineArrowDown size={30} />
        </S.ButtonWrapper>
      </S.SectionWrapper>

      {/* ========== 섹션2 ========== */}
      <S.SectionWrapper
        id="section2"
        data-aos="fade-up"
        style={{
          minHeight: "calc(100vh - 40px)",
        }}
      >
        <Techstack handleScrollToSection={handleScrollToSection} />
      </S.SectionWrapper>

      {/* ========== 섹션3 ========== */}
      <S.SectionWrapper
        id="section3"
        data-aos="fade-up"
        style={{
          minHeight: "calc(100vh - 40px)",
        }}
      >
        <DevStack handleScrollToSection={handleScrollToSection} />
      </S.SectionWrapper>

      {/* ========== 섹션4 ========== */}
      <S.SectionWrapper
        id="section4"
        data-aos="fade-up"
        style={{
          minHeight: "calc(100vh - 40px)",
        }}
      >
        <Toolstack handleScrollToSection={handleScrollToSection} />
      </S.SectionWrapper>
    </S.StackSection>
  );
}

export default Stack;

/* ================== styled-components ================== */
const S = {
  StackSection: styled(Container)`
    /* 전체 영역에 기본 스타일 지정 */
    position: relative;
  `,

  /* 각 섹션 하나가 화면을 꽉 채우게 하고 싶다면 height: 100vh 등으로 조정 */
  SectionWrapper: styled.section`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  ButtonWrapper: styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;
  `,

  ScrollButton: styled.button`
    padding: 10px 20px;
    background-color: #0d6efd;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      background-color: #0b5ed7;
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
