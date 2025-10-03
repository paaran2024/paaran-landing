import React from "react";
import styled from "styled-components";
import { CgWebsite } from "react-icons/cg";
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";

// props 타입 정의
interface Link {
  type: "website" | "play-store" | "app-store";
  href: string;
}

interface TeamMember {
  name: string;
  photoUrl: string;
  role: string;
  detailedRole: string;
  link?: string;
  email?: string;
  activityPeriod: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface ProjectDetailProps {
  imageSrc: string;
  imageAlt: string;
  serviceName: string;
  description: string;
  links: Link[];
  teamMembers: TeamMember[];
  timeline: TimelineEvent[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  imageSrc,
  imageAlt,
  serviceName,
  description,
  links,
  teamMembers,
  timeline,
}) => {
  const [activeTab, setActiveTab] = React.useState("Time Line");
  const tabs = ["Time Line", "Contributor", "System Architecture"];

  const renderLinkIcon = (link: Link) => {
    switch (link.type) {
      case "website":
        return <CgWebsite />;
      case "play-store":
        return <IoLogoGooglePlaystore />;
      case "app-store":
        return <IoLogoAppleAppstore />;
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        {/* 상단 섹션: 이미지와 기본 정보 */}
        <S.TopSection>
          <S.ImageContainer>
            <S.ProjectImage src={imageSrc} alt={imageAlt} />
          </S.ImageContainer>
          <S.InfoContainer>
            <S.ServiceName>{serviceName}</S.ServiceName>
            <S.Description>{description}</S.Description>
            <S.MetaInfo>
              <S.IconLinkContainer>
                {links.map((link, index) => (
                  <S.IconLink
                    key={index}
                    href={link.href}
                    target="_blank"
                    aria-label={link.type}
                  >
                    {renderLinkIcon(link)}
                  </S.IconLink>
                ))}
              </S.IconLinkContainer>
            </S.MetaInfo>
          </S.InfoContainer>
        </S.TopSection>

        {/* 하단 섹션: 탭 메뉴와 상세 내용 */}
        <S.BottomSection>
          <S.SideNav>
            {tabs.map((tab) => (
              <S.NavItem
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </S.NavItem>
            ))}
          </S.SideNav>
          <S.MainContent>
            {activeTab === "Time Line" && (
              <>
                <S.ContentBlock>
                  <S.TimelineContainer>
                    {timeline.map((event, index) => (
                      <S.TimelineItem key={index}>
                        <S.TimelineDot />
                        <S.TimelineContent>
                          <S.TimelineDate>{event.date}</S.TimelineDate>
                          <S.TimelineTitle>{event.title}</S.TimelineTitle>
                          <S.TimelineDescription>
                            {event.description}
                          </S.TimelineDescription>
                        </S.TimelineContent>
                      </S.TimelineItem>
                    ))}
                  </S.TimelineContainer>
                </S.ContentBlock>
              </>
            )}
            {activeTab === "Contributor" && (
              <S.ContentBlock>
                <S.MemberCardGrid>
                  {teamMembers.map((member, index) => (
                    <S.MemberCard key={index}>
                      <S.MemberPhoto src={member.photoUrl} alt={member.name} />
                      <S.MemberName>{member.name}</S.MemberName>
                      <S.MemberRole>{member.role}</S.MemberRole>
                      <S.MemberDetails>
                        <p>{member.detailedRole}</p>
                        <p>
                          <strong>기간:</strong> {member.activityPeriod}
                        </p>
                        {member.email && (
                          <p>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${member.email}`}>
                              {member.email}
                            </a>
                          </p>
                        )}
                        {member.link && (
                          <p>
                            <strong>Link:</strong>{" "}
                            <a
                              href={member.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Portfolio
                            </a>
                          </p>
                        )}
                      </S.MemberDetails>
                    </S.MemberCard>
                  ))}
                </S.MemberCardGrid>
              </S.ContentBlock>
            )}
            {activeTab === "System Architecture" && (
              <S.ContentBlock>
                <p>시스템 아키텍처에 대한 설명이 여기에 표시됩니다.</p>
              </S.ContentBlock>
            )}
          </S.MainContent>
        </S.BottomSection>
      </S.Wrapper>
    </S.Container>
  );
};

export default ProjectDetail;

/* ================== styled-components for ProjectDetail.js ================== */
export const S = {
  // Color Palette
  Colors: {
    primary: "#0052cc", // A deeper, more professional blue
    text: "#212529", // Almost black for high contrast text
    textSecondary: "#6c757d", // Lighter grey for descriptions
    border: "#e9ecef", // A very light grey for borders
    background: "#f8f9fa", // A subtle off-white for backgrounds
    white: "#ffffff",
  },

  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 40px 20px;
    background-color: ${() => S.Colors.background};
  `,

  Wrapper: styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    background-color: ${() => S.Colors.white};
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid ${() => S.Colors.border};
  `,

  TopSection: styled.section`
    display: flex;
    padding: 40px;
    border-bottom: 1px solid ${() => S.Colors.border};
    flex-shrink: 0;
    @media (max-width: 900px) {
      flex-direction: column;
      padding: 25px;
    }
  `,

  ImageContainer: styled.div`
    flex: 1;
    max-width: 150px;
    margin-right: 40px;
    @media (max-width: 900px) {
      margin-right: 0;
      margin-bottom: 25px;
    }
  `,

  ProjectImage: styled.img`
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  `,

  InfoContainer: styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    text-align: left;
  `,

  ServiceName: styled.h1`
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 15px 0;
    color: ${() => S.Colors.text};
  `,

  Description: styled.p`
    font-size: 16px;
    line-height: 1.7;
    color: ${() => S.Colors.textSecondary};
    flex-grow: 1;
  `,

  MetaInfo: styled.div`
    margin-top: 25px;
  `,

  IconLinkContainer: styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
  `,

  IconLink: styled.a`
    font-size: 2.4rem;
    color: #adb5bd;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${() => S.Colors.primary};
      transform: scale(1.15);
    }
  `,

  Link: styled.a`
    color: ${() => S.Colors.primary};
    text-decoration: none;
    font-weight: 500;
    margin-right: 15px;
    &:hover {
      text-decoration: underline;
    }
  `,

  BottomSection: styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    background-color: ${() => S.Colors.background};
  `,

  SideNav: styled.nav`
    width: 100%;
    border-bottom: 1px solid ${() => S.Colors.border};
    background-color: ${() => S.Colors.white};
    display: flex;
    padding-left: 40px;
    flex-shrink: 0;
  `,

  NavItem: styled.div`
    padding: 16px 25px;
    font-size: 16px;
    font-weight: 600;
    color: ${() => S.Colors.textSecondary};
    cursor: pointer;
    margin-bottom: -1px;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${() => S.Colors.primary};
    }
    &.active {
      color: ${() => S.Colors.primary};
      border-bottom-color: ${() => S.Colors.primary};
    }
  `,

  MainContent: styled.main`
    flex: 1;
    padding: 40px;
    overflow-y: auto;
    background-color: ${() => S.Colors.white};
  `,

  ContentBlock: styled.div`
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  `,

  ContentTitle: styled.h2`
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 20px 0;
    padding-bottom: 15px;
    border-bottom: 1px solid ${() => S.Colors.border};
    color: ${() => S.Colors.text};
  `,

  // Timeline Styles
  TimelineContainer: styled.div`
    display: flex;
    overflow-x: auto;
    padding: 20px 10px;
    margin: 0 -40px;
    scrollbar-width: thin;
    scrollbar-color: ${() => S.Colors.primary} ${() => S.Colors.border};

    &::-webkit-scrollbar {
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${() => S.Colors.border};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${() => S.Colors.primary};
      border-radius: 4px;
    }
  `,

  TimelineItem: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 0 0 240px;
    padding: 0 15px;

    &::before {
      content: "";
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${() => S.Colors.border};
    }

    &:first-child::before {
      left: 50%;
      width: 50%;
    }

    &:last-child::before {
      width: 50%;
    }
  `,

  TimelineDot: styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${() => S.Colors.white};
    border: 3px solid ${() => S.Colors.primary};
    z-index: 1;
    transition: transform 0.2s ease-in-out;
    ${(p) => p.theme.parent}:hover & {
      transform: translateX(-50%) scale(1.1);
    }
  `,

  TimelineContent: styled.div`
    padding-top: 35px;
  `,

  TimelineDate: styled.div`
    font-size: 13px;
    color: ${() => S.Colors.textSecondary};
    margin-bottom: 8px;
    font-weight: 600;
  `,

  TimelineTitle: styled.h4`
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: ${() => S.Colors.text};
  `,

  TimelineDescription: styled.p`
    font-size: 14px;
    margin: 0;
    color: ${() => S.Colors.textSecondary};
  `,

  // Styles for Member Cards
  MemberCardGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 25px;
  `,

  MemberCard: styled.div`
    background: ${() => S.Colors.white};
    border: 1px solid ${() => S.Colors.border};
    border-radius: 12px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    }
  `,

  MemberPhoto: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 4px solid ${() => S.Colors.white};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  `,

  MemberName: styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: ${() => S.Colors.text};
  `,

  MemberRole: styled.p`
    font-size: 14px;
    color: ${() => S.Colors.primary};
    font-weight: 600;
    margin: 0 0 15px 0;
  `,

  MemberDetails: styled.div`
    font-size: 14px;
    color: ${() => S.Colors.textSecondary};
    line-height: 1.6;
    a {
      color: ${() => S.Colors.primary};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      margin: 4px 0;
    }
  `,
};
