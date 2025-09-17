import React from 'react';
import { BookOpenIcon, CodeBracketIcon, SparklesIcon, AcademicCapIcon, BriefcaseIcon, AtSymbolIcon } from './components/icons';

export const education = [
  {
    institution: 'University of Management and Technology (UMT), Lahore',
    degree: 'BS Computer Science',
    duration: '2022 – Present',
  },
  {
    institution: 'Government Boys Degree College Barnala',
    degree: 'FSc Pre-Engineering',
    duration: '2019 – 2022',
  },
  {
    institution: 'Garrison Science College Barnala',
    degree: 'Matriculation',
    duration: '2017 – 2019',
  },
];

// FIX: Replaced JSX syntax with component references to be valid in a .ts file. The icon property now holds the component function, not a JSX element.
export const skills: { name: string; icon: React.FC }[] = [
    { name: 'HTML, CSS, JS', icon: CodeBracketIcon },
    { name: 'Node.js & SQL', icon: CodeBracketIcon },
    { name: 'Networking', icon: AtSymbolIcon },
    { name: 'AI & Data Science', icon: SparklesIcon },
    { name: 'Cybersecurity', icon: BriefcaseIcon },
    { name: 'React & TypeScript', icon: CodeBracketIcon },
    { name: 'Cloud Computing', icon: BookOpenIcon },
    { name: 'Git & GitHub', icon: CodeBracketIcon }
];

export const projects = [
  {
    name: 'Bank Management System',
    description: 'Developed using SQL, Node.js, and HTML/CSS with full functionality for accounts, transactions, and user management.',
  },
  {
    name: 'University Lab Simulation',
    description: 'Built in Cisco Packet Tracer with VLANs, ACLs, Wi-Fi security, and routing protocols.',
  },
  {
    name: 'Course Registration System',
    description: 'Web-based app for managing course registration, prerequisites, semester schedules, and grading policies.',
  },
  {
    name: 'Stock Prediction Model',
    description: 'Implemented in Google Colab using advanced machine learning techniques for financial forecasting.',
  },
];

export const certificates = [
  { name: 'Full Tuition Fee Scholarship – UMT' },
  { name: 'Cisco Networking Basics' },
  { name: 'Cloud Computing Fundamentals' },
  { name: 'SQL & Database Systems' },
  { name: 'Web Development Essentials' },
  { name: 'AI & Data Science Introduction' },
];

export const experience = {
    company: 'SkillCraft Technology',
    role: 'Virtual Internship',
    description: 'Assisted in database design, web development, and basic cybersecurity tasks. Gained hands-on experience with collaborative coding, GitHub, and SQL-based systems.'
};