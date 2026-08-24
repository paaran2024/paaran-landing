import { useState } from "react";
import styled from "styled-components";
import {
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiMail,
  FiArrowRight,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Home2() {
  const [copied, setCopied] = useState(false);

  const recruitRoles = [
    { title: "Frontend", desc: "React, TypeScript 기반 UI/UX 개발" },
    { title: "Backend", desc: "API 설계, 데이터베이스 및 클라우드 인프라" },
    {
      title: "UI/UX Design",
      desc: "Figma 기반 디자인 시스템 & 사용자 경험 설계",
    },
    {
      title: "Product / Marketing",
      desc: "유저 리서치, 서비스 기획 및 브랜딩",
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("paaran2024@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <S.SectionWrapper id="intro-detail">
      <S.ContentContainer>
        {/* ================= 상단: 팀 비전 & 철학 소개 ================= */}
        <S.HeaderArea data-aos="fade-up" data-aos-duration="1000">
          <S.CategoryBadge>ABOUT PAARAN</S.CategoryBadge>
          <S.MainHeading>
            우리는 왜 <S.HighlightText>파아란</S.HighlightText>을 만들었을까요?
          </S.MainHeading>
          <S.MainDescription>
            많은 프로젝트가 특정 기능 구현이나 내부 목표에만 집중한 채, <br />
            실제 사용자 환경에서의 운영까지 이어지지 못하는 경우가 많습니다.
            <br />
            하지만 <strong className="important">
              파아란은 다릅니다.
            </strong>{" "}
            우리는 단순한 개발 경험을 넘어, <br />
            <strong className="important">
              시장 조사부터 기획, 운영, 피드백 반영까지
            </strong>{" "}
            이어지는 긴 호흡의 프로젝트를 목표로 합니다.
          </S.MainDescription>
        </S.HeaderArea>

        {/* ================= 3대 핵심 가치 카드 ================= */}
        <S.VisionGrid
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          <S.VisionCard>
            <S.VisionIconWrap className="icon-wrap">
              <FiTarget />
            </S.VisionIconWrap>
            <S.VisionTitle>실전 프로덕트 지향</S.VisionTitle>
            <S.VisionText>
              단순 토이 프로젝트를 넘어, 실제 사용자가 이용하는 프로덕션을
              운영하며 트래픽과 예외 상황을 마주하고 해결합니다.
            </S.VisionText>
          </S.VisionCard>

          <S.VisionCard>
            <S.VisionIconWrap className="icon-wrap">
              <FiTrendingUp />
            </S.VisionIconWrap>
            <S.VisionTitle>지속적인 질문과 성장</S.VisionTitle>
            <S.VisionText>
              "유저에게 정말 유용한 기능인가?", "지속 가능한 구조인가?" 끊임없이
              질문하며 데이터와 QA를 바탕으로 더 나은 완성도를 만듭니다.
            </S.VisionText>
          </S.VisionCard>

          <S.VisionCard>
            <S.VisionIconWrap className="icon-wrap">
              <FiUsers />
            </S.VisionIconWrap>
            <S.VisionTitle>원팀(One Team) 협업</S.VisionTitle>
            <S.VisionText>
              기획, 디자인, 개발, 마케팅이 수평적으로 소통하며 하나의 완성도
              높은 서비스를 만듭니다.
            </S.VisionText>
          </S.VisionCard>
        </S.VisionGrid>

        {/* ================= 팀원 모집 & 컨택 배너 ================= */}
        <S.RecruitBanner
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <S.RecruitLeft>
            <S.RecruitBadge>RECRUITMENT</S.RecruitBadge>
            <S.RecruitTitle>
              파아란과 함께 새로운 물결을 만들어요
            </S.RecruitTitle>

            <S.RoleChipsGrid>
              {recruitRoles.map((role, idx) => (
                <S.RoleChip key={idx}>
                  <span className="role-title">{role.title}</span>
                  <span className="role-desc">{role.desc}</span>
                </S.RoleChip>
              ))}
            </S.RoleChipsGrid>
          </S.RecruitLeft>

          <S.RecruitRight>
            <S.ContactBox>
              <S.ContactHeader>
                <S.ContactIconWrap>
                  <FiMail />
                </S.ContactIconWrap>
                <S.ContactTitleGroup>
                  <S.ContactTitle>지원 및 협업 문의</S.ContactTitle>
                  <S.ContactDesc>
                    팀 합류 제안 및 프로젝트 협업은 언제든 환영합니다.
                  </S.ContactDesc>
                </S.ContactTitleGroup>
              </S.ContactHeader>

              <S.EmailBox>
                <S.EmailRow>
                  <span className="email-addr">paaran2024@gmail.com</span>
                  <S.CopyBtn
                    type="button"
                    onClick={handleCopyEmail}
                    title="이메일 복사"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="check-icon" size={13} />
                        <span>복사됨</span>
                      </>
                    ) : (
                      <>
                        <FiCopy size={13} />
                        <span>복사</span>
                      </>
                    )}
                  </S.CopyBtn>
                </S.EmailRow>
              </S.EmailBox>

              <S.MailToBtn href="mailto:paaran2024@gmail.com">
                <FiMail size={15} />
                <span>이메일 바로 보내기</span>
              </S.MailToBtn>
            </S.ContactBox>
          </S.RecruitRight>
        </S.RecruitBanner>

        {/* 하단 프로젝트 보러가기 퀵 네비 */}
        <S.ExploreProjectsRow data-aos="fade-up" data-aos-duration="1000">
          <S.ProjectsLink as={Link} to="/project">
            <span>파아란의 프로젝트 구경하기</span>
            <FiArrowRight className="link-arrow" />
          </S.ProjectsLink>
        </S.ExploreProjectsRow>
      </S.ContentContainer>
    </S.SectionWrapper>
  );
}

export default Home2;

/* ================== Styled Components ================== */
const S = {
  SectionWrapper: styled.section`
    width: 100%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 24px 80px 24px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 40px 16px 60px 16px;
    }
  `,

  ContentContainer: styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
    box-sizing: border-box;
  `,

  /* 상단 헤더 영역 */
  HeaderArea: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 14px;
    max-width: 820px;
  `,

  CategoryBadge: styled.span`
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: #0484fc;
    background: rgba(4, 132, 252, 0.1);
    padding: 6px 16px;
    border-radius: 20px;
    border: 1px solid rgba(4, 132, 252, 0.2);
  `,

  MainHeading: styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.3;
    margin: 0;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  `,

  HighlightText: styled.span`
    color: #0484fc;
    background: linear-gradient(135deg, #0484fc 0%, #0052cc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,

  MainDescription: styled.p`
    font-size: 1.05rem;
    line-height: 1.8;
    color: #475569;
    margin: 0;
    word-break: keep-all;

    strong,
    .important {
      color: #0f172a;
      font-weight: 700;
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  `,

  /* 3대 핵심 비전 카드 그리드 */
  VisionGrid: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  `,

  VisionCard: styled.div`
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 30px 24px;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 14px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-6px);
      border-color: #0484fc;
      box-shadow:
        0 16px 32px rgba(4, 132, 252, 0.1),
        0 4px 12px rgba(0, 0, 0, 0.04);

      .icon-wrap {
        background: linear-gradient(135deg, #0484fc 0%, #0052cc 100%);
        color: #ffffff;
        transform: scale(1.06);
      }
    }
  `,

  VisionIconWrap: styled.div`
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(4, 132, 252, 0.1);
    color: #0484fc;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  `,

  VisionTitle: styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  `,

  VisionText: styled.p`
    font-size: 0.93rem;
    line-height: 1.68;
    color: #64748b;
    margin: 0;
    flex-grow: 1;
    word-break: keep-all;
  `,

  /* 리크루팅 & 컨택 배너 */
  RecruitBanner: styled.div`
    width: 100%;
    max-width: 1120px;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f7ff 100%);
    border: 1px solid rgba(4, 132, 252, 0.16);
    border-radius: 22px;
    padding: 32px 36px;
    display: grid;
    grid-template-columns: 1.3fr minmax(290px, 350px);
    gap: 32px;
    align-items: center;
    box-shadow: 0 10px 30px rgba(4, 132, 252, 0.05);
    box-sizing: border-box;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      padding: 24px 20px;
      gap: 24px;
    }
  `,

  RecruitLeft: styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 10px;
  `,

  RecruitBadge: styled.span`
    display: inline-block;
    align-self: flex-start;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: #0484fc;
    background: #ffffff;
    padding: 4px 12px;
    border-radius: 12px;
    border: 1px solid rgba(4, 132, 252, 0.2);
  `,

  RecruitTitle: styled.h3`
    font-size: 1.55rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0;
    letter-spacing: -0.3px;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  `,

  RecruitSubtitle: styled.p`
    font-size: 0.92rem;
    color: #475569;
    margin: 0;
    line-height: 1.55;
    word-break: keep-all;
  `,

  RoleChipsGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-top: 6px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  `,

  RoleChip: styled.div`
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: rgba(4, 132, 252, 0.35);
    }

    .role-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: #0f172a;
    }

    .role-desc {
      font-size: 0.74rem;
      color: #64748b;
    }
  `,

  RecruitRight: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,

  ContactBox: styled.div`
    width: 100%;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    box-sizing: border-box;
    transition: all 0.25s ease;

    &:hover {
      border-color: rgba(4, 132, 252, 0.35);
      box-shadow: 0 8px 22px rgba(4, 132, 252, 0.08);
    }
  `,

  ContactHeader: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: left;
  `,

  ContactIconWrap: styled.div`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(4, 132, 252, 0.1);
    color: #0484fc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
  `,

  ContactTitleGroup: styled.div`
    display: flex;
    flex-direction: column;
  `,

  ContactTitle: styled.h4`
    font-size: 0.98rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  `,

  ContactDesc: styled.p`
    font-size: 0.76rem;
    color: #64748b;
    margin: 1px 0 0 0;
    line-height: 1.35;
  `,

  EmailBox: styled.div`
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    text-align: left;

    .email-label {
      font-size: 0.66rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #94a3b8;
    }
  `,

  EmailRow: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    .email-addr {
      font-size: 0.86rem;
      font-weight: 700;
      color: #0484fc;
      letter-spacing: -0.2px;
      word-break: break-all;
    }
  `,

  CopyBtn: styled.button`
    background: #ffffff;
    border: 1px solid #cbd5e1;
    color: #475569;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.2s ease;

    &:hover {
      background: #f1f5f9;
      color: #0f172a;
      border-color: #94a3b8;
    }

    .check-icon {
      color: #10b981;
    }
  `,

  MailToBtn: styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    background: linear-gradient(135deg, #0484fc 0%, #0052cc 100%);
    color: #ffffff;
    font-size: 0.86rem;
    font-weight: 700;
    padding: 9px 16px;
    border-radius: 10px;
    text-decoration: none;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(4, 132, 252, 0.25);

    &:hover {
      color: #ffffff;
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(4, 132, 252, 0.35);
    }
  `,

  ExploreProjectsRow: styled.div`
    display: flex;
    justify-content: center;
  `,

  ProjectsLink: styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    font-weight: 700;
    color: #0484fc;
    text-decoration: none;
    padding: 11px 22px;
    border-radius: 30px;
    background: rgba(4, 132, 252, 0.08);
    border: 1px solid rgba(4, 132, 252, 0.2);
    transition: all 0.25s ease;

    .link-arrow {
      transition: transform 0.2s ease;
    }

    &:hover {
      background: #0484fc;
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(4, 132, 252, 0.25);

      .link-arrow {
        transform: translateX(4px);
      }
    }
  `,
};
