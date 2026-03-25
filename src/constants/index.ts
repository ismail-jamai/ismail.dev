
export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Services', href: '#services' },
  { name: 'Tech', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE = [
  {
    title: 'Web Developer Intern',
    company: 'OCP Group',
    period: 'April 2025',
    description: 'Developed a Personnel Attendance Management (Clocking) Application. Responsible for implementing the frontend and backend logic for employee check-ins and check-outs.',
    tags: ['React', 'Laravel', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Full Stack Developer (Academic Projects)',
    company: 'ISTA NTIC Safi',
    period: '2023 - 2025',
    description: 'Built several comprehensive web applications including e-commerce platforms and reservation systems as part of the academic curriculum.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
];

export const EDUCATION = [
  {
    degree: 'Specialized Technician in Digital Development (Full Stack)',
    school: 'ISTA NTIC Safi',
    period: '2023 - 2025',
    description: 'Comprehensive training in modern web development, database management, and software architecture.',
  },
  {
    degree: 'Baccalaureate in Mathematical Sciences A',
    school: 'Lycée El Khawarizmi - Safi',
    period: '2021',
    description: 'Focused on advanced mathematics and physics, providing a strong analytical foundation for engineering.',
  },
];

export const LANGUAGES = [
  { name: 'Arabe', level: 90 },
  { name: 'Français', level: 40 },
  { name: 'English', level: 75 }, // Added English as a default for dev profile
];

export const SERVICES = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end application development with modern stacks like MERN or T3. Focused on clean code and scalability.',
    icon: 'Terminal',
  },
  {
    title: 'UI/UX Design',
    description: 'Transforming complex ideas into intuitive, high-fidelity interfaces with a focus on user experience and accessibility.',
    icon: 'Layout',
  },
  {
    title: 'Backend APIs',
    description: 'Building robust, secure, and performant RESTful or GraphQL APIs with thorough documentation and testing.',
    icon: 'Server',
  },
  {
    title: 'Performance Tuning',
    description: 'Optimizing web applications for maximum speed, SEO ranking, and Core Web Vitals compliance.',
    icon: 'Zap',
  },
];

export const TECH_STACK = {
  languages: [
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'PHP', icon: 'PHP' },
    { name: 'Python', icon: 'Python' },
    { name: 'HTML/CSS', icon: 'HTML' },
  ],
  frameworks: [
    { name: 'React.js', icon: 'React' },
    { name: 'Node.js', icon: 'Nodejs' },
    { name: 'Laravel', icon: 'Laravel' },
    { name: 'Express', icon: 'Express' },
    { name: 'Bootstrap', icon: 'Bootstrap' },
    { name: 'Tailwind CSS', icon: 'Tailwind' },
  ],
  databases: [
    { name: 'MySQL', icon: 'MySQL' },
    { name: 'MongoDB', icon: 'Mongo' },
    { name: 'PostgreSQL', icon: 'Postgres' },
  ],
  tools: [
    { name: 'Git & GitHub', icon: 'GitHub' },
    { name: 'GitLab', icon: 'GitLab' },
    { name: 'Docker', icon: 'Docker' },
    { name: 'Agile (Scrum)', icon: 'Agile' },
  ],
};

export const PROJECTS = [
  {
    title: 'Personnel Attendance System (OCP)',
    description: 'A comprehensive clocking and attendance tracking platform designed for industrial personnel management at OCP Group. Features real-time entry/exit logging, automated reporting for HR, and a secure administrative dashboard for data visualization.',
    image: '/images/ocp.jpg',
    tags: ['React', 'Laravel', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/ismail-jamai/Syst-me-de-Gestion-du-Temps-et-des-Absences',
    demo: 'https://demo.example.com',
    fullStack: 'Built a RESTful API with Laravel for high-concurrency logging and a responsive React dashboard for real-time monitoring.'
  },
  {
    title: 'Digital Asset & Storage Manager',
    description: 'A secure cloud-storage solution designed for efficient file organization and retrieval. Implements multi-user authentication, file categorization, and real-time storage status tracking for seamless digital management.',
    image: '/images/image.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    github: 'https://github.com/ismail-jamai',
    demo: 'https://demo.example.com',
    fullStack: 'Integrated MongoDB for metadata storage and implemented JWT-based authentication across a Node.js/Express backend.'
  },
  {
    title: 'Advanced Calculations Engine',
    description: 'A specialized mathematical processing application for complex algebraic and functional computations. Features a clean interface and high-precision results for engineering-level calculations.',
    image: '/images/calculations.jpg',
    tags: ['PHP', 'JavaScript', 'CSS', 'Algorithms'],
    github: 'https://github.com/ismail-jamai/calculations',
    demo: 'https://demo.example.com',
    fullStack: 'Developed core mathematical logic in PHP and implemented a custom JavaScript-based interface for interactive inputs.'
  },
];
