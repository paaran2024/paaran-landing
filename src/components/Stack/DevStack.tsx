import { S } from "./Techstack";
import { IoLogoGitlab } from "react-icons/io5";
import {
  SiGithubactions,
  SiUbuntu,
  SiNaver,
  SiDocker,
  SiSelenium,
  SiPostman,
  SiKubernetes,
  SiArgo,
  SiGrafana,
  SiPrometheus,
  SiJsdelivr,
  SiCloudflare,
} from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";

interface DevStackProps {
  handleScrollToSection?: (id: string) => void;
}

function DevStack({ handleScrollToSection }: DevStackProps) {
  const devStack = [
    {
      icon: <SiDocker color="#2496ED" />,
      name: "Docker",
      category: "Container",
    },
    {
      icon: <SiKubernetes color="#326CE5" />,
      name: "Kubernetes",
      category: "Orchestration",
    },
    { icon: <SiArgo color="#EF7B4D" />, name: "ArgoCD", category: "GitOps" },
    {
      icon: <SiGithubactions color="#2088FF" />,
      name: "GitHub Actions",
      category: "CI / CD",
    },
    {
      icon: <IoLogoGitlab color="#FC6D26" />,
      name: "GitLab-CI",
      category: "CI / CD",
    },
    {
      icon: <SiGrafana color="#F46800" />,
      name: "Grafana",
      category: "Monitoring",
    },
    {
      icon: <SiPrometheus color="#E6522C" />,
      name: "Prometheus",
      category: "Metrics",
    },
    {
      icon: <SiUbuntu color="#E95420" />,
      name: "Ubuntu",
      category: "Linux OS",
    },
    {
      icon: <SiCloudflare color="#F38020" />,
      name: "Cloudflare",
      category: "CDN / Security",
    },
    {
      icon: <SiJsdelivr color="#E84D3D" />,
      name: "Jsdelivr",
      category: "Open CDN",
    },
    { icon: <SiNaver color="#03C75A" />, name: "NCP", category: "Cloud Infra" },
    {
      icon: <SiPostman color="#FF6C37" />,
      name: "Postman",
      category: "API Testing",
    },
    {
      icon: <SiSelenium color="#43B02A" />,
      name: "Selenium",
      category: "QA Automation",
    },
  ];

  return (
    <S.SectionWrapper>
      <S.ContentContainer>
        {/* 헤더 정보 */}
        <S.HeaderArea>
          <S.CategoryChip>INFRASTRUCTURE & DEVOPS</S.CategoryChip>
          <S.HeadingTitle>DevOps 및 인프라</S.HeadingTitle>
          <S.HeadingDesc>
            지속적인 배포(CI/CD)와 안정적인 모니터링 체계를 바탕으로 유저에게
            무중단 서비스를 제공합니다.
          </S.HeadingDesc>
        </S.HeaderArea>

        {/* 모던 스택 카드 그리드 */}
        <S.GridContainer>
          {devStack.map((tech, index) => (
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

export default DevStack;
