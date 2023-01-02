import "./contact-form.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-header">Contact me</h1>
      <h6 className="contact-text">
        I am interested in working full time with team of senior developers and
        ready to accept challanges to develop my skills. Contact me for any kind
        of suitable role.
      </h6>
      <form className="contact-form">
        <input required className="name" type="text" placeholder="Name" />

        <input required className="email" type="email" placeholder="Email" />

        <input className="subject" type="text" placeholder="Subject" />

        <textarea
          rows={5}
          className="message"
          type="text"
          placeholder="Message"
        />

        <button className="btn contact-btn">Send Message</button>
      </form>
      <div className="my-links">
        <h6>
          Email : <a href="#">hireneelpro@gmail.com</a>{" "}
        </h6>
        <h6>
          Github :  
          <a
            target="blank"
            href="https://github.com/hireneelpro?tab=repositories"
          >
            https://github.com/hireneelpro?tab=repositories
          </a>
        </h6>
        <h6>
          LinkedIn :
          <a
            target="blank"
            href="https://www.linkedin.com/in/hiren-patel-86889525b/"
          >
            https://www.linkedin.com/in/hiren-patel-86889525b/{" "}
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Contact;
