import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

interface TerminalIntroProps {
  name: string;
}

const TerminalIntro: React.FC<TerminalIntroProps> = ({ name }) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const typedRef = useRef<any>(null);

  useEffect(() => {
    if (terminalRef.current) {
      typedRef.current = new Typed(terminalRef.current, {
        strings: [
          `> Initializing security protocol...\n> Running system diagnostics...\n> All systems operational\n> Loading profile: ${name}\n> Specialization: Cybersecurity Professional\n> Status: Active\n> Security clearance: Authorized`,
        ],
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        cursorChar: '█',
        showCursor: true,
        onComplete: () => {
          // Blink cursor after typing is complete
          const cursor = document.querySelector('.typed-cursor');
          if (cursor) {
            cursor.classList.add('typed-cursor--blink');
          }
        }
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [name]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="terminal-container mb-12"
    >
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button terminal-close"></span>
          <span className="terminal-button terminal-minimize"></span>
          <span className="terminal-button terminal-maximize"></span>
        </div>
        <div className="terminal-title">cybersecurity@terminal:~</div>
      </div>
      <div className="terminal-body">
        <pre className="terminal-text">
          <span ref={terminalRef}></span>
        </pre>
      </div>
    </motion.div>
  );
};

export default TerminalIntro;
