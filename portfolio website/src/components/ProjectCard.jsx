import { Col } from "react-bootstrap"; // Import Col
export const ProjectCard = ({ title, description, imgUrl, logos = [], link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} alt={`Project image for ${title}`} />
        <div className="proj-txtx">
          <h4>
              {title}
          </h4>
          <p>{description}</p>
          <div className="logos">
            {Array.isArray(logos) &&
              logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo for ${title} - ${index}`}
                />
              ))}
          </div>
        </div>
        </a>
      </div>
    </Col>
  );
};
