import { useState, useEffect } from "react";
import styled from "styled-components";
import Techstack from "./Techstack";
import DevStack from "./DevStack";
import Toolstack from "./Toolstack";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const STACK_SECTIONS = [
  { id: "section1", label: "00", title: "스택 소개" },
  { id: "section2", label: "01", title: "언어 • 프레임워크" },
  { id: "section3", label: "02", title: "DevOps • 인프라" },
  { id: "section4", label: "03", title: "협업 • 생산성" },
];

function Stack() {
  const [activeSectionId, setActiveSectionId] = useState<string>("section1");

  // 스크롤 시 현재 보고 있는 섹션을 감지하여 우측 네비게이터에 활성화 표시
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = STACK_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(STACK_SECTIONS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSectionId(STACK_SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const navBar = document.querySelector("nav.navbar");
    const navHeight = navBar instanceof HTMLElement ? navBar.offsetHeight : 60;

    const targetElementTop =
      targetElement.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetElementTop - navHeight,
      behavior: "smooth",
    });
  };

  const handleScrollPrev = () => {
    const currentIndex = STACK_SECTIONS.findIndex(
      (s) => s.id === activeSectionId,
    );
    if (currentIndex > 0) {
      handleScrollToSection(STACK_SECTIONS[currentIndex - 1].id);
    }
  };

  const handleScrollNext = () => {
    const currentIndex = STACK_SECTIONS.findIndex(
      (s) => s.id === activeSectionId,
    );
    if (currentIndex < STACK_SECTIONS.length - 1) {
      handleScrollToSection(STACK_SECTIONS[currentIndex + 1].id);
    }
  };

  return (
    <S.StackPageRoot>
      {/* ================= 우측 고정 플로팅 퀵 내비게이터 ================= */}
      <S.FloatingNav>
        <S.NavArrowBtn
          onClick={handleScrollPrev}
          disabled={activeSectionId === STACK_SECTIONS[0].id}
          title="이전 섹션"
        >
          <FiChevronUp />
        </S.NavArrowBtn>

        <S.NavDotsList>
          {STACK_SECTIONS.map((sec) => {
            const isActive = activeSectionId === sec.id;
            return (
              <S.NavDotItem
                key={sec.id}
                $active={isActive}
                onClick={() => handleScrollToSection(sec.id)}
              >
                <span className="dot" />
                <span className="title-tooltip">{sec.title}</span>
              </S.NavDotItem>
            );
          })}
        </S.NavDotsList>

        <S.NavArrowBtn
          onClick={handleScrollNext}
          disabled={
            activeSectionId === STACK_SECTIONS[STACK_SECTIONS.length - 1].id
          }
          title="다음 섹션"
        >
          <FiChevronDown />
        </S.NavArrowBtn>
      </S.FloatingNav>

      {/* ========== 섹션 1: 인트로 ========== */}
      <S.SectionWrapper id="section1" $bgType="hero">
        <S.HeroContent data-aos="fade-down" data-aos-duration="1200">
          <S.HeroTitle>
            <S.HighlightText>파아란</S.HighlightText>의 기술 스택
          </S.HeroTitle>
        </S.HeroContent>

        <S.ScrollDownBtn
          onClick={() => handleScrollToSection("section2")}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <S.ScrollDownText>SCROLL DOWN</S.ScrollDownText>
          <S.ArrowBounce>
            <AiOutlineArrowDown size={22} />
          </S.ArrowBounce>
        </S.ScrollDownBtn>
      </S.SectionWrapper>

      {/* ========== 섹션 2: 언어 및 프레임워크 ========== */}
      <S.SectionWrapper id="section2" $bgType="white">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ width: "100%" }}
        >
          <Techstack handleScrollToSection={handleScrollToSection} />
        </div>
      </S.SectionWrapper>

      {/* ========== 섹션 3: DevOps & 인프라 ========== */}
      <S.SectionWrapper id="section3" $bgType="light">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ width: "100%" }}
        >
          <DevStack handleScrollToSection={handleScrollToSection} />
        </div>
      </S.SectionWrapper>

      {/* ========== 섹션 4: 협업 & 생산성 ========== */}
      <S.SectionWrapper id="section4" $bgType="white">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ width: "100%" }}
        >
          <Toolstack handleScrollToSection={handleScrollToSection} />
        </div>
      </S.SectionWrapper>
    </S.StackPageRoot>
  );
}

export default Stack;

/* ================== Styled Components ================== */
const S = {
  StackPageRoot: styled.div`
    position: relative;
    width: 100%;
    overflow-x: hidden;
    background: #ffffff;
  `,

  /* 우측 고정 플로팅 내비게이터 */
  FloatingNav: styled.div`
    position: fixed;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 900;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    padding: 14px 8px;
    border-radius: 40px;
    border: 1px solid rgba(226, 232, 240, 0.8);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;

    @media (max-width: 900px) {
      display: none;
    }
  `,

  NavArrowBtn: styled.button`
    background: transparent;
    border: none;
    color: #64748b;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      color: #0484fc;
      background: rgba(4, 132, 252, 0.1);
      transform: scale(1.1);
    }

    &:disabled {
      color: #cbd5e1;
      cursor: not-allowed;
    }
  `,

  NavDotsList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 4px 0;
  `,

  NavDotItem: styled.div<{ $active: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 4px;

    .dot {
      width: ${(props) => (props.$active ? "12px" : "8px")};
      height: ${(props) => (props.$active ? "12px" : "8px")};
      border-radius: 50%;
      background-color: ${(props) => (props.$active ? "#0484fc" : "#cbd5e1")};
      box-shadow: ${(props) =>
        props.$active ? "0 0 0 4px rgba(4, 132, 252, 0.2)" : "none"};
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .title-tooltip {
      position: absolute;
      right: 32px;
      background: #1e293b;
      color: #ffffff;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 5px 10px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transform: translateX(8px);
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

      &::after {
        content: "";
        position: absolute;
        right: -4px;
        top: 50%;
        transform: translateY(-50%);
        border-width: 4px 0 4px 4px;
        border-style: solid;
        border-color: transparent transparent transparent #1e293b;
      }
    }

    &:hover {
      .dot {
        background-color: #0484fc;
        transform: scale(1.2);
      }
      .title-tooltip {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,

  /* 섹션 래퍼 */
  SectionWrapper: styled.section<{ $bgType: "hero" | "white" | "light" }>`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: ${(props) =>
      props.$bgType === "hero" ? "center" : "flex-start"};
    align-items: center;
    box-sizing: border-box;

    background: ${(props) => {
      switch (props.$bgType) {
        case "hero":
          return "radial-gradient(ellipse at 50% 30%, rgba(4, 132, 252, 0.09) 0%, rgba(255, 255, 255, 1) 72%)";
        case "light":
          return "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)";
        case "white":
        default:
          return "#ffffff";
      }
    }};

    border-bottom: ${(props) =>
      props.$bgType === "hero" ? "none" : "1px solid #f1f5f9"};

    @media (max-width: 768px) {
      min-height: ${(props) =>
        props.$bgType === "hero" ? "calc(100vh - 55px)" : "auto"};
      padding: ${(props) =>
        props.$bgType === "hero" ? "70px 16px 30px 16px" : "20px 0 36px 0"};
    }
  `,

  /* 인트로 히어로 섹션 */
  HeroContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    max-width: 800px;
    margin: auto 0;

    @media (max-width: 768px) {
      padding: 0 12px;
    }
  `,

  HeroBadge: styled.div`
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: #0484fc;
    background: rgba(4, 132, 252, 0.1);
    padding: 8px 18px;
    border-radius: 30px;
    margin-bottom: 24px;
    border: 1px solid rgba(4, 132, 252, 0.2);

    @media (max-width: 768px) {
      font-size: 0.75rem;
      padding: 6px 14px;
      margin-bottom: 16px;
    }
  `,

  HeroTitle: styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.25;
    margin-bottom: 20px;
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 2.2rem;
      margin-bottom: 14px;
    }
  `,

  HighlightText: styled.span`
    color: #0484fc;
    background: linear-gradient(135deg, #0484fc 0%, #0052cc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,

  HeroSubtitle: styled.p`
    font-size: 1.2rem;
    line-height: 1.7;
    color: #64748b;
    margin-bottom: 20px;
    word-break: keep-all;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 16px;
    }
  `,

  ScrollDownBtn: styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    margin-top: 24px;
    margin-bottom: 20px;
    color: #0484fc;
    padding: 0;
    transition:
      transform 0.2s ease,
      color 0.2s ease;

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
        transform: translateY(8px);
      }
      60% {
        transform: translateY(4px);
      }
    }
  `,
};
