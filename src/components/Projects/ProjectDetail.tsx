import React, { useState, useRef } from "react";
import styled from "styled-components";
import { CgWebsite } from "react-icons/cg";
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
import {
  FiExternalLink,
  FiClock,
  FiUsers,
  FiLayers,
  FiMail,
  FiCheckCircle,
  FiArrowRight,
  FiCode,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export interface LinkItem {
  type: "website" | "play-store" | "app-store" | "github" | string;
  href: string;
  label?: string;
}

export interface TeamMember {
  name: string;
  photoUrl: string;
  role: string;
  detailedRole: string;
  link?: string;
  email?: string;
  activityPeriod: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface ArchitectureHighlight {
  category: string;
  items: string[];
}

export interface ArchitectureInfo {
  diagramUrl?: string;
  description: string;
  highlights?: ArchitectureHighlight[];
}

export interface ProjectDetailProps {
  projectNumber?: string;
  category?: string;
  serviceName: string;
  tagline?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  techStack?: string[];
  links: LinkItem[];
  teamMembers: TeamMember[];
  timeline: TimelineEvent[];
  architecture?: ArchitectureInfo;
  onNextSection?: () => void;
  nextSectionName?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  projectNumber = "01",
  category = "Service",
  serviceName,
  tagline,
  description,
  imageSrc,
  imageAlt,
  techStack = [],
  links = [],
  teamMembers = [],
  timeline = [],
  architecture,
  onNextSection,
  nextSectionName,
}) => {
  const [activeTab, setActiveTab] = useState<"timeline" | "members" | "arch">(
    "timeline",
  );

  // 슬라이드 스크롤 제어를 위한 Refs
  const timelineRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);

  const handleSlide = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right",
  ) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // '서비스명: ' 또는 '내용: ' 접두사 자동 정제
  const cleanServiceName = serviceName.replace(/^서비스명:\s*/i, "");
  const cleanDescription = description.replace(/^내용:\s*/i, "");

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "website":
        return <CgWebsite />;
      case "play-store":
        return <IoLogoGooglePlaystore />;
      case "app-store":
        return <IoLogoAppleAppstore />;
      default:
        return <FiExternalLink />;
    }
  };

  const getLinkName = (link: LinkItem) => {
    if (link.label) return link.label;
    switch (link.type) {
      case "website":
        return "웹사이트 바로가기";
      case "play-store":
        return "Google Play";
      case "app-store":
        return "App Store";
      default:
        return "서비스 링크";
    }
  };

  return (
    <S.SectionContainer>
      <S.FullWidthWrapper>
        {/* ================= 상단: 브랜딩 헤더 (로고 + 제목 + 설명 + CTA) ================= */}
        <S.HeroHeaderCard>
          <S.HeaderMetaRow>
            <S.MetaLeft>
              <S.ProjectNumberBadge>{projectNumber}</S.ProjectNumberBadge>
              <S.CategoryBadge>{category}</S.CategoryBadge>
              <S.LiveIndicator>
                <S.PulseDot />
                <span>운영 중</span>
              </S.LiveIndicator>
            </S.MetaLeft>
          </S.HeaderMetaRow>

          {/* 타이틀 및 로고 아이콘 */}
          <S.TitleAndLogoRow>
            {/* 컴팩트 프로젝트 로고 아이콘 */}
            <S.ProjectLogoWrapper>
              <S.ProjectLogoImg
                src={imageSrc}
                alt={imageAlt}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <S.ProjectLogoFallback>
                {cleanServiceName.slice(0, 2)}
              </S.ProjectLogoFallback>
            </S.ProjectLogoWrapper>

            <S.TitleTexts>
              <S.ProjectTitle>{cleanServiceName}</S.ProjectTitle>
              {tagline && <S.ProjectTagline>{tagline}</S.ProjectTagline>}
            </S.TitleTexts>
          </S.TitleAndLogoRow>

          {/* 프로젝트 상세 설명 */}
          <S.DescriptionText>{cleanDescription}</S.DescriptionText>

          {/* 하단 기술 스택 및 액션 버튼 바 */}
          <S.BottomBar>
            {links.length > 0 && (
              <S.ActionGroup>
                {links.map((link, index) => (
                  <S.ActionButton
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    $primary={index === 0}
                  >
                    <span className="icon">{getLinkIcon(link.type)}</span>
                    <span className="label">{getLinkName(link)}</span>
                    <FiArrowRight className="arrow" />
                  </S.ActionButton>
                ))}
              </S.ActionGroup>
            )}
          </S.BottomBar>
        </S.HeroHeaderCard>

        {/* ================= 하단: 크기 완전 고정 인터랙티브 탭 & 슬라이더 ================= */}
        <S.FixedTabContainer>
          <S.TabHeaderBar>
            <S.TabButtonsGroup>
              <S.TabNavButton
                $active={activeTab === "timeline"}
                onClick={() => setActiveTab("timeline")}
              >
                <FiClock />
                <span>타임라인</span>
                <S.TabCountBadge>{timeline.length}</S.TabCountBadge>
              </S.TabNavButton>

              <S.TabNavButton
                $active={activeTab === "members"}
                onClick={() => setActiveTab("members")}
              >
                <FiUsers />
                <span>참여 인원</span>
                <S.TabCountBadge>{teamMembers.length}</S.TabCountBadge>
              </S.TabNavButton>

              <S.TabNavButton
                $active={activeTab === "arch"}
                onClick={() => setActiveTab("arch")}
              >
                <FiLayers />
                <span>시스템 구조</span>
              </S.TabNavButton>
            </S.TabButtonsGroup>

            {/* 슬라이드 좌우 조작 버튼 (데스크톱 전용, 모바일은 직접 터치 스와이프) */}
            <S.SlideNavControls>
              <S.SlideCtrlBtn
                onClick={() =>
                  handleSlide(
                    activeTab === "timeline"
                      ? timelineRef
                      : activeTab === "members"
                        ? membersRef
                        : archRef,
                    "left",
                  )
                }
                title="왼쪽으로 슬라이드"
              >
                <FiChevronLeft />
              </S.SlideCtrlBtn>
              <S.SlideCtrlBtn
                onClick={() =>
                  handleSlide(
                    activeTab === "timeline"
                      ? timelineRef
                      : activeTab === "members"
                        ? membersRef
                        : archRef,
                    "right",
                  )
                }
                title="오른쪽으로 슬라이드"
              >
                <FiChevronRight />
              </S.SlideCtrlBtn>
            </S.SlideNavControls>
          </S.TabHeaderBar>

          {/* 탭 콘텐츠 영역 */}
          <S.FixedTabContentArea>
            {/* 1. 타임라인 탭 */}
            {activeTab === "timeline" && (
              <S.SliderViewport ref={timelineRef}>
                <S.TimelineTrack>
                  {timeline.map((event, idx) => (
                    <S.TimelineSlideCard key={idx}>
                      <S.TimelineCardTop>
                        <S.TimelineDateBadge>{event.date}</S.TimelineDateBadge>
                        <S.TimelineStepBadge>
                          STEP {idx + 1}
                        </S.TimelineStepBadge>
                      </S.TimelineCardTop>
                      <S.TimelineCardTitle>{event.title}</S.TimelineCardTitle>
                      <S.TimelineCardDesc>
                        {event.description}
                      </S.TimelineCardDesc>
                    </S.TimelineSlideCard>
                  ))}
                </S.TimelineTrack>
              </S.SliderViewport>
            )}

            {/* 2. 참여 인원 탭 */}
            {activeTab === "members" && (
              <S.SliderViewport ref={membersRef}>
                <S.MembersTrack>
                  {teamMembers.map((member, idx) => (
                    <S.MemberSlideCard key={idx}>
                      <S.MemberCardHeader>
                        <S.MemberAvatarWrap>
                          <S.MemberAvatarImg
                            src={member.photoUrl}
                            alt={member.name}
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = "none";
                            }}
                          />
                          <S.MemberAvatarFallback>
                            {member.name.slice(0, 1)}
                          </S.MemberAvatarFallback>
                        </S.MemberAvatarWrap>
                        <S.MemberBasicInfo>
                          <S.MemberName>{member.name}</S.MemberName>
                          <S.MemberRoleBadge>{member.role}</S.MemberRoleBadge>
                        </S.MemberBasicInfo>
                      </S.MemberCardHeader>

                      <S.MemberDetailedRole>
                        {member.detailedRole}
                      </S.MemberDetailedRole>

                      <S.MemberPeriodText>
                        <FiClock size={12} /> {member.activityPeriod}
                      </S.MemberPeriodText>

                      <S.MemberContactRow>
                        {member.email && (
                          <S.MemberContactChip
                            href={`mailto:${member.email}`}
                            title={member.email}
                          >
                            <FiMail size={12} /> {member.email}
                          </S.MemberContactChip>
                        )}
                        {member.link && member.link !== "#" && (
                          <S.MemberContactChip
                            href={member.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiExternalLink size={12} /> 포트폴리오
                          </S.MemberContactChip>
                        )}
                      </S.MemberContactRow>
                    </S.MemberSlideCard>
                  ))}
                </S.MembersTrack>
              </S.SliderViewport>
            )}

            {/* 3. 시스템 아키텍처 탭 */}
            {activeTab === "arch" && (
              <S.ArchContentWrapper ref={archRef}>
                {architecture ? (
                  <S.ArchInnerGrid>
                    <S.ArchMainCard>
                      <S.ArchCardTitle>
                        <FiLayers color="#0484fc" />
                        <span>아키텍처 설계 개요</span>
                      </S.ArchCardTitle>
                      <S.ArchDescriptionText>
                        {architecture.description}
                      </S.ArchDescriptionText>
                    </S.ArchMainCard>

                    {architecture.highlights && (
                      <S.ArchHighlightsTrack>
                        {architecture.highlights.map((item, idx) => (
                          <S.ArchHighlightSlideCard key={idx}>
                            <S.ArchCategoryTitle>
                              <FiCheckCircle color="#0484fc" />
                              <span>{item.category}</span>
                            </S.ArchCategoryTitle>
                            <S.ArchUl>
                              {item.items.map((subItem, sIdx) => (
                                <li key={sIdx}>{subItem}</li>
                              ))}
                            </S.ArchUl>
                          </S.ArchHighlightSlideCard>
                        ))}
                      </S.ArchHighlightsTrack>
                    )}
                  </S.ArchInnerGrid>
                ) : (
                  <S.ArchDefaultBox>
                    <FiLayers size={30} color="#0484fc" />
                    <div>
                      <h4>모듈화된 컴포넌트 기반 아키텍처</h4>
                      <p>
                        반응성 극대화와 높은 접근성을 고려하여 모듈화된
                        프론트엔드와 안정적인 백엔드 시스템으로 구축되었습니다.
                      </p>
                    </div>
                  </S.ArchDefaultBox>
                )}
              </S.ArchContentWrapper>
            )}
          </S.FixedTabContentArea>
        </S.FixedTabContainer>
      </S.FullWidthWrapper>
    </S.SectionContainer>
  );
};

export default ProjectDetail;

/* ================== Styled Components ================== */
const S = {
  SectionContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 32px 40px 32px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
      padding: 16px 20px 30px 20px;
    }

    @media (max-width: 768px) {
      padding: 12px 14px 24px 14px;
      min-height: auto;
    }
  `,

  FullWidthWrapper: styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      gap: 16px;
    }
  `,

  /* ============ 상단 헤더 카드 ============ */
  HeroHeaderCard: styled.div`
    width: 100%;
    background: #ffffff;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    padding: 32px 36px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    text-align: left;
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 20px 16px;
      gap: 14px;
      border-radius: 16px;
    }
  `,

  HeaderMetaRow: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 600px) {
      gap: 8px;
    }
  `,

  MetaLeft: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  `,

  ProjectNumberBadge: styled.span`
    font-family: "HakgyoansimDunggeunmisoTTF-R", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    color: #0484fc;
    background: rgba(4, 132, 252, 0.1);
    padding: 3px 10px;
    border-radius: 14px;
    letter-spacing: 0.5px;
    border: 1px solid rgba(4, 132, 252, 0.2);

    @media (max-width: 600px) {
      font-size: 0.85rem;
      padding: 2px 8px;
    }
  `,

  CategoryBadge: styled.span`
    font-size: 0.78rem;
    font-weight: 700;
    color: #475569;
    background: #f1f5f9;
    padding: 3px 10px;
    border-radius: 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;

    @media (max-width: 600px) {
      font-size: 0.72rem;
      padding: 2px 8px;
    }
  `,

  LiveIndicator: styled.div`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
    padding: 3px 8px;
    border-radius: 14px;

    @media (max-width: 600px) {
      font-size: 0.7rem;
      padding: 2px 7px;
    }
  `,

  PulseDot: styled.span`
    width: 6px;
    height: 6px;
    background-color: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    animation: pulse 1.8s infinite;

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      }
      70% {
        box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
      }
    }
  `,

  QuickStatsRow: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;

    @media (max-width: 600px) {
      gap: 6px;
    }
  `,

  StatBadge: styled.div`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.78rem;
    font-weight: 600;
    color: #64748b;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 3px 10px;
    border-radius: 10px;

    .stat-icon {
      color: #0484fc;
    }

    @media (max-width: 600px) {
      font-size: 0.72rem;
      padding: 2px 8px;
    }
  `,

  /* 타이틀과 로고 한 줄 배치 */
  TitleAndLogoRow: styled.div`
    display: flex;
    align-items: center;
    gap: 18px;

    @media (max-width: 600px) {
      gap: 12px;
    }
  `,

  ProjectLogoWrapper: styled.div`
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: #f8fafc;
    border: 1.5px solid #e2e8f0;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 48px;
      height: 48px;
      border-radius: 12px;
    }
  `,

  ProjectLogoImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  ProjectLogoFallback: styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #0484fc 0%, #0052cc 100%);
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `,

  TitleTexts: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  `,

  ProjectTitle: styled.h1`
    font-size: 2.3rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0;
    line-height: 1.2;
    letter-spacing: -0.5px;
    word-break: keep-all;

    @media (max-width: 768px) {
      font-size: 1.45rem;
    }
  `,

  ProjectTagline: styled.h2`
    font-size: 1.05rem;
    font-weight: 600;
    color: #0484fc;
    margin: 0;
    line-height: 1.35;
    word-break: keep-all;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  `,

  DescriptionText: styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: #475569;
    margin: 0;
    word-break: keep-all;

    @media (max-width: 768px) {
      font-size: 0.88rem;
      line-height: 1.6;
    }
  `,

  BottomBar: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    padding-top: 14px;
    border-top: 1px solid #f1f5f9;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      gap: 14px;
      padding-top: 12px;
    }
  `,

  TechStackGroup: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 6px;
    }
  `,

  TechLabel: styled.div`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 0.74rem;
      width: 100%;
      margin-bottom: 2px;
    }
  `,

  TechBadgeList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  `,

  TechBadge: styled.span`
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    color: #334155;
    font-size: 0.78rem;
    font-weight: 600;
    padding: 3px 9px;
    border-radius: 7px;
    transition: all 0.2s ease;

    &:hover {
      border-color: #0484fc;
      color: #0484fc;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      font-size: 0.72rem;
      padding: 3px 7px;
    }
  `,

  ActionGroup: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `,

  ActionButton: styled.a<{ $primary?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 0.92rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;

    background: ${(props) =>
      props.$primary
        ? "linear-gradient(135deg, #0484fc 0%, #0052cc 100%)"
        : "#ffffff"};
    color: ${(props) => (props.$primary ? "#ffffff" : "#1e293b")};
    border: 1px solid ${(props) => (props.$primary ? "transparent" : "#cbd5e1")};
    box-shadow: ${(props) =>
      props.$primary
        ? "0 4px 14px rgba(4, 132, 252, 0.25)"
        : "0 1px 3px rgba(0, 0, 0, 0.05)"};

    .icon {
      font-size: 1.15rem;
      display: flex;
      align-items: center;
    }

    .arrow {
      font-size: 1rem;
      transition: transform 0.2s ease;
    }

    &:hover {
      color: ${(props) => (props.$primary ? "#ffffff" : "#0484fc")};
      border-color: ${(props) => (props.$primary ? "transparent" : "#0484fc")};
      transform: translateY(-2px);
      box-shadow: ${(props) =>
        props.$primary
          ? "0 6px 18px rgba(4, 132, 252, 0.35)"
          : "0 4px 12px rgba(4, 132, 252, 0.12)"};

      .arrow {
        transform: translateX(3px);
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
      padding: 11px 16px;
      font-size: 0.88rem;
    }
  `,

  /* ============ 크기 완전 고정 탭 패널 ============ */
  FixedTabContainer: styled.div`
    width: 100%;
    background: #ffffff;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media (max-width: 768px) {
      border-radius: 16px;
    }
  `,

  TabHeaderBar: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
    padding: 10px 20px;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 768px) {
      padding: 6px 8px;
      gap: 6px;
    }
  `,

  TabButtonsGroup: styled.div`
    display: flex;
    gap: 8px;

    @media (max-width: 768px) {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
    }
  `,

  TabNavButton: styled.button<{ $active: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: ${(props) => (props.$active ? "#ffffff" : "transparent")};
    color: ${(props) => (props.$active ? "#0484fc" : "#64748b")};
    box-shadow: ${(props) =>
      props.$active ? "0 2px 8px rgba(0, 0, 0, 0.06)" : "none"};

    &:hover {
      color: #0484fc;
      background: ${(props) =>
        props.$active ? "#ffffff" : "rgba(255, 255, 255, 0.7)"};
    }

    @media (max-width: 768px) {
      justify-content: center;
      padding: 8px 4px;
      font-size: 0.78rem;
      gap: 4px;
      border-radius: 8px;
    }
  `,

  TabCountBadge: styled.span`
    background: rgba(4, 132, 252, 0.1);
    color: #0484fc;
    font-size: 0.75rem;
    padding: 2px 7px;
    border-radius: 10px;

    @media (max-width: 768px) {
      font-size: 0.68rem;
      padding: 1px 5px;
    }
  `,

  SlideNavControls: styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    @media (max-width: 768px) {
      display: none;
    }
  `,

  SlideCtrlBtn: styled.button`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: #ffffff;
    color: #475569;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #0484fc;
      border-color: #0484fc;
      background: rgba(4, 132, 252, 0.06);
    }
  `,

  FixedTabContentArea: styled.div`
    width: 100%;
    padding: 24px;
    min-height: 240px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      padding: 16px 12px;
      min-height: auto;
    }
  `,

  /* 슬라이더 뷰포트 (가로 스크롤 & 스냅, 스크롤바 숨김) */
  SliderViewport: styled.div`
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 8px;
    box-sizing: border-box;
    -ms-overflow-style: none !important;
    scrollbar-width: none !important;

    &::-webkit-scrollbar {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
    }

    @media (max-width: 768px) {
      padding-bottom: 4px;
    }
  `,

  /* 1. 타임라인 트랙 & 카드 */
  TimelineTrack: styled.div`
    display: flex;
    gap: 16px;
    width: max-content;

    @media (max-width: 768px) {
      gap: 10px;
    }
  `,

  TimelineSlideCard: styled.div`
    width: 280px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 18px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-shrink: 0;
    scroll-snap-align: start;
    transition: all 0.2s ease;

    &:hover {
      border-color: #0484fc;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(4, 132, 252, 0.08);
    }

    @media (max-width: 768px) {
      width: 250px;
      max-width: 78vw;
      padding: 14px;
      border-radius: 12px;
    }
  `,

  TimelineCardTop: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  TimelineDateBadge: styled.span`
    font-size: 0.78rem;
    font-weight: 700;
    color: #0484fc;
    background: rgba(4, 132, 252, 0.1);
    padding: 3px 8px;
    border-radius: 6px;

    @media (max-width: 768px) {
      font-size: 0.72rem;
      padding: 2px 6px;
    }
  `,

  TimelineStepBadge: styled.span`
    font-size: 0.72rem;
    font-weight: 700;
    color: #94a3b8;

    @media (max-width: 768px) {
      font-size: 0.68rem;
    }
  `,

  TimelineCardTitle: styled.h4`
    font-size: 1rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: 0.92rem;
    }
  `,

  TimelineCardDesc: styled.p`
    font-size: 0.88rem;
    color: #64748b;
    margin: 0;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 0.8rem;
      line-height: 1.45;
    }
  `,

  /* 2. 참여 인원 트랙 & 카드 */
  MembersTrack: styled.div`
    display: flex;
    gap: 16px;
    width: max-content;

    @media (max-width: 768px) {
      gap: 10px;
    }
  `,

  MemberSlideCard: styled.div`
    width: 280px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 18px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
    scroll-snap-align: start;
    transition: all 0.2s ease;

    &:hover {
      border-color: #0484fc;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(4, 132, 252, 0.08);
    }

    @media (max-width: 768px) {
      width: 250px;
      max-width: 78vw;
      padding: 14px;
      gap: 8px;
      border-radius: 12px;
    }
  `,

  MemberCardHeader: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 768px) {
      gap: 10px;
    }
  `,

  MemberAvatarWrap: styled.div`
    position: relative;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    border: 2px solid #0484fc;

    @media (max-width: 768px) {
      width: 38px;
      height: 38px;
    }
  `,

  MemberAvatarImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  MemberAvatarFallback: styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #0484fc 0%, #0052cc 100%);
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  `,

  MemberBasicInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  `,

  MemberName: styled.h4`
    font-size: 1rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.92rem;
    }
  `,

  MemberRoleBadge: styled.span`
    font-size: 0.75rem;
    font-weight: 700;
    color: #0484fc;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  `,

  MemberDetailedRole: styled.p`
    font-size: 0.85rem;
    color: #475569;
    margin: 0;
    line-height: 1.4;

    @media (max-width: 768px) {
      font-size: 0.78rem;
      line-height: 1.35;
    }
  `,

  MemberPeriodText: styled.div`
    font-size: 0.75rem;
    color: #94a3b8;
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  `,

  MemberContactRow: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  `,

  MemberContactChip: styled.a`
    font-size: 0.75rem;
    color: #0484fc;
    background: rgba(4, 132, 252, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: all 0.2s ease;
    word-break: break-all;

    &:hover {
      background: rgba(4, 132, 252, 0.15);
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 0.7rem;
      padding: 2px 6px;
    }
  `,

  /* 3. 시스템 아키텍처 */
  ArchContentWrapper: styled.div`
    width: 100%;
    text-align: left;
  `,

  ArchInnerGrid: styled.div`
    display: grid;
    grid-template-columns: minmax(280px, 1fr) minmax(0, 2fr);
    gap: 20px;
    width: 100%;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 14px;
    }
  `,

  ArchMainCard: styled.div`
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 768px) {
      padding: 14px;
      border-radius: 12px;
    }
  `,

  ArchCardTitle: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    font-weight: 700;
    color: #0f172a;

    @media (max-width: 768px) {
      font-size: 0.88rem;
    }
  `,

  ArchDescriptionText: styled.p`
    font-size: 0.88rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.82rem;
      line-height: 1.5;
    }
  `,

  ArchHighlightsTrack: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  `,

  ArchHighlightSlideCard: styled.div`
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 768px) {
      padding: 14px;
      border-radius: 12px;
    }
  `,

  ArchCategoryTitle: styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.88rem;
    font-weight: 700;
    color: #0f172a;

    @media (max-width: 768px) {
      font-size: 0.82rem;
    }
  `,

  ArchUl: styled.ul`
    margin: 0;
    padding-left: 18px;
    font-size: 0.82rem;
    color: #64748b;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.78rem;
      line-height: 1.5;
    }
  `,

  ArchDefaultBox: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px;
    background: #f8fafc;
    border-radius: 14px;
    border: 1px solid #e2e8f0;

    h4 {
      font-size: 1rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 4px 0;
    }
    p {
      font-size: 0.88rem;
      color: #64748b;
      margin: 0;
    }

    @media (max-width: 768px) {
      padding: 14px;
      gap: 12px;
      h4 {
        font-size: 0.9rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  `,

  /* 다음 섹션 버튼 */
  NextSectionNavBtn: styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    align-self: center;
    background: transparent;
    border: none;
    color: #0484fc;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 20px;
    transition: all 0.2s ease;

    .next-arrow {
      transition: transform 0.2s ease;
    }

    &:hover {
      background: rgba(4, 132, 252, 0.08);
      .next-arrow {
        transform: translateX(4px);
      }
    }

    @media (max-width: 768px) {
      font-size: 0.88rem;
      padding: 6px 14px;
    }
  `,
};
