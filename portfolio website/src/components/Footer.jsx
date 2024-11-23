import { Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "#000", color: "#fff", padding: "20px 0", textAlign: "center" }}>
      <Container>
        <p style={{ margin: 0, fontSize: "1.2rem", fontWeight: "bold" }}>
          Huzaifa <span role="img" aria-label="coder">👨‍💻</span>
        </p>
        <div className="social-icon" style={{ margin: "10px 0" }}>
          <a href="https://www.linkedin.com/in/huzaifa-jambagi-807556249/?originalSubdomain=in" style={{ margin: "0 10px" }}>
            <img src={navIcon1} alt="LinkedIn Icon" style={{ width: "24px" }} />
          </a>
          <a href="https://github.com/Huzaifa-Jambagi" style={{ margin: "0 10px" }}>
            <img src={navIcon2} alt="GitHub Icon" style={{ width: "24px" }} />
          </a>
        </div>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>© 2024</p>
      </Container>
    </footer>
  );
}
