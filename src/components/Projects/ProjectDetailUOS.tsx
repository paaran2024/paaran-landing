import ProjectDetail, { ProjectDetailProps } from "./ProjectDetail";

interface ProjectDetailUOSProps {
  onNextSection?: () => void;
}

const uosData: Omit<ProjectDetailProps, "onNextSection" | "nextSectionName"> = {
  projectNumber: "03",
  category: "Campus Utility",
  serviceName: "UOS 교통정보",
  tagline: "서울시립대 구성원을 위한 실시간 스마트 교통 알리미",
  description:
    "서울시립대학교 주변의 실시간 버스 도착 정보, 지하철 환승 상황 및 교내 주요 셔틀 교통 상황을 한눈에 파악할 수 있는 맞춤형 캠퍼스 모빌리티 서비스입니다.",
  imageSrc: "/Project/uos.png",
  imageAlt: "UOS 교통정보 프로젝트 대표 이미지",
  techStack: [
    "React",
    "TypeScript",
    "Open API (서울시 공공데이터)",
    "FastAPI / Python",
    "Redis Caching",
    "Tailwind CSS",
  ],
  links: [
    {
      type: "website",
      href: "https://uos-traffic.paaran.com/",
      label: "교통정보 웹 확인",
    },
    {
      type: "app-store",
      href: "#",
      label: "iOS App (출시 준비중)",
    },
  ],
  teamMembers: [
    {
      name: "박정보",
      photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
      role: "Data Analyst / PM",
      detailedRole: "공공데이터 포털 API 분석, 버스 노선 데이터 정제",
      link: "#",
      email: "data@paaran.com",
      activityPeriod: "2024.03 - 2024.05",
    },
    {
      name: "최서버",
      photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
      role: "Backend Developer",
      detailedRole: "실시간 대중교통 데이터 캐싱 서버 및 경량 API 구축",
      link: "#",
      email: "server@paaran.com",
      activityPeriod: "2024.03 - 2024.05",
    },
  ],
  timeline: [
    {
      date: "2024.03",
      title: "기획 및 데이터 수집 파이프라인 구성",
      description: "서울시 공공데이터 버스/지하철 실시간 API 연동 및 데이터 가공.",
    },
    {
      date: "2024.04",
      title: "초경량 UI 개발 및 실시간 캐싱",
      description: "학우들이 빠르게 로딩할 수 있도록 Redis 기반 캐시 레이어 적용.",
    },
    {
      date: "2024.05",
      title: "교내 베타 테스트 및 서비스 배포",
      description: "실제 재학생 200여명 대상 피드백 수렴 및 성공적인 런칭.",
    },
  ],
  architecture: {
    description:
      "공공데이터 API의 호출 제한과 응답 지연을 방지하기 위해 인메모리 캐싱(Redis) 및 경량 API 게이트웨이를 구축하여 초고속 실시간 응답을 실현했습니다.",
    highlights: [
      {
        category: "Realtime Data Engine",
        items: ["서울시 실시간 버스/지하철 API", "Redis 기반 응답 캐싱 (5초 갱신)", "FastAPI 고성능 엔드포인트"],
      },
      {
        category: "Frontend UX",
        items: ["모바일 최적화 실시간 대시보드", "도착 예정 시간 자동 카운트다운", "오프라인 폴백 지원"],
      },
    ],
  },
};

const ProjectDetailUOS: React.FC<ProjectDetailUOSProps> = ({ onNextSection }) => {
  return (
    <ProjectDetail
      {...uosData}
      onNextSection={onNextSection}
      nextSectionName="맨 위로 가기"
    />
  );
};

export default ProjectDetailUOS;