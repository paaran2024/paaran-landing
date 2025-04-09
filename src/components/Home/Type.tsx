// 241105
// Home1에 타이핑으로 들어오는 파트

import Typewriter from "typewriter-effect";
import styled from "styled-components";

function Type() {
  return (
    <S.TypewriterWrapper>
      <S.TypewriterCursor>
        <Typewriter
          options={{
            strings: ["파아란 | PAAARAN", "파아란 코스", "파아란 시대"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </S.TypewriterCursor>
    </S.TypewriterWrapper>
  );
}

const S = {
  TypewriterWrapper: styled.div`
    font-size: 0.8em !important;
    color: #2fadfc;
    font-weight: 600 !important;
    padding-top: 7%;
    padding-left: 20% !important;

    @media (max-width: 767px) {
      font-size: 0.8em !important;
      font-weight: 600 !important;
      position: absolute !important;
      padding-left: 5% !important;
    }
  `,

  TypewriterCursor: styled.div`
    font-size: 2.4em !important;
    color: #2fadfc;

    @media (max-width: 767px) {
    }
  `,
};
export default Type;
