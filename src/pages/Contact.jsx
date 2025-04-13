import image from "../assets/contact.jpeg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="section animate__animated animate__fadeInUp">
      <div className="title">Contact</div>
      <section>
        <div id="aboutContent" className="content">
          <div>
            <span>Email</span>
            <span>issakthomas22@gmail.com</span>
          </div>
          <div>
            <span>Mobile</span>
            <span>+917907420280</span>
          </div>
          <div>
            <span>Linkedin</span>
            <span>linkedin/issakthomas</span>
          </div>
          <div>
            <span>Github</span>
            <span>github/issakthomas</span>
          </div>
          <div>
            <span>Instagram</span>
            <span>instagram/issakthomas</span>
          </div>
        </div>
        <div className="image">
          <img src={image} alt="about" />
        </div>
      </section>
    </div>
  );
};

export default Contact;