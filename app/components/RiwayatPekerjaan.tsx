import React from 'react';

const WorkHistory = () => {
  const workData = [
    {
      company: 'PT. Pratama Abadi Industri',
      position: 'Web Developer',
      year: '2015 - 2019',
      description: 'Bertanggung jawab dalam pengembangan aplikasi web dan pemeliharaan website perusahaan.',
    },
  ];

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Riwayat Pekerjaan</h2>
      <div className="space-y-4">
        {workData.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">{item.company}</h3>
            <p className="text-gray-600">{item.position}</p>
            <p className="text-gray-500">{item.year}</p>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
