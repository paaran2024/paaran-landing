import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <S.Footer>
      <S.FooterContent>
        <S.FooterCopywright>
          © {year} 파아란. All rights reserved.
        </S.FooterCopywright>
        <S.FooterIcons>
          <a
            href="https://github.com/paaran2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </S.FooterIcons>
      </S.FooterContent>
    </S.Footer>
  );
}

const S = {
  Footer: styled.div`
    background-color: #0484fc;
    padding: 0.3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  FooterContent: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    color: white;
  `,

  FooterCopywright: styled.div`
    font-size: 1em;
    color: white;
  `,

  FooterIcons: styled.div`
    display: flex;
    align-items: center; /* ✅ 아이콘을 수직 가운데 정렬 */
    gap: 10px;

    a {
      display: flex; /* ✅ 아이콘 내부 요소를 정렬 */
      align-items: center;
      color: white;
      font-size: 1.2em;
      transition: color 0.3s ease;
    }

    svg {
      vertical-align: middle; /* ✅ 아이콘이 텍스트와 같은 라인에 오도록 조정 */
    }
  `,
};

export default Footer;
