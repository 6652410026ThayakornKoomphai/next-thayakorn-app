import React from 'react';
const App = () => {
  interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  className?: string;
}

  const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', className = '' }) => (
    <div className={`relative ${className}`}>
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-orange-500 transition-all duration-300 pointer-events-none"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-1 block w-full bg-transparent border-0 border-b border-gray-500 focus:border-b-2 focus:border-orange-500 focus:ring-0 text-white pb-1 transition-all duration-300 placeholder-transparent outline-none"
      />
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
      `}</style>
      
      <div className="min-h-screen bg-[#1E1E1E] text-white flex items-center justify-center p-6 sm:p-8 font-['Montserrat']">
        <div className="max-w-4xl w-full py-12">
          
          <h2 className="text-5xl font-extrabold mb-1">
            Contact <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-lg text-white mb-10">
            Let{"'"}s get in touch!
          </p>

          <form className="space-y-10">
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              <InputField label="Email" name="email" type="email" />
              <InputField label="Phone" name="phone" type="tel" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              <InputField label="Name" name="name" />
              <InputField label="Address" name="address" />
            </div>

            <div>
              <label 
                htmlFor="content" 
                className="block text-sm font-medium text-orange-500"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                rows= {4}
                className="mt-1 block w-full bg-transparent border-0 border-b border-gray-500 focus:border-b-2 focus:border-orange-500 focus:ring-0 text-white pt-2 pb-1 transition-all duration-300 outline-none resize-none"
              ></textarea>
            </div>
            
            <div className="pt-4">
              <label className="flex items-center text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  className="form-checkbox h-5 w-5 text-orange-500 bg-transparent border-gray-500 rounded focus:ring-orange-500"
                />
                <span className="ml-3 text-base">I would like to receive the newsletter.</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full sm:w-64 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg shadow-lg transition-colors duration-300 text-lg"
            >
              Submit
            </button>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default App;
