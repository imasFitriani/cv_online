import React from 'react';

const Skills = () => {
  const skills = [
    { skill: 'Komunikasi', level: 70 },
    { skill: 'JavaScript', level: 70 },
    { skill: 'React', level: 65 },
    { skill: 'CSS', level: 80 },
    { skill: 'HTML', level: 95 },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-8">Skills</h2>
      <div className="grid grid-cols-1 gap-6">
        {skills.map((item, index) => (
          <div key={index} className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{item.skill}</h3>
              <span className="text-sm font-medium text-gray-500">{item.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-width duration-500"
                style={{
                  width: `${item.level}%`,
                  backgroundColor: item.level > 80 ? '#4ade80' : item.level > 60 ? '#fbbf24' : '#f87171',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
