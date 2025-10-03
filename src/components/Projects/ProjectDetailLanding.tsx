import React from 'react';
import ProjectDetail from './ProjectDetail';

const landingData = {
  imageSrc: '/Project/landing.png',
  imageAlt: '파아란 랜딩페이지 프로젝트 대표 이미지',
  serviceName: '서비스명: 파아란 랜딩페이지',
  description: '내용: 파아란 팀의 비전과 주요 프로젝트를 소개하는 공식 랜딩페이지입니다. 방문자들이 팀의 활동을 쉽게 파악할 수 있도록 구성했습니다.',
  links: [
    {
      type: 'website',
      href: 'https://paaran.com/',
    },
  ],
  teamMembers: [
    {
      name: '김개발',
      photoUrl: 'https://via.placeholder.com/150/28A745/FFFFFF?text=FE',
      role: 'Frontend Developer',
      detailedRole: '랜딩페이지 UI/UX 및 인터랙션 개발',
      link: '#',
      email: 'dev@example.com',
      activityPeriod: '2023.11 - 2023.12',
    },
    {
      name: '이디자인',
      photoUrl: 'https://via.placeholder.com/150/FFC107/000000?text=UI',
      role: 'UI/UX Designer',
      detailedRole: 'Figma를 이용한 전체 디자인 시스템 설계',
      link: '#',
      email: 'design@example.com',
      activityPeriod: '2023.11 - 2023.12',
    },
  ],
  timeline: [
    {
      date: '2023년 11월',
      title: '기획 및 디자인',
      description: '랜딩페이지 컨셉 및 디자인 시안 확정.',
    },
    {
      date: '2023년 12월',
      title: '개발 및 배포',
      description: 'React 기반 개발 완료 및 paaran.com 도메인에 배포.',
    },
  ],
};

const ProjectDetailLanding = () => {
  return <ProjectDetail {...landingData} />;
};

export default ProjectDetailLanding;