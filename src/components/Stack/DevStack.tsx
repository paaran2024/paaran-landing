import React from "react";
import { Col, Row } from "react-bootstrap";
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
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function DevStack({ handleScrollToSection }: { handleScrollToSection: (id: string) => void }) {
  const devStack = [
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiArgo />, name: "ArgoCD" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <IoLogoGitlab />, name: "GitLab-CI" },
    { icon: <SiGrafana />, name: "Grafana" },
    { icon: <SiPrometheus />, name: "Prometheus" },
    { icon: <SiUbuntu />, name: "Ubuntu" },
    { icon: <SiJsdelivr />, name: "Jsdelivr" },
    { icon: <SiCloudflare />, name: "Cloudflare" },
    { icon: <SiNaver />, name: "NCP" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSelenium />, name: "Selenium" },
  ];

  return (
    <S.Section>
      <S.ButtonWrapper onClick={() => handleScrollToSection("section2")}>
        <IoIosArrowUp />
        <S.ScrollButton>언어 • 프레임워크</S.ScrollButton>
      </S.ButtonWrapper>

      <S.Heading>
        <strong className="important">DevOps • 인프라</strong>
      </S.Heading>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {devStack.map((tech, index) => (
          <S.Col xs={4} md={2} key={index}>
            <S.Icons>
              {tech.icon}
              <p style={{ margin: "10px 0px 0px 0px", fontSize: "14px" }}>
                {tech.name}
              </p>
            </S.Icons>
          </S.Col>
        ))}
      </Row>

      <S.ButtonWrapper onClick={() => handleScrollToSection("section4")}>
        <S.ScrollButton>협업 • 생산성</S.ScrollButton>
        <IoIosArrowDown />
      </S.ButtonWrapper>
    </S.Section>
  );
}

export default DevStack;
