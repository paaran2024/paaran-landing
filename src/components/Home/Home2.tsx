// 241105
// 첫화면 두번째 페이지

import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

function Home2() {
  return (
    <S.HomeSection>
      <Container>
        <Row>
          <S.Description>
            <S.Title>
              <span className="important"> 파아란 </span> 소개
            </S.Title>
            <S.Body>
              지속적으로 성장하고, 실질적인 서비스를 만드는{" "}
              <b className="important">파아란</b>은 대학생들로 이루어진
              개발팀입니다.
              <br />
              <br />
              많은 프로젝트가 특정 기능 구현이나 내부 목표에만 집중한 채, 실제
              사용자 환경에서의 운영까지 이어지지 못하는 경우가 많습니다.
              <br />
              하지만 <b className="important">파아란은 다릅니다.</b> 우리는
              단순한 개발 경험을 넘어,{" "}
              <b className="important">
                시장 조사부터 기획, 운영, 피드백 반영까지
              </b>{" "}
              이어지는 긴 호흡의 프로젝트를 목표로 합니다.
              <br />
              <br />
              우리는{" "}
              <b className="important">실력 향상과 타 분야와의 협업 능력</b>
              이 QA와 실제 사용자들의 피드백을 바탕으로 한 지속적인 개선 과정
              에서 완성된다고 믿습니다.
              <br />
              이러한 믿음 아래, 우리는 끊임없이 고민하고 질문합니다.
              <br /> 📌 유저들이 필요로 하는 기능은 무엇일까?
              <br /> 📌 활성 사용자를 증가시킬 수 있는 방법은 무엇일까?
              <br /> 📌 지속 가능한 비즈니스 모델은 무엇일까?
              <br />
              <br />
              이러한 질문에 답하며 유저들에게 실제로 유용한 서비스를 개발하고
              운영하는 것. 이것이 바로 파아란의 지향점입니다.
              <br />
              현재 <b className="important">파아란</b>에서는 마케팅, 개발, UI/UX
              등 다양한 분야에서 <b className="important">팀원을 모집</b>하고
              있습니다.
              <S.EmailLink href="mailto:paaran2024@gmail.com">
                paaran2024@gmail.com
              </S.EmailLink>
              로 많은 연락 부탁드립니다.
              <S.Footer>- 파아란</S.Footer>
            </S.Body>
          </S.Description>
        </Row>
      </Container>
    </S.HomeSection>
  );
}

const S = {
  HomeSection: styled.section`
    position: relative;
    background-color: #ffffff;
    background-position: top center;
    background-repeat: no-repeat;
    width: 100%;
    height: calc(100vh - 70px); /* 화면 전체 높이로 설정 */

    display: flex;
    justify-content: center; /* 가로 가운데 정렬 */
    align-items: center; /* 세로 가운데 정렬 */
  `,
  ImageDiv: styled.div`
    display: flex;
    justify-content: center; /* 가로 가운데 정렬 */
    align-items: center; /* 세로 가운데 정렬 */
    height: 100%; /* 부모 컨테이너의 전체 높이를 사용 */

    @media (max-width: 767px) {
      justify-content: center;
      align-items: center; /* 모바일에서도 세로, 가로 중앙 정렬 */
    }
  `,
  Image: styled.img`
    max-height: 300px;
    margin: 0; /* 여백을 없애서 정확히 중앙에 위치 */

    @media (max-width: 767px) {
      max-height: 200px;
      margin-top: 100px; /* 모바일에서는 위쪽 여백을 100px로 설정 */
    }
  `,
  Description: styled.div`
    color: black !important;
    text-align: center;
  `,
  Title: styled.h1`
    font-size: 2.2em;
    text-align: center;
    font-weight: bold;
  `,
  Body: styled.p`
    padding-top: 10px;
    font-size: 1.2em !important;
    text-align: left;

    @media (max-width: 767px) {
      font-size: 1em !important;
    }
  `,
  EmailLink: styled.a`
    color: #0484fc;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,
  Footer: styled.footer`
    color: #2fadfc;
    text-align: center;
    font-weight: bold;
  `,
};

export default Home2;
