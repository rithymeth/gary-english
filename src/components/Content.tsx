import React, { useEffect } from 'react';
import { loadSlim } from "tsparticles-slim";
import { tsParticles } from "tsparticles-engine";
import { particlesConfig } from './particlesConfig';
import './Content.css';

const Content: React.FC = () => {
  useEffect(() => {
    const loadParticles = async () => {
      try {
        await loadSlim(tsParticles);
        await tsParticles.load("tsparticles", particlesConfig);
      } catch (error) {
        console.error("Error loading particles:", error);
      }
    };
    loadParticles();
  }, []);

  return (
    <div className="content">
      <div id="tsparticles" className="particles-background" />
      <div className="content-container">
        <div className="content-left">
          <h2 className="animated-title">Welcome to ICG GAMING</h2>
          <p>Become an ICG Gaming partner and ready to launch your online casino business!</p>
          <a href="https://t.me/c/2126586273/89" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">Get Started</button>
          </a>
        </div>
        <div className="content-right">
          <div className="image-container">
            <img src="./images/Edison-english.png" alt="ICG Gaming Platform Preview" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
