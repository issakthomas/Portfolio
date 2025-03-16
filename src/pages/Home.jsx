import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div
        className="name animate__animated animate__fadeIn"
        data-aos="fade-right"
      >
        <h1>ISSAK THOMAS</h1>
        <span>Full Stack Developer | MERN Stack Intern</span>
      </div>
      <div className="links animate__animated animate__fadeIn">
        <Link className="link" to={"/about"}>
          ABOUT
        </Link>
        <Link className="link" to={"/about"}>
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