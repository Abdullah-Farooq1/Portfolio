
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
      <form action="mailto:mabdullahfarooq06@gmail.com" method="POST" encType="text/plain" className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Abdullah Farooq"
            required
            className="mt-1 block w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            required
            className="mt-1 block w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Your message here..."
            required
            className="mt-1 block w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
        >
          Send Message
        </button>
      </form>
      <div className="mt-10 text-center">
        <p className="text-slate-600 dark:text-slate-400">Or reach out directly:</p>
        <div className="flex justify-center items-center space-x-6 mt-4">
          <a href="mailto:mabdullahfarooq06@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-colors" aria-label="Email">
            <MailIcon />
          </a>
          <a href="https://www.linkedin.com/in/abdullah-farooq-6b0b2637a" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-colors" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/Abdullah-Farooq1" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-colors" aria-label="GitHub">
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
