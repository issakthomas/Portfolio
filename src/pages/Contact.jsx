import image from "../assets/contact.jpeg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="section animate__animated animate__fadeInUp">
      <div className="title">Contact</div>
      <section>
        <div id="aboutContent" className="content">
          <a href="mailto:issakthomas22@gmail.com">
            <div>
              <span>Email</span>
              <span>issakthomas22@gmail.com</span>
            </div>
          </a>
          <a href="tel:+917907420280">
            <div>
              <span>Mobile</span>
              <span>+917907420280</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/issakthomas/" target="_blank">
            <div>
              <span>Linkedin</span>
              <span>linkedin/issakthomas</span>
            </div>
          </a>
          <a href="https://github.com/issakthomas" target="_blank">
            <div>
              <span>Github</span>
              <span>github/issakthomas</span>
            </div>
          </a>
          <a href="https://www.instagram.com/issakthomas/" target="_blank">
            <div>
              <span>Instagram</span>
              <span>instagram/issakthomas</span>
            </div>
          </a>
          <a
            href="https://wa.me/917907420280"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span>WhatsApp</span>
              <span>+917907420280</span>
            </div>
          </a>
        </div>
        <div className="image">
          <img src={image} alt="about" />
        </div>
      </section>
    </div>
  );
};

export default Contact;