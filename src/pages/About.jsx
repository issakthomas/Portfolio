import image from "../assets/about.jpeg";
import content from "../assets/content.json";

const About = () => {
  return (
    <div className="section animate__animated animate__fadeInUp">
      <div className="title">About</div>
      <section>
        <div className="content">
          {content.about.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div className="image">
          <img src={image} alt="about" />
        </div>
      </section>
    </div>
  );
};

export default About;