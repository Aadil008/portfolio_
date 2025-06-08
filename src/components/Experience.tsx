interface ExperienceProps {
  experiences: {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
  }[];
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, darkMode }) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-900"></div>
              
              <div className={`ml-10 md:ml-0 md:${index % 2 === 0 ? 'mr-1/2 md:pr-12' : 'ml-1/2 md:pl-12'}`}>
                <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{exp.period}</span>
                  </div>
                  
                  <p className="text-lg font-medium text-gray-800 dark:text-white mb-4">{exp.company}</p>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
