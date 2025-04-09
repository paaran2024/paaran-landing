import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiFillGithub } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { RiCodeSSlashLine } from "react-icons/ri";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar expanded={expand} fixed="top" expand="md" as={S.Navbar}>
      <Container>
        <S.Brand as={Link} to="/">
          <S.Image src="/logo.svg" alt="Logo" />
          파아란 | PAARAN
        </S.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav as={S.Nav}>
            <S.NavItem>
              <S.NavLink as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> 소개
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink
                as={Link}
                to="/stack"
                onClick={() => updateExpanded(false)}
              >
                <GrTechnology style={{ marginBottom: "2px" }} /> 스택
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <RiCodeSSlashLine style={{ marginBottom: "2px" }} /> 프로젝트
              </S.NavLink>
            </S.NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const S = {
  Navbar: styled.nav`
    position: fixed !important;
    background-color: #0484fc;
    transition: all 0.3s ease-out 0s !important;
    padding: 0.3rem 2rem;
    z-index: 9999;

    @media (max-width: 767px) {
      padding: 0rem;
      font-size: 1.4rem !important;
      background-color: #0484fc !important;
    }
  `,
  Brand: styled.a`
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
    color: white !important;
    font-size: 24px;
    text-decoration: none; /* 밑줄 제거 */
  `,
  Image: styled.img`
    max-height: 30px;
    margin: 0; /* 여백을 없애서 정확히 중앙에 위치 */
  `,
  Nav: styled.nav`
    display: flex;
    justify-content: flex-end; /* 오른쪽 정렬 */
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
  `,

  NavItem: styled.div`
    position: relative;
    margin-left: 15px;

    @media (max-width: 767px) {
      padding: 0.7rem 1rem;
      margin: 0;
      font-size: 1.1rem;
    }
  `,

  NavLink: styled.a`
    color: white !important;
    font-weight: 400;
    padding: 0.8rem 1rem;
    text-decoration: none;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-out;

    &:after {
      content: "";
      position: absolute;
      display: block;
      height: 5px;
      width: 0;
      border-radius: 16px;
      background: #76ff03;
      bottom: 1px;
      left: 0;
      z-index: -1;
      transition: all 0.3s ease-out;
    }

    &:hover:after {
      width: 100%;
    }

    @media (max-width: 767px) {
      padding: 0.7rem 1rem;
    }
  `,

  ButtonLink: styled.a`
    color: white;
    font-weight: 400;
    font-size: 1em !important;
    padding: 0.25rem 1.1rem;
    text-decoration: none;
    background-color: transparent;
    background-color: rgba(118, 255, 3, 0.525) !important;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    vertical-align: middle !important;
    text-align: center !important;

    &:hover {
      transform: translateY(-2px) !important;
      border-color: rgba(118, 255, 3, 0.369) !important;
      background-color: rgba(118, 255, 3, 0.369) !important;
    }
  `,
};

export default NavBar;
