import React from 'react';
import { motion } from 'framer-motion';

interface HexagonSkillsProps {
  skills: {
    category: string;
    skills: string;
    level: number;
  }[];
  darkMode: boolean;
}

const HexagonSkills: React.FC<HexagonSkillsProps> = ({ skills, darkMode }) => {
  // Calculate positions in a hexagonal grid
  const calculateHexPosition = (index: number, total: number) => {
    const radius = 180; // Adjust based on container size
    const angleStep = (2 * Math.PI) / total;
    const angle = index * angleStep;
    
    // Center skill in the middle
    if (index === 0) {
      return { x: 0, y: 0 };
    }
    
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    
    return { x, y };
  };

  return (
    <div className={`hexagon-skills-container ${darkMode ? 'dark' : ''}`}>
      <div className="hexagon-grid">
        {skills.map((skill, index) => {
          const position = calculateHexPosition(index, skills.length);
          
          return (
            <motion.div
              key={index}
              className="hexagon-item"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, x: position.x, y: position.y }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: `0 0 20px ${darkMode ? '#3b82f680' : '#3b82f650'}`,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`hexagon ${darkMode ? 'dark' : ''}`} style={{ 
                background: `conic-gradient(from 0deg, #3b82f6 ${skill.level}%, ${darkMode ? '#1f2937' : '#f3f4f6'} 0%)` 
              }}>
                <div className="hexagon-content">
                  <h3>{skill.category}</h3>
                  <div className="skill-level">{skill.level}%</div>
                </div>
              </div>
              <div className="skill-tooltip">
                <div className="tooltip-content">
                  <h4>{skill.category}</h4>
                  <p>{skill.skills}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HexagonSkills;
