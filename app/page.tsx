import React from 'react';

const content = {
  accentText: 'Lets Work ',
  accentWord: 'Together !',
  greeting: 'Hi From ',
  name: 'Thayakorn',
  title1: ', Interactive Designer & Fullstack',
  title2: 'Web Developer',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem.',
  stat1Number: '3+',
  stat1Label: 'Years of Experience',
  stat2Number: '10+',
  stat2Label: 'Projects Completed',
};

const App = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
      `}</style>
      
      <div className="min-h-screen bg-[#1E1E1E] text-white flex items-center justify-center p-6 sm:p-8 font-['Montserrat']">
        <div className="max-w-5xl w-full py-12">
          
          <p className="text-base text-gray-300 mb-6 font-semibold">
            {content.accentText}
            <span className="text-orange-500 font-extrabold">{content.accentWord}</span>
          </p>

          <h1 className="text-4xl leading-snug sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
            {content.greeting}
            <span className="text-orange-500 font-extrabold">
              {content.name}
            </span>
            {content.title1}
            <span className="block mt-2 sm:mt-0">
               {content.title2}
            </span>
          </h1>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-12 font-medium">
            {content.description}
          </p>

          <div className="flex space-x-12 sm:space-x-20">
            
            <div className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-1">
                {content.stat1Number}
              </span>
              <span className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                {content.stat1Label}
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-1">
                {content.stat2Number}
              </span>
              <span className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                {content.stat2Label}
              </span>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default App;
