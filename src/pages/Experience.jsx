import content from "../assets/content.json";
import image from "../assets/experience.jpeg";

const Experience = () => {
  return (
    <div className="section animate__animated animate__fadeInUp">
      <div className="title">Experience</div>
      <section>
        <div className="content">
          {content.experience.map((item, index) => (
            <div key={index}>
              <h5>
                {item.role} - {item.name}
              </h5>
              <h6>{item.time}</h6>
              <ul>
                {item.description?.split("\n").map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
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

export default Experience;