import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Current */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CSE Student</h4>
                <h5>Your University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing Computer Science Engineering, focusing on
              software development, data structures, and problem-solving.
              Actively building projects and improving technical skills.
            </p>
          </div>

          {/* Projects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Work</h4>
                <h5>Personal / Academic</h5>
              </div>
              <h3>2024–Present</h3>
            </div>
            <p>
              Developed multiple projects in web development and machine learning,
              gaining hands-on experience in building real-world applications and
              improving coding skills.
            </p>
          </div>

          {/* Learning */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Skill Development</h4>
                <h5>Self Learning</h5>
              </div>
              <h3>2023–Present</h3>
            </div>
            <p>
              Continuously learning new technologies including programming languages,
              frameworks, and tools. Practicing problem-solving and exploring new areas
              like machine learning and web development.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;