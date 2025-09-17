
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-sky-700 to-slate-800 text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight animate-fadeInDown">
          Abdullah Farooq
        </h1>
        <p className="mt-4 text-lg md:text-xl text-sky-200 animate-fadeInUp">
          Computer Science Student | AI & Data Science Enthusiast
        </p>
      </div>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown { animation: fadeInDown 1s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out 0.5s forwards; opacity: 0; }
      `}</style>
    </header>
  );
};

export default Header;
