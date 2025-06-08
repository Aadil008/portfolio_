interface ProjectsProps {
  projects: {
    title: string;
    description: string;
    tools: string;
    image: string;
    achievements: string[];
  }[];
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, darkMode }) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </h2>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Technologies Used:</span>
                  <p className="text-gray-700 dark:text-gray-300">{project.tools}</p>
                </div>
                
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="order-1 lg:order-2 flex items-center justify-center">
                <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {/* This would be replaced with actual images in production */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30"></div>
                  <div className="z-10 text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-white/80 text-sm">Cybersecurity Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
