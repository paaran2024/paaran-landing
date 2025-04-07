import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* 웹사이트 링크 */}
        {props.webLink && (
          <Button
            variant="primary"
            href={props.webLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Web
          </Button>
        )}

        {/* isApp이 true일 경우 앱스토어 및 플레이스토어 링크 추가 */}
        {props.isApp && (
          <>
            {props.playStoreLink && (
              <Button
                variant="success"
                href={props.playStoreLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <IoLogoGooglePlaystore /> &nbsp; PlayStore
              </Button>
            )}
            {props.appStoreLink && (
              <Button
                variant="secondary"
                href={props.appStoreLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <IoLogoAppleAppstore /> &nbsp; AppStore
              </Button>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
