
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-10 border-l-4 border-amber-500 pl-4">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
