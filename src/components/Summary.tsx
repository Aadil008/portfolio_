// React is automatically imported in modern React projects

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">PROFESSIONAL SUMMARY</h2>
      <p className="text-gray-700 leading-relaxed">{summary}</p>
    </section>
  );
};

export default Summary;
