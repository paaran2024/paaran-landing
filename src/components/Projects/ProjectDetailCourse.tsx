import ProjectDetail, { ProjectDetailProps } from "./ProjectDetail";

interface ProjectDetailCourseProps {
  onNextSection?: () => void;
}

const courseData: Omit<ProjectDetailProps, "onNextSection" | "nextSectionName"> = {
  projectNumber: "02",
  category: "Web & Mobile App",
  serviceName: "파아란 코스",
  tagline: "라이더를 위한 GPX 코스 공유 & 스마트 트래킹 서비스",
  description:
    "전국의 자전거 및 아웃도어 라이더들이 GPX 코스 경로를 손쉽게 공유하고 탐색할 수 있는 올인원 플랫폼입니다. 고도 프로필, 구간 분석, 네비게이션 연동 기능을 제공하여 안전하고 즐거운 라이딩 경험을 선사합니다.",
  imageSrc: "/Project/course.png",
  imageAlt: "파아란 코스 프로젝트 대표 이미지",
  techStack: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "GPX Parser",
    "Leaflet / Mapbox",
    "PWA / TWA",
    "Google Play Store",
  ],
  links: [
    {
      type: "website",
      href: "https://course.paaran.com/",
      label: "웹 서비스 접속",
    },
    {
      type: "play-store",
      href: "https://play.google.com/store/apps/details?id=com.paaran.course.twa",
      label: "Google Play 다운로드",
    },
  ],
  teamMembers: [
    {
      name: "홍길동",
      photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      role: "Project Manager",
      detailedRole: "프로젝트 총괄, 유저 리서치 및 핵심 기능 기획",
      link: "#",
      email: "pm@paaran.com",
      activityPeriod: "2024.01 - 2024.06",
    },
    {
      name: "김철수",
      photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
      role: "Frontend Developer",
      detailedRole: "React 기반 맵 시각화 및 GPX 고도 차트 UI 구현",
      link: "#",
      email: "fe@paaran.com",
      activityPeriod: "2024.01 - 2024.06",
    },
    {
      name: "이영희",
      photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      role: "Backend Developer",
      detailedRole: "대용량 GPX 파일 파싱 및 코스 검색 API 서버 구축",
      link: "#",
      email: "be@paaran.com",
      activityPeriod: "2024.01 - 2024.06",
    },
  ],
  timeline: [
    {
      date: "2024.01",
      title: "기획 및 아키텍처 수립",
      description: "GPX 표준 스펙 분석, 지도 엔진 선정 및 시스템 설계 완료.",
    },
    {
      date: "2024.02 - 03",
      title: "코어 기능 및 파서 개발",
      description: "고성능 GPX 데이터 파서 및 경로 시각화 인터랙션 구현.",
    },
    {
      date: "2024.04 - 05",
      title: "알파 테스트 & TWA 패키징",
      description: "실제 라이더 대상 필드 테스트 및 안드로이드 TWA 앱 패키징.",
    },
    {
      date: "2024.06",
      title: "정식 서비스 및 스토어 런칭",
      description: "Google Play Store 출시 및 course.paaran.com 정식 런칭.",
    },
  ],
  architecture: {
    description:
      "대용량 지리 정보(GIS)와 고도 데이터를 효율적으로 렌더링하고 모바일 환경에서도 네이티브 앱 수준의 사용성을 제공하도록 설계되었습니다.",
    highlights: [
      {
        category: "Client & Map Engine",
        items: ["React & TypeScript SPA", "Leaflet 지도 엔진 & GPX 시각화", "PWA/TWA 모바일 앱 지원"],
      },
      {
        category: "Backend & Data",
        items: ["Node.js / Express API Server", "GPX XML 스트리밍 파서", "PostgreSQL / PostGIS 공간 쿼리"],
      },
    ],
  },
};

const ProjectDetailCourse: React.FC<ProjectDetailCourseProps> = ({ onNextSection }) => {
  return (
    <ProjectDetail
      {...courseData}
      onNextSection={onNextSection}
      nextSectionName="UOS 교통정보"
    />
  );
};

export default ProjectDetailCourse;
