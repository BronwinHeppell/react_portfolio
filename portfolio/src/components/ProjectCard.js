import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  function openNewTab(url) {
    if (url === undefined) {
      return;
    }

    window.open(url, "_blank");
  }

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => openNewTab(githubUrl)}>
        <img src={imgUrl} className="proj-img darkened-image" alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
