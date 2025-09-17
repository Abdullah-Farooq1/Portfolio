
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-slate-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Abdullah Farooq | Built with ❤️ and React</p>
      </div>
    </footer>
  );
};

export default Footer;
