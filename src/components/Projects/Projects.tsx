import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import ProjectDetailLanding from "./ProjectDetailLanding";
import ProjectDetailCourse from "./ProjectDetailCourse";
import ProjectDetailUOS from "./ProjectDetailUOS";

function Projects() {
  const handleScrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <S.Container fluid>
      {/* ========== 섹션1 ========== */}
      <S.SectionWrapper id="section1">
        <div
          data-aos="fade-down" // 원하는 AOS 효과
          data-aos-duration="1500" // 애니메이션 시간
        >
          <h1 className="project-heading">
            <strong className="purple">프로젝트</strong>
          </h1>
          <p>파아란이 운영하는 서비스를 소개합니다.</p>
        </div>
        <S.ButtonWrapper
          data-aos="fade-up"
          data-aos-duration="1500"
          onClick={() => handleScrollToSection("section2")}
        >
          <S.ScrollButton onClick={() => handleScrollToSection("section2")}>
            아래로 스크롤 ↓
          </S.ScrollButton>
        </S.ButtonWrapper>
      </S.SectionWrapper>

      {/* ========== 섹션2 ========== */}
      <S.SectionWrapper id="section2" data-aos="fade-up">
        <S.ButtonWrapper>
          <S.ScrollButton onClick={() => handleScrollToSection("section1")}>
            ↑ 프로젝트 소개
          </S.ScrollButton>
        </S.ButtonWrapper>

        <h1 className="project-heading">
          <strong className="important">언어 • 프레임워크</strong>
        </h1>
        <ProjectDetailLanding />

        <S.ButtonWrapper>
          <S.ScrollButton onClick={() => handleScrollToSection("section3")}>
            파아란코스 ↓
          </S.ScrollButton>
        </S.ButtonWrapper>
      </S.SectionWrapper>

      {/* ========== 섹션3 ========== */}
      <S.SectionWrapper id="section3" data-aos="fade-up">
        <S.ButtonWrapper>
          <S.ScrollButton onClick={() => handleScrollToSection("section2")}>
            ↑ 파아란랜딩
          </S.ScrollButton>
        </S.ButtonWrapper>

        <h1 className="project-heading">
          <strong className="important">DevOps • 인프라</strong>
        </h1>
        <ProjectDetailCourse />

        <S.ButtonWrapper>
          <S.ScrollButton onClick={() => handleScrollToSection("section4")}>
            파아란시대 ↓
          </S.ScrollButton>
        </S.ButtonWrapper>
      </S.SectionWrapper>

      {/* ========== 섹션4 ========== */}
      <S.SectionWrapper id="section4" data-aos="fade-up">
        {/* 위로 버튼만 - 마지막 섹션이니까 */}
        <S.ButtonWrapper>
          <S.ScrollButton onClick={() => handleScrollToSection("section3")}>
            ↑ 파아란시대
          </S.ScrollButton>
        </S.ButtonWrapper>
        <h1 className="project-heading">
          <strong className="important">협업 • 생산성</strong>
        </h1>
        <ProjectDetailUOS />
      </S.SectionWrapper>
    </S.Container>
  );
}

export default Projects;

/* ================== styled-components ================== */
const S = {
  Container: styled(Container)`
    position: relative;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  `,

  /* 각 섹션 하나가 화면을 꽉 채우게 하고 싶다면 height: 100vh 등으로 조정 */
  SectionWrapper: styled.section`
    position: relative;
    min-height: 100vh; /* 스크롤 한 화면씩 보이려면 min-height: 100vh */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    box-sizing: border-box;
    gap: 40px;

    /* 배경 색상을 다르게 주거나 배경 이미지를 지정할 수도 있음 */
    &:nth-of-type(1) {
      background: #f9f9f9;
    }
    &:nth-of-type(2) {
      background: #ffffff;
    }
    &:nth-of-type(3) {
      background: #f0f0f0;
    }
    &:nth-of-type(4) {
      background: #fafafa;
    }
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
};
