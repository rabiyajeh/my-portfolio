import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';

const Home = () => {
  return (
    <HomeSection>
      <AnimatedBackground />
      <BackgroundOverlay />
      <GlassContent
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Rabbiya Jehangir
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Web Developer | AI Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          I’m a passionate full-stack web developer who builds responsive websites, AI-powered interfaces, and seamless user experiences. With a strong foundation in React.js and wordpress, I craft interactive applications that solve real-world problems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          I love turning complex challenges into clean, efficient code. My journey includes developing medical apps, portfolios with creative animations, and contributing to AI-assisted platforms.
        </motion.p>

        <ButtonGroup>
          <Link to="/projects">
            <CTAButton>Explore Projects</CTAButton>
          </Link>
          <Link to="/about">
            <CTAButtonSecondary>More About Me</CTAButtonSecondary>
          </Link>
          <Link to="/contact">
            <CTAButtonSecondary>Contact</CTAButtonSecondary>
          </Link>
        </ButtonGroup>
      </GlassContent>
    </HomeSection>
  );
};

export default Home;
const HomeSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const GlassContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
  text-align: center;

  h1 {
    font-size: 48px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 16px;
    line-height: 1.6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const CTAButton = styled.button`
  padding: 10px 22px;
  font-size: 16px;
  background-color: #f39c12;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e67e22;
  }
`;

const CTAButtonSecondary = styled(CTAButton)`
  background-color: transparent;
  border: 2px solid #f39c12;

  &:hover {
    background-color: rgba(243, 156, 18, 0.2);
  }
`;
