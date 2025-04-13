import content from "../assets/content.json";
import image from "../assets/projects.jpeg";

const Projects = () => {
  return (
    <div className="section animate__animated animate__fadeInUp">
      <div className="title">Projects</div>
      <section>
        <div className="content">
          {content.projects.map((item, index) => (
            <div key={index}>
              <h5>{item.name}</h5>
              <span>{item.description}</span>
              <br />
              <span>Features:</span>
              <ul>
                {item.features?.split("\n").map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
              {/*<a href={item.links.frontend} target="_blank">*/}
              {/*  Frontend*/}
              {/*</a>*/}
            </div>
          ))}
        </div>
        <div className="image">
          <img src={image} alt="about" />
        </div>
      </section>
    </div>
  );
};

export default Projects;