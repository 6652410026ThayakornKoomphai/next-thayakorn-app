import React from 'react';

const content = {
  title: 'About ',
  titleAccent: 'Me',
  headline: 'I find fulfillment in blending visual design with the power of coding to create meaningful experiences.',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem.',
};

const App = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
      `}</style>
      
      <div className="min-h-screen bg-[#1E1E1E] text-white flex items-center justify-center p-6 sm:p-8 font-['Montserrat']">
        <div className="max-w-5xl w-full py-12">
          
          <h2 className="text-xl sm:text-2xl font-bold mb-8">
            {content.title}
            <span className="text-orange-500">{content.titleAccent}</span>
          </h2>

          <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-snug max-w-4xl mb-10">
            {content.headline}
          </p>

          <p className="text-gray-400 text-base sm:text-lg max-w-4xl font-medium leading-relaxed">
            {content.description}
          </p>
          
        </div>
      </div>
    </>
  );
};

export default App;
