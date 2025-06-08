import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  summary: string;
  additionalInfo: {
    label: string;
    value: string;
  }[];
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ summary, additionalInfo, darkMode }) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        About <span className="text-blue-600 dark:text-blue-400">Me</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'}`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Professional Summary</h3>
          
          <div className="relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            <p className="pl-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {summary}
            </p>
          </div>
          
          <div className="mt-6 pl-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">My Approach to Cybersecurity</h4>
            <ul className="space-y-2">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Proactive threat hunting and continuous monitoring</span>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Defense-in-depth strategy implementation</span>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Risk-based security assessment and prioritization</span>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Automation of security processes for efficiency</span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'}`}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Personal Highlights</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-white">Professional Journey</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in cybersecurity began with a fascination for understanding how systems can be protected against evolving threats. Through dedicated study and hands-on experience, I've developed expertise in network security, vulnerability assessment, and incident response, with a particular focus on proactive security measures.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-white">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm">Penetration Testing</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm">Threat Intelligence</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm">Network Security</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm">Security Automation</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm">Incident Response</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-white">Additional Information</h4>
              <div className="space-y-2">
                {additionalInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <span className="font-medium text-gray-700 dark:text-gray-300 w-32">{info.label}:</span>
                    <span className="text-gray-700 dark:text-gray-300">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
