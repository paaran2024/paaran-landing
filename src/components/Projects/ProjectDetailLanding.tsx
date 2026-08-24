import ProjectDetail, { ProjectDetailProps } from "./ProjectDetail";

interface ProjectDetailLandingProps {
  onNextSection?: () => void;
}

const landingData: Omit<ProjectDetailProps, "onNextSection" | "nextSectionName"> = {
  projectNumber: "01",
  category: "Official Website",
  serviceName: "파아란 랜딩페이지",
  tagline: "시대를 변화시킬 새로운 물결, 파아란 공식 플랫폼",
  description:
    "파아란 팀의 비전과 주요 프로덕트 생태계를 대중에게 알리는 공식 랜딩페이지입니다. 방문자들이 팀의 정체성과 활동, 진행 중인 프로젝트를 직관적이고 인터랙티브하게 경험할 수 있도록 설계되었습니다.",
  imageSrc: "/Project/landing.png",
  imageAlt: "파아란 랜딩페이지 프로젝트 대표 이미지",
  techStack: [
    "React 19",
    "TypeScript",
    "Vite",
    "Styled-Components",
    "Bootstrap 5",
    "AOS Animation",
  ],
  links: [
    {
      type: "website",
      href: "https://paaran.com/",
      label: "공식 웹사이트",
    },
  ],
  teamMembers: [
    {
      name: "김개발",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      role: "Frontend Developer",
      detailedRole: "랜딩페이지 UI/UX 및 모던 인터랙션 애니메이션 개발",
      link: "#",
      email: "dev@paaran.com",
      activityPeriod: "2023.11 - 2023.12",
    },
    {
      name: "이디자인",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      role: "UI/UX Designer",
      detailedRole: "브랜드 아이덴티티 및 전체 디자인 시스템 설계",
      link: "#",
      email: "design@paaran.com",
      activityPeriod: "2023.11 - 2023.12",
    },
  ],
  timeline: [
    {
      date: "2023.11",
      title: "기획 및 디자인 시스템 구축",
      description: "브랜드 컨셉 수립 및 Figma 기반의 고해상도 디자인 시안 완성.",
    },
    {
      date: "2023.12",
      title: "프론트엔드 구현 및 최적화",
      description: "반응형 인터랙션 및 성능 최적화 완료 후 paaran.com 정식 배포.",
    },
  ],
  architecture: {
    description:
      "SPA(Single Page Application) 구조 기반으로 빠른 렌더링 속도와 유려한 스크롤 애니메이션을 제공하며, 모듈화된 컴포넌트 구조로 유지보수성을 극대화했습니다.",
    highlights: [
      {
        category: "Frontend Stack",
        items: ["React 19 & TypeScript", "Vite 번들러 최적화", "Styled-Components 스타일링"],
      },
      {
        category: "Performance & UX",
        items: ["AOS 스크롤 인터랙션", "완전 반응형 뷰포트 레이아웃", "SEO & 메타데이터 최적화"],
      },
    ],
  },
};

const ProjectDetailLanding: React.FC<ProjectDetailLandingProps> = ({ onNextSection }) => {
  return (
    <ProjectDetail
      {...landingData}
      onNextSection={onNextSection}
      nextSectionName="파아란 코스"
    />
  );
};

export default ProjectDetailLanding;