import React from 'react';
import ProjectDetail from './ProjectDetail';

const uosData = {
  imageSrc: '/Project/uos.png',
  imageAlt: 'UOS 교통정보 프로젝트 대표 이미지',
  serviceName: '서비스명: UOS 교통정보',
  description: '내용: 서울시립대학교 주변 실시간 교통 상황 및 버스 도착 정보를 제공하여 학생 및 교직원의 편의를 돕는 서비스입니다.',
  links: [
    {
      type: 'app-store',
      href: '#',
    },
  ],
  teamMembers: [
    {
      name: '박정보',
      photoUrl: 'https://via.placeholder.com/150/17A2B8/FFFFFF?text=DA',
      role: 'Data Analyst',
      detailedRole: '공공데이터 수집, 정제 및 분석 담당',
      link: '#',
      email: 'data@example.com',
      activityPeriod: '2024.03 - 2024.05',
    },
    {
      name: '최서버',
      photoUrl: 'https://via.placeholder.com/150/343A40/FFFFFF?text=BE',
      role: 'Backend Developer',
      detailedRole: '데이터 제공을 위한 API 서버 개발',
      link: '#',
      email: 'server@example.com',
      activityPeriod: '2024.03 - 2024.05',
    },
  ],
  timeline: [
    {
      date: '2024년 3월',
      title: '기획 및 데이터 수집',
      description: '서울시 공공데이터 포털 API 연동 및 데이터 수집.',
    },
    {
      date: '2024년 4월',
      title: '핵심 기능 개발',
      description: '실시간 버스 도착 정보 및 주변 교통상황 표시 기능 개발.',
    },
    {
      date: '2024년 5월',
      title: '내부 테스트 및 출시',
      description: '교내 학생 대상 베타 테스트 및 앱 스토어 출시 준비.',
    },
  ],
};

const ProjectDetailUOS = () => {
  return <ProjectDetail {...uosData} />;
};

export default ProjectDetailUOS;