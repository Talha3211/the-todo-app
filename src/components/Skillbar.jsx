import React from 'react';

const SkillBar = ({ skill, level, color }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-1">
      <span className="text-base font-semibold text-gray-800">{skill}</span>
      <span className="text-base font-semibold text-gray-800">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 h-3">
      <div
        className={`h-3  ${color}`}
        style={{ width: `${level}% `}}
      ></div>
    </div>
  </div>
);

const SkillBars = () => {
  const skills = [
    { skill: 'HTML', level: 100, color: 'bg-blue-800' },
    { skill: 'CSS', level: 90, color: 'bg-blue-800' },
    { skill: 'JavaScript', level: 75, color: 'bg-blue-800' },
    { skill: 'Photoshop', level: 55, color: 'bg-blue-800' },
  ];

  return (
    <div className="max-w-lg mx-auto p-4">
      <h3 className="text-2xl font-bold text-blue-900 leading-tight mb-4">
        Voluptatem dignissimos provident quasi corporis voluptas
      </h3>
      <p className="text-gray-600 mb-6" style={{ fontFamily: 'Niko Condensed Light Italic' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
};

export default SkillBars;