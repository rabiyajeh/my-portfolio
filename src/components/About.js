import React, { useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import {
  FaGithub,
  FaLinkedin,
  FaBook,
  FaUtensils,
  FaGlobe,
  FaFlask,
} from 'react-icons/fa';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Laravel', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'PHP', level: 75 },
  { name: 'SQL', level: 70 },
];

const tools = ['VS Code', 'Git & GitHub', 'Figma', 'Postman','MySQL Workbench'];

const hobbies = [
  { name: 'Reading', icon: <FaBook /> },
  { name: 'Baking', icon: <FaUtensils /> },
  { name: 'Trying New Things', icon: <FaFlask /> },
  { name: 'Traveling', icon: <FaGlobe /> },
];

const experience = [
  {
    title: 'AI Engineer Intern',
    company: 'AITec',
    description: 'Researched and applied deep learning models to real-time applications.',
  },
  {
    title: 'Web Developer',
    company: 'GAO Tek',
    description: 'Built and optimized full-stack Laravel apps for industrial clients.',
  },
  {
    title: 'Frontend Developer',
    company: 'YD Solutions',
    description: 'Delivered responsive React interfaces and WordPress solutions.',
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-wrapper">
      <div className="animated-bg" />

      <Scrollbars
        autoHide
        style={{ height: '100vh' }}
        renderThumbVertical={({ style, ...props }) => (
          <div {...props} style={{ ...style, backgroundColor: '#d4af37', borderRadius: '5px' }} />
        )}
      >
        <div className="about-content">
          <h1 data-aos="fade-down">About Me</h1>
          <p data-aos="fade-up">
            I am a passionate full-stack developer who builds modern and scalable web applications. I focus on clean code,
            reusable components, and continuous learning.
          </p>

          {/* Skills Section */}
          <h2 data-aos="fade-right">Skills</h2>
          <div className="skills-section">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-bar" data-aos="fade-up" data-aos-delay={idx * 100}>
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Cards */}
          <h2 data-aos="fade-left" style={{ marginTop: '2rem' }}>Experience</h2>
          <div className="experience-cards">
            {experience.map((exp, idx) => (
              <div className="exp-card" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <h2 data-aos="fade-up" style={{ marginTop: '2rem' }}>Tools & Technologies</h2>
          <div className="tools-section">
            {tools.map((tool, idx) => (
              <span className="tool-badge" key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                {tool}
              </span>
            ))}
          </div>

          {/* Hobbies Grid */}
          <h2 data-aos="fade-up" style={{ marginTop: '2rem' }}>Hobbies & Interests</h2>
          <div className="hobbies-grid">
            {hobbies.map((hobby, idx) => (
              <div className="hobby-item" key={idx} data-aos="flip-up" data-aos-delay={idx * 100}>
                <div className="hobby-icon">{hobby.icon}</div>
                <span>{hobby.name}</span>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <h2 data-aos="fade-up" style={{ marginTop: '2rem' }}>Connect with Me</h2>
          <div className="social-icons">
            <a href="https://github.com/rabiyajeh" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rabbiya-jehangir-8b0a831ab" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>

          <p data-aos="fade-up" style={{ marginTop: '2rem' }}>
            I'm on a journey to become a top-tier full-stack developer who can take ideas from concept to launch. Let's build together!
          </p>

          <div style={{ height: '50px' }}></div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default About;
