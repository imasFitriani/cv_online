import React from 'react';

const EducationHistory = () => {
  const educationData = [
    {
      institution: 'Universitas Masoem',
      year: '2022 - 2025',
    },
    {
      institution: 'SMK 6 Garut',
      year: '2019 - 2021',
    },
    {
      institution: 'SMP Negeri 3 Limbangan',
      year: '2016 - 2019',
    },
    {
      institution: 'SD Negeri Simpen 3',
      year: '2010 - 2016',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-8">Riwayat Pendidikan</h2>
      <div className="space-y-6">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-blue-50 hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105 rounded-xl shadow-md border border-blue-200"
          >
            <h3 className="text-xl font-semibold text-blue-800">{item.institution}</h3>
            <p className="text-blue-600">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationHistory;
