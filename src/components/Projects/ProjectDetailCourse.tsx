import styled from "styled-components";
import ProjectCard from "./ProjectCards";

export const ProjectDetailCourse = () => {
  return (
    <ProjectCard
      imgPath={"/Project/course.png"}
      isApp={true}
      title="파아란 코스"
      description="GPX 파일 공유 서비스"
      webLink="https://course.paaran.com/"
      playStoreLink="https://play.google.com/store/apps/details?id=com.paaran.course.twa"
    />
  );
};

export default ProjectDetailCourse;

export const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  `,

  Content: styled.div`
    width: 80%;
    height: 100%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
      width: 100%;
      height: 100%;
      max-width: none;
      max-height: none;
      border-radius: 0;
      right: -100%;
      animation: slideInFromRight 0.3s ease-out forwards;
    }

    @keyframes slideInFromRight {
      from {
        right: -100%;
      }
      to {
        right: 0;
      }
    }
  `,

  PostDetailsLeft: styled.div`
    display: flex;
    align-items: center;
    position: relative;
  `,

  ContentSection: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;

    @media (max-width: 900px) {
      height: auto;
      justify-content: flex-start;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
      padding-top: 65px;

      /* 스크롤바 숨기기 */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }

      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  `,

  PostContainer: styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    border-right: 1px solid #e4e7eb;
    padding-right: 15px;

    @media (max-width: 900px) {
      width: 100%;
      height: auto;
      border-right: none;
      border-bottom: 1px solid #e4e7eb;
      justify-content: flex-start;
      padding: 0px;
      padding-bottom: 20px;
      margin-bottom: 10px;
    }
  `,

  PostHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    width: 100%;

    @media (max-width: 900px) {
      height: 50px;
    }
  `,

  PostDetailsRight: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
};
