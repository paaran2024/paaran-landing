import {
  DiHtml5,
  DiCss3,
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiRedis,
  DiNginx,
} from "react-icons/di";
import {
  SiPostgresql,
  SiFastapi,
  SiApachekafka,
  SiNestjs,
  SiTypescript,
} from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";

interface TechstackProps {
  handleScrollToSection?: (id: string) => void;
}

function Techstack({ handleScrollToSection }: TechstackProps) {
  const techStack = [
    { icon: <DiHtml5 color="#E34F26" />, name: "HTML5", category: "Markup" },
    { icon: <DiCss3 color="#1572B6" />, name: "CSS3", category: "Style" },
    {
      icon: <DiJavascript1 color="#F7DF1E" />,
      name: "JavaScript",
      category: "Language",
    },
    {
      icon: <SiTypescript color="#3178C6" />,
      name: "TypeScript",
      category: "Language",
    },
    {
      icon: <DiReact color="#61DAFB" />,
      name: "React.js",
      category: "Frontend",
    },
    {
      icon: <DiNodejs color="#339933" />,
      name: "Node.js",
      category: "Runtime",
    },
    {
      icon: <SiNestjs color="#E0234E" />,
      name: "Nest.js",
      category: "Backend",
    },
    {
      icon: <DiPython color="#3776AB" />,
      name: "Python",
      category: "Language",
    },
    {
      icon: <SiFastapi color="#009688" />,
      name: "FastAPI",
      category: "Backend",
    },
    { icon: <DiJava color="#ED8B00" />, name: "Java", category: "Language" },
    {
      icon: <SiPostgresql color="#4169E1" />,
      name: "PostgreSQL",
      category: "Database",
    },
    {
      icon: <DiRedis color="#DC382D" />,
      name: "Redis",
      category: "Cache / DB",
    },
    {
      icon: <SiApachekafka color="#231F20" />,
      name: "Kafka",
      category: "Message Queue",
    },
    {
      icon: <DiNginx color="#009639" />,
      name: "Nginx",
      category: "Web Server",
    },
  ];

  return (
    <S.SectionWrapper>
      <S.ContentContainer>
        {/* 헤더 정보 */}
        <S.HeaderArea>
          <S.CategoryChip>CORE TECH STACK</S.CategoryChip>
          <S.HeadingTitle>언어 및 프레임워크</S.HeadingTitle>
          <S.HeadingDesc>
            파아란은 안정적이고 확장 가능한 서비스를 위해 검증된 최신 웹 기술과
            프레임워크를 적극 도입합니다.
          </S.HeadingDesc>
        </S.HeaderArea>

        {/* 모던 스택 카드 그리드 */}
        <S.GridContainer>
          {techStack.map((tech, index) => (
            <S.TechCard key={index}>
              <S.IconWrapper className="tech-icon">{tech.icon}</S.IconWrapper>
              <S.TechName>{tech.name}</S.TechName>
              <S.TechTag>{tech.category}</S.TechTag>
            </S.TechCard>
          ))}
        </S.GridContainer>
      </S.ContentContainer>
    </S.SectionWrapper>
  );
}

export default Techstack;

/* ================== Shared & Stack Styled Components ================== */
export const S = {
  SectionWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 24px 50px 24px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 20px 16px 36px 16px;
    }
  `,

  ContentContainer: styled.div`
    width: 100%;
    max-width: 1320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    box-sizing: border-box;
  `,

  HeaderArea: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    max-width: 700px;
  `,

  CategoryChip: styled.span`
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: #0484fc;
    background: rgba(4, 132, 252, 0.1);
    padding: 5px 14px;
    border-radius: 20px;
    border: 1px solid rgba(4, 132, 252, 0.2);
  `,

  HeadingTitle: styled.h2`
    font-size: 2.2rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
  `,

  HeadingDesc: styled.p`
    font-size: 1rem;
    color: #64748b;
    margin: 0;
    line-height: 1.6;
    word-break: keep-all;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  `,

  GridContainer: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 18px;
    justify-content: center;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
      gap: 10px;
    }

    @media (max-width: 420px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }
  `,

  TechCard: styled.div`
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 22px 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;

    &:hover {
      transform: translateY(-6px);
      border-color: #0484fc;
      box-shadow:
        0 12px 26px rgba(4, 132, 252, 0.12),
        0 4px 10px rgba(0, 0, 0, 0.04);

      .tech-icon {
        transform: scale(1.1);
      }
    }

    @media (max-width: 768px) {
      padding: 16px 10px;
      gap: 6px;
    }

    @media (max-width: 420px) {
      padding: 12px 6px;
      gap: 4px;
      border-radius: 12px;
    }
  `,

  IconWrapper: styled.div`
    font-size: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.25s ease;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 420px) {
      font-size: 2.1rem;
    }
  `,

  TechName: styled.h3`
    font-size: 0.95rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }

    @media (max-width: 420px) {
      font-size: 0.75rem;
    }
  `,

  TechTag: styled.span`
    font-size: 0.72rem;
    font-weight: 600;
    color: #64748b;
    background: #f1f5f9;
    padding: 2px 8px;
    border-radius: 6px;

    @media (max-width: 768px) {
      font-size: 0.68rem;
    }

    @media (max-width: 420px) {
      font-size: 0.62rem;
      padding: 1px 4px;
    }
  `,

  NextSectionBtn: styled.button`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
    background: transparent;
    border: none;
    color: #0484fc;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    padding: 8px 18px;
    border-radius: 20px;
    transition: all 0.2s ease;

    .arrow {
      transition: transform 0.2s ease;
    }

    &:hover {
      background: rgba(4, 132, 252, 0.08);
      .arrow {
        transform: translateX(4px);
      }
    }
  `,
};
