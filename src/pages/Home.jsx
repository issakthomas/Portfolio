import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="name">
        <h1>Issak Thomas</h1>
        <span>Full Stack Developer | MERN Stack Intern</span>
      </div>
      <div className="links">
        <Link className="link" to={"/about"}>
          ABOUT
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