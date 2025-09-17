import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { education, skills, projects, certificates, experience } from './constants';
import { BookOpenIcon, CodeBracketIcon, SparklesIcon, AcademicCapIcon, BriefcaseIcon, AtSymbolIcon } from './components/icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Header />

        <Section id="about" title="About Me">
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-center leading-relaxed">
            Hello! I’m Abdullah Farooq, a 5th semester Computer Science student at UMT. 
            I’m passionate about Artificial Intelligence, Cloud Computing, and Web Development. 
            I enjoy building innovative projects like Bank Management Systems, Cisco Packet Tracer Lab Simulations, 
            and Course Registration Systems. My goal is to apply my skills to create impactful digital solutions.
          </p>
        </Section>

        <Section id="education" title="Education">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {education.map((item, index) => (
              <Card key={index} className="flex flex-col">
                 <div className="flex-shrink-0 text-amber-500">
                    <AcademicCapIcon />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.institution}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">{item.degree}</p>
                  <p className="text-sm text-slate-500 mt-2">{item.duration}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* FIX: The skill.icon is now a component reference. */}
            {/* It must be assigned to a capitalized variable to be rendered as a JSX component. */}
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md flex items-center space-x-4 transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-amber-500"><Icon /></div>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index}>
                <div className="flex items-center mb-3 text-amber-500">
                  <CodeBracketIcon />
                  <h3 className="ml-2 text-2xl font-bold text-slate-800 dark:text-white">{project.name}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
              </Card>
            ))}
          </div>
        </Section>
        
        <Section id="certificates" title="Certificates">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center text-amber-500 mb-3"><SparklesIcon /></div>
                <h3 className="font-semibold text-slate-700 dark:text-slate-200">{cert.name}</h3>
              </Card>
            ))}
          </div>
        </Section>
        
        <Section id="experience" title="Experience">
          <Card>
            <div className="flex items-center mb-3 text-amber-500">
                <BriefcaseIcon />
                <h3 className="ml-2 text-2xl font-bold text-slate-800 dark:text-white">{experience.company}</h3>
            </div>
            <p className="italic text-slate-500 dark:text-slate-400 mb-4">{experience.role}</p>
            <p className="text-slate-600 dark:text-slate-300">{experience.description}</p>
          </Card>
        </Section>
        
        <Section id="contact" title="Contact Me">
            <Contact />
        </Section>

      </main>
      <Footer />
    </div>
  );
};

export default App;