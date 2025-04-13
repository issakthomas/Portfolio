import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home animate__animated animate__fadeInUp">
      <div className="name" data-aos="fade-right">
        <h1>ISSAK THOMAS</h1>
        <span>Full Stack Developer</span>
      </div>
      <div className="links animate__animated animate__fadeInUpBig">
        <Link className="link" to={"/about"}>
          ABOUT
        </Link>
        <Link className="link" to={"/experience"}>
          EXPERIENCE
        </Link>
        <Link className="link" to={"/projects"}>
          PROJECTS
        </Link>
        <Link className="link" to={"/contact"}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Home;