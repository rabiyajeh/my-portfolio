import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id="contact">
      <motion.h2
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Let s Connect
      </motion.h2>

      <ContactGrid>
        <motion.div
          className="contact-info"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Item>
            <FaEnvelope className="icon" />
            <span>rabiii4046@gmail.com</span>
          </Item>
          <Item>
            <FaGithub className="icon" />
            <a href="https://github.com/rabiyajeh" target="_blank" rel="noopener noreferrer">
              github.com/rabiyajeh
            </a>
          </Item>
          <Item>
            <FaLinkedin className="icon" />
            <a href="https://linkedin.com/in/rabbiya-jehangir-8b0a831ab" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/rabbiya-jehangir
            </a>
          </Item>
        </motion.div>

        <motion.div
          className="resume-box"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ResumeLink href="/Rabbiya-Jehangir-CV.pdf" download>
            <FaDownload />
            Download My Resume
          </ResumeLink>
        </motion.div>
      </ContactGrid>
    </Section>
  );
};

export default Contact;

// Styled Components
const Section = styled.section`
  background: linear-gradient(135deg, #0f0f0f, #1c1c1c);
  color: #fff;
  padding: 80px 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 50px;
    color: #ffae00;
    text-shadow: 0 0 5px #ffae00, 0 0 10px #ffae00;
  }
`;

const ContactGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Item = styled.div`
  background: #111;
  border-left: 5px solid #ffae00;
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(255, 174, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;

  .icon {
    color: #ffae00;
    font-size: 1.3rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s ease;

    &:hover {
      color: #ffae00;
    }
  }
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #111;
  color: #ffae00;
  border: 2px solid #ffae00;
  border-radius: 50px;
  text-decoration: none;
  transition: 0.3s ease;
  box-shadow: 0 0 10px #ffae00, 0 0 20px #ffae00;

  &:hover {
    background-color: #ffae00;
    color: #111;
    box-shadow: 0 0 20px #ffae00;
    transform: scale(1.05);
  }

  svg {
    font-size: 1.3rem;
  }
`;
