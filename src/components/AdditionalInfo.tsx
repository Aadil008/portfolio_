// React is automatically imported in modern React projects 'react';

interface AdditionalInfoItem {
  label: string;
  value: string;
}

interface AdditionalInfoProps {
  additionalInfo: AdditionalInfoItem[];
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ additionalInfo }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">ADDITIONAL INFORMATION</h2>
      
      <div className="space-y-3">
        {additionalInfo.map((info, index) => (
          <div key={index} className="flex flex-col md:flex-row">
            <span className="font-bold text-blue-700 md:w-1/4">{info.label}:</span>
            <span className="text-gray-700 md:w-3/4">{info.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalInfo;
