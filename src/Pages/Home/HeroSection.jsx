export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Penta Chinni Teja</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Java Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Enthusiastic Java Developer with hands-on experience in building robust applications using Java, Spring Boot, and Hibernate. Proficient in developing RESTful APIs and secure user authentication with Spring Security. Skilled in frontend technologies like React.js with a proven ability to design responsive user interfaces. Completed several full-stack projects, including a Hotel Booking System and an Online Food Delivery Platform.
            <br /> Strong problem-solver committed to continuous learning and eager to contribute to a dynamic development team.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/portifoliopic.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
