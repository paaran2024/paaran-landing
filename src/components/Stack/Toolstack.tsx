
import { Row } from "react-bootstrap";
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
import { IoIosArrowUp } from "react-icons/io";

function Toolstack({ handleScrollToSection }: { handleScrollToSection: (id: string) => void }) {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VSCode" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiGitlab />, name: "GitLab" },
    { icon: <SiNotion />, name: "Notion" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiDiscord />, name: "Discord" },
    { icon: <SiGoogleanalytics />, name: "Google Analytics" },
  ];

  return (
    <S.Section>
      <S.ButtonWrapper onClick={() => handleScrollToSection("section3")}>
        <IoIosArrowUp />
        <S.ScrollButton>DevOps • 인프라</S.ScrollButton>
      </S.ButtonWrapper>

      <S.Heading>
        <strong className="important">협업 • 생산성</strong>
      </S.Heading>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tech, index) => (
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
    </S.Section>
  );
}

export default Toolstack;
