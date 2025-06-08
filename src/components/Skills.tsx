interface SkillsProps {
  skills: {
    category: string;
    skills: string;
    level: number;
  }[];
  competencies: string[];
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ skills, competencies, darkMode }) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Skill Proficiency</h3>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.category}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{skill.skills}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Core Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competencies.map((competency, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{competency}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Cybersecurity Tools</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Wireshark</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Metasploit</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Nmap</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Nessus</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">SIEM platforms</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Burp Suite</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">OWASP ZAP</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Kali Linux</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Splunk</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Snort</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
