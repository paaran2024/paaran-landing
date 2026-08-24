import { S } from "./Techstack";
import {
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNotion,
  SiGoogleanalytics,
  SiDiscord,
  SiFigma,
} from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";

interface ToolstackProps {
  handleScrollToSection?: (id: string) => void;
}

function Toolstack({ handleScrollToSection }: ToolstackProps) {
  const tools = [
    {
      icon: <SiVisualstudiocode color="#007ACC" />,
      name: "VS Code",
      category: "IDE",
    },
    {
      icon: <SiGit color="#F05032" />,
      name: "Git",
      category: "Version Control",
    },
    {
      icon: <SiGithub color="#181717" />,
      name: "GitHub",
      category: "Code Host",
    },
    {
      icon: <SiGitlab color="#FC6D26" />,
      name: "GitLab",
      category: "Code Host",
    },
    { icon: <SiFigma color="#F24E1E" />, name: "Figma", category: "Design" },
    {
      icon: <SiNotion color="#000000" />,
      name: "Notion",
      category: "Workspace",
    },
    {
      icon: <SiDiscord color="#5865F2" />,
      name: "Discord",
      category: "Communication",
    },
    {
      icon: <SiGoogleanalytics color="#E37400" />,
      name: "Google Analytics",
      category: "Analytics",
    },
  ];

  return (
    <S.SectionWrapper>
      <S.ContentContainer>
        {/* 헤더 정보 */}
        <S.HeaderArea>
          <S.CategoryChip>PRODUCTIVITY & COLLABORATION</S.CategoryChip>
          <S.HeadingTitle>협업 및 생산성 툴</S.HeadingTitle>
          <S.HeadingDesc>
            팀원 간의 기민한 커뮤니케이션과 체계적인 프로젝트 관리를 위해 최적의
            협업 도구를 활용합니다.
          </S.HeadingDesc>
        </S.HeaderArea>

        {/* 모던 스택 카드 그리드 */}
        <S.GridContainer>
          {tools.map((tech, index) => (
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

export default Toolstack;
