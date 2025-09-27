import React from 'react';

const skills = [
  { name: 'React', percent: '60%', iconPlaceholder: '⚛️' },
  { name: 'Figma', percent: '85%', iconPlaceholder: '🇫' },
  { name: 'HTML/CSS', percent: '80%', iconPlaceholder: '3️⃣' },
  { name: 'Next.js', percent: '80%', iconPlaceholder: 'N' },
  { name: 'Java Script', percent: '60%', iconPlaceholder: 'JS' },
  { name: 'GitHub', percent: '90%', iconPlaceholder: '🐈' },
];

const SkillItem = ({ name, percent, iconPlaceholder }: { name: string, percent: string, iconPlaceholder: string }) => {
  const isDarkIcon = name === 'Next.js' || name === 'GitHub';
  const iconColor = isDarkIcon ? 'text-white' : 'text-[#61DAFB]'; 
  const percentColor = 'text-[#ff7f2a]';
  
  const circleStyle = {
    border: '2px solid #ff7f2a', 
    boxShadow: '0 0 10px rgba(255, 127, 42, 0.3)',
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className="w-28 h-28 rounded-full flex flex-col items-center justify-center p-2"
        style={circleStyle}
      >
        <span className={`text-5xl font-extrabold ${iconColor}`}>
          {iconPlaceholder}
        </span>
        <span className={`text-lg font-bold ${percentColor} mt-1`}>{percent}</span>
      </div>
      <p className="text-white text-base mt-2">{name}</p>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <div className="min-h-screen p-8 sm:p-16 bg-[#1a1a1a] text-white">
      
      <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-12">
        My <span className="text-[#ff7f2a]">Skills</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-12">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
      
    </div>
  );
}
