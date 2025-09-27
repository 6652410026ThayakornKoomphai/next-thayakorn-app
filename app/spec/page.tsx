import React from 'react';
import { Code, Globe, PenTool } from 'lucide-react';

const Specializations = () => {
  const specializationsData = [
    {
      title: "Front-end developer",
      description: "Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.",
      icon: <Code className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "UI/UX Designer",
      description: "UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.",
      icon: <Globe className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Graphic designer",
      description: "As a graphic designer, I transform ideas into visually striking and impactful designs.",
      icon: <PenTool className="w-6 h-6 text-orange-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] p-4 sm:p-8 flex justify-center items-start pt-16 font-inter">
      <div className="w-full max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-white">
          My <span className="text-orange-500">Specializations</span>
        </h1>

        <div className="space-y-6">
          {specializationsData.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-900 rounded-xl border border-transparent hover:border-orange-500 transition duration-300 shadow-lg"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-semibold text-white">
                  {item.title}
                </h2>
                {item.icon}
              </div>
              <p className="text-stone-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specializations;
