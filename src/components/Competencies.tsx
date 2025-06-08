// React is automatically imported in modern React projects 'react';

interface CompetencyProps {
  competencies: string[];
}

const Competencies: React.FC<CompetencyProps> = ({ competencies }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">CORE COMPETENCIES</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {competencies.map((competency, index) => (
          <div key={index} className="bg-blue-50 p-3 rounded-lg flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{competency}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competencies;
