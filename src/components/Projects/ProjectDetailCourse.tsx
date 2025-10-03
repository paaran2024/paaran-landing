import React from 'react';
import ProjectDetail from './ProjectDetail';

const courseData = {
  imageSrc: '/Project/course.png',
  imageAlt: '파아란 코스 프로젝트 대표 이미지',
  serviceName: '서비스명: 파아란 코스',
  description: '내용: GPX 파일 공유 및 라이딩 기록 서비스. 사용자들이 자신의 라이딩 코스를 공유하고 다른 사람의 코스를 다운로드하여 활용할 수 있는 플랫폼입니다.',
  links: [
    {
      type: 'website',
      href: 'https://course.paaran.com/',
    },
    {
      type: 'play-store',
      href: 'https://play.google.com/store/apps/details?id=com.paaran.course.twa',
    },
  ],
  teamMembers: [
    {
      name: '홍길동',
      photoUrl: 'https://via.placeholder.com/150/007BFF/FFFFFF?text=PM',
      role: 'Project Manager',
      detailedRole: '프로젝트 총괄 및 기획',
      link: '#',
      email: 'pm@example.com',
      activityPeriod: '2024.01 - 2024.06',
    },
    {
      name: '김철수',
      photoUrl: 'https://via.placeholder.com/150/28A745/FFFFFF?text=FE',
      role: 'Frontend Developer',
      detailedRole: 'React 기반 UI 개발 및 상태 관리',
      link: '#',
      email: 'fe@example.com',
      activityPeriod: '2024.01 - 2024.06',
    },
    {
      name: '이영희',
      photoUrl: 'https://via.placeholder.com/150/DC3545/FFFFFF?text=BE',
      role: 'Backend Developer',
      detailedRole: 'API 서버 구축 및 데이터베이스 설계',
      link: '#',
      email: 'be@example.com',
      activityPeriod: '2024.01 - 2024.06',
    },
  ],
  timeline: [
    {
      date: '2024년 1월',
      title: '프로젝트 기획 및 설계',
      description: '주요 기능 정의 및 시스템 아키텍처 설계, 기술 스택 선정.',
    },
    {
      date: '2024년 2월',
      title: '백엔드 개발 착수',
      description: 'API 서버 구축 및 데이터베이스 모델링.',
    },
    {
      date: '2024년 3월',
      title: '프론트엔드 개발 착수',
      description: 'UI/UX 디자인 시스템 구현 및 주요 페이지 개발.',
    },
    {
      date: '2024년 5월',
      title: '알파 테스트 및 피드백 반영',
      description: '내부 테스트를 통한 버그 수정 및 사용자 피드백 반영.',
    },
    {
      date: '2024년 6월',
      title: '정식 버전 출시',
      description: 'Google Play Store 및 웹사이트 정식 배포.',
    },
  ],
};

const ProjectDetailCourse = () => {
  return <ProjectDetail {...courseData} />;
};

export default ProjectDetailCourse;
