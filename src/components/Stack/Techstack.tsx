import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiRedis,
  DiNginx,
} from "react-icons/di";
import { SiPostgresql, SiFastapi, SiApachekafka } from "react-icons/si";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

function Techstack({ handleScrollToSection }: { handleScrollToSection: (id: string) => void }) {
  const techStack = [
    { icon: <DiHtml5 />, name: "HTML" },
    { icon: <DiCss3 />, name: "CSS" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiApachekafka />, name: "Kafka" },
    { icon: <DiRedis />, name: "Redis" },
    { icon: <DiNginx />, name: "NginX" },
  ];

  return (
    <S.Section>
      <S.ButtonWrapper onClick={() => handleScrollToSection("section1")}>
        <IoIosArrowUp />
        <S.ScrollButton>스택 소개</S.ScrollButton>
      </S.ButtonWrapper>

      <S.Heading>
        <strong className="important">언어 • 프레임워크</strong>
      </S.Heading>

      <Row style={{ justifyContent: "center" }}>
        {techStack.map((tech, index) => (
          <S.Col xs={4} md={2} key={index}>
            <S.Icons>
              {tech.icon}
              <p style={{ margin: "10px 0px 0px 0px", fontSize: "14px" }}>
                {tech.name}
              </p>
            </S.Icons>
          </S.Col>
        ))}
      </Row>

      <S.ButtonWrapper onClick={() => handleScrollToSection("section3")}>
        <S.ScrollButton>DevOps • 인프라</S.ScrollButton>
        <IoIosArrowDown />
      </S.ButtonWrapper>
    </S.Section>
  );
}

const S = {
  Section: styled.section`
    text-align: center;
  `,

  Heading: styled.h1`
    margin: 30px 0;
    font-weight: bold;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    margin: 30px 0;
    color: #0484fc;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-3px);
    }
  `,

  ScrollButton: styled.span`
    font-weight: 600;
    font-size: 1.1rem;
  `,

  Col: styled(Col)`
    display: flex !important;
    margin: 15px !important;
    align-items: center !important;
    justify-content: center !important;
    flex-direction: column !important;
    padding: 20px !important;
    border: 1.7px solid rgba(4, 132, 252, 0.637) !important;
    border-radius: 10px !important;
    text-align: center !important;
    box-shadow: 4px 5px 4px 3px rgba(4, 132, 252, 0.2) !important;
    transition: all 0.4s ease 0s !important;
    gap: 10px !important;

    &:hover {
      transform: scale(1.05) !important;
      border: 2.2px solid rgba(4, 132, 252, 0.883) !important;
      box-shadow: 5px 6px 5px 4px rgba(4, 132, 252, 0.3) !important;
    }

    @media (max-width: 767px) {
      width: 100px !important;
      height: 130px !important;
      padding: 15px !important;
    }
  `,
  Icons: styled.div`
    font-size: 4.5em !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  `,
};

export { S };
export default Techstack;
