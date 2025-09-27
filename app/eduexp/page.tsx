import React from 'react';

const timelineData = [
  {
    type: 'experience',
    yearRange: '2022 - Present',
    title: 'UI/UX Designer',
    subtitle: 'Freelance',
  },
  {
    type: 'experience',
    title: 'Fullstack Web Developer',
    subtitle: 'Freelance',
  },
  {
    type: 'education',
    yearRange: '2022 - 2025',
    title: 'Bachelor Degree in Technology Digital and Innovation',
    subtitle: 'Southeast Asia University',
  },
  {
    type: 'education',
    yearRange: '2016 - 2021',
    title: 'High school',
    subtitle: 'Taweethapiseck School',
  },
];

const TimelineItem = ({ data }: { data: typeof timelineData[number]; }) => {
  const isExperience = data.type === 'experience';
  
  return (
    <div className="mb-10 last:mb-0">
      {data.yearRange && (
        <p className={`text-base font-semibold mb-1 ${isExperience ? 'text-orange-500' : 'text-gray-400'}`}>
          {data.yearRange}
        </p>
      )}
      <h3 className="text-xl font-extrabold text-white leading-snug">
        {data.title}
      </h3>
      <p className="text-gray-400 text-base mt-0.5">
        {data.subtitle}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
      `}</style>
      
      <div className="min-h-screen bg-[#1E1E1E] text-white flex items-center justify-center p-6 sm:p-8 font-['Montserrat']">
        <div className="max-w-xl w-full py-12">
          
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">
            Education &amp; 
            <span className="text-orange-500">Experience</span>
          </h2>

          {/* ปรับใช้ flex/block แทน grid เพื่อให้เรียงลงมาเป็นคอลัมน์เดียว */}
          <div className="flex flex-col"> 
            {timelineData.map((item, index) => (
              <TimelineItem key={index} data={item} />
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default App;