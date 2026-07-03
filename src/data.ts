export const profile = {
  name: "Eden N. Mekuria",
  role: "Full-Stack Software Developer",
  location: "Addis Ababa, Ethiopia",
  email: "educasmail@gmail.com",
  phone: "+251 911 815 359",
  altPhone: "+1 623 239 2406",
  linkedin: "https://www.linkedin.com/in/eden-mekuria",
  cvUrl: "/CV_Eden_SoftwareDeveloper.pdf",
  tagline:
    "I'm a full-stack developer driven by social impact. For over 8 years I've built data-driven web applications for the humanitarian sector, and I'm now exploring how AI can push that impact further, across new problems and new sectors.",
  summary:
    "I'm a full-stack software developer with over 8 years of hands-on experience designing and implementing data-driven web applications for the humanitarian sector. I build scalable backend services and responsive front-end interfaces with TypeScript, JavaScript, React, Angular, .NET, Node.js, Python, and PHP, and I'm comfortable across SQL, SOQL, and NoSQL databases for data management, optimization, and cross-platform synchronization. I specialize in M&E and grants management apps, but I adapt quickly to new projects and enjoy delivering high-quality solutions.",
  summarySecondary:
    "My work covers the full lifecycle: developing new features, building responsive interfaces, backend services and APIs, designing database schemas, writing queries and ETL, troubleshooting and fixing bugs, writing tests, ensuring data security and integrity, and managing releases and deployment. Along the way I've worked closely with architects, business analysts, stakeholders, project managers, QAs, and fellow developers, and I've acted as team leader on several occasions. I also embrace AI-enabled tools like Cursor and Copilot to improve productivity and code quality, while keeping strong governance, security, and architectural discipline.",
};

export const drive = {
  heading: "What drives me",
  body: [
    "I got into software because I wanted my work to matter. For most of my career that has meant humanitarian and social-impact organizations, building the systems that help field teams collect data, manage grants, and reach the people they serve.",
    "That mission still sits at my core. I've also learned that the skills behind good social-impact software, like reliability, data integrity, thoughtful UX, and now AI, travel well. I'm curious to explore new sectors and harder problems, and to keep pairing that curiosity with tools like AI to build things that genuinely help people.",
  ],
};

export type FocusArea = {
  icon: "heart" | "sparkles" | "compass";
  title: string;
  body: string;
};

export const focusAreas: FocusArea[] = [
  {
    icon: "heart",
    title: "Social impact at the core",
    body: "8+ years building for humanitarian and mission-driven organizations. I like problems where shipping good software has a real, human payoff.",
  },
  {
    icon: "sparkles",
    title: "Building with AI",
    body: "Exploring AI as both a way to work, with Cursor and Copilot, and as a product capability, from computer vision to automated QA agents.",
  },
  {
    icon: "compass",
    title: "Open to new sectors",
    body: "Rooted in impact, but curious beyond it. I adapt quickly to new domains and want to bring reliable, data-driven engineering to fresh problems.",
  },
];

export const sectors: string[] = [
  "Humanitarian / INGO",
  "Sponsorship & grants",
  "AI & automation",
  "Health tech",
  "IT consultancy",
  "ERP / HR systems",
  "R&D",
  "Agriculture tech",
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C#", "PHP"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Angular", "AngularJS", "Tailwind CSS", "React Query"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", ".NET", "Laravel", "REST APIs", "Prisma"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MS SQL", "MongoDB", "SOQL", "Databricks"],
  },
  {
    group: "Data & Integrity",
    items: ["Data validation", "Reconciliation", "Cross-platform sync", "ETL", "Data governance"],
  },
  {
    group: "AI & Automation",
    items: ["OpenAI", "Playwright", "Azure AI Vision", "Prompt Engineering", "Cursor", "Copilot"],
  },
  {
    group: "Platforms & DevOps",
    items: ["Docker", "Salesforce", "Azure", "Git & Bitbucket", "CI/CD", "Boomi"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  metric?: string;
  link?: string;
  ai?: boolean;
};

export const projects: Project[] = [
  {
    name: "AiQA",
    tagline: "AI-powered QA agent for sponsor correspondence",
    description:
      "An automation tool that reviews letters and cards from sponsored children to their sponsors. Playwright drives the browser workflow while OpenAI validates each item against quality rules, processing around 300 reviews per run with no manual intervention.",
    tags: ["OpenAI", "Playwright", "TypeScript", "Node.js", "Automation"],
    metric: "~300 reviews per run, fully automated",
    ai: true,
  },
  {
    name: "Vision",
    tagline: "AI photo processing for field offices",
    description:
      "A tool that uses Azure Computer Vision for face and body recognition to automatically process child photos from field offices, repositioning and aligning them to the organization's standards.",
    tags: ["Node.js", "Express", "Azure AI", "MSSQL", "Docker"],
    metric: "Automated image-processing workflows",
    link: "https://vision.fh.org/",
    ai: true,
  },
  {
    name: "ExportEd",
    tagline: "Salesforce ETL middleware",
    description:
      "A custom standalone Node.js middleware that listens to Salesforce Platform Events, runs SOQL-based ETL, generates zipped CSV outputs, and writes processed data back to Salesforce, replacing a Boomi-managed process.",
    tags: ["Node.js", "SOQL", "Salesforce", "ETL"],
    metric: "Over $10,000 saved per year",
  },
  {
    name: "Worldlink (wl3)",
    tagline: "M&E and grants management (GMS)",
    description:
      "An M&E and GMS app used for donor and award management, data collection, and progress tracking of field programs. I helped build a single source of truth for grants and improved loading speed through caching and lazy loading.",
    tags: ["Angular", "PHP", "Laravel", "PostgreSQL", "Power BI"],
    metric: "Single source of truth for grants",
    link: "https://wl3.fh.org/",
  },
  {
    name: "eRIS",
    tagline: "External relations information system",
    description:
      "Full-stack work on eRIS, an enterprise external relations platform built alongside the M&E and GMS suite. It supports field data capture, program reporting, and external relations workflows.",
    tags: ["Angular", "PHP", "Laravel", "PostgreSQL", "Full-Stack"],
    metric: "Part of the M&E, GMS & eRIS suite",
  },
  {
    name: "OVAS",
    tagline: "Volunteer management platform",
    description:
      "A volunteer management platform for staff to register and manage volunteers without email addresses, assigning unique IDs, linking devices, and generating scannable badges.",
    tags: ["React", "TypeScript", "React Query", "Tailwind"],
    metric: "Scannable badges for field volunteers",
  },
  {
    name: "FH Salesforce CRM",
    tagline: "Sponsorship and donation management",
    description:
      "Salesforce CRM solutions to manage sponsors, children, sponsorships, and donations, with dynamic associations between sponsors and beneficiaries. Delivered through Apex and Lightning Web Components.",
    tags: ["Apex", "LWC", "SOQL"],
    metric: "Sponsor and beneficiary tracking",
  },
];

export type Experience = {
  role: string;
  company: string;
  sector: string;
  period: string;
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "ICT Senior Officer, Software Developer",
    company: "Food for the Hungry Inc.",
    sector: "International NGO",
    period: "Apr 2019 to Present",
    points: [
      "Develop, maintain, and deploy enterprise web applications (Worldlink, eRIS, OVAS, Vision), including new features, UX improvements, troubleshooting, and bug fixes.",
      "Built ExportEd, a custom Salesforce ETL middleware that saved the organization over $10,000 per year.",
      "Built AiQA, an AI-powered QA agent using Playwright and OpenAI to automate review of sponsor correspondence.",
      "Ensured accurate and reliable Sponsorship, Child, and Media data by validating datasets, resolving discrepancies, and running daily synchronization across three platforms.",
      "Optimized Worldlink performance by reducing file sizes, using caching techniques, and implementing lazy loading.",
      "Delivered Salesforce solutions with Apex and LWC, and integrated Power BI for data visualization and informed decision making.",
    ],
    stack: ["React", "Angular", "Node.js", "Laravel", "Salesforce", "Azure", "Docker"],
  },
  {
    role: "Front-end Developer",
    company: "Zerihun Associates Plc.",
    sector: "IT Consultancy",
    period: "Sep 2018 to Apr 2019",
    points: [
      "Developed a web-based ERP application called Z-plusERP, integrating Human Resources, Payroll, and Attendance management.",
      "Set up the initial design elements, tech stack, and repository structure for the application.",
      "Developed responsive UIs, created unit tests, added feature-specific components, and contributed to the REST API.",
    ],
    stack: ["TypeScript", "Angular 6", "Node.js"],
  },
  {
    role: "Software Developer",
    company: "Advanced Defense Concepts (ADC) R&D",
    sector: "Research & Development",
    period: "Feb 2015 to Aug 2016",
    points: [
      "Developed microcontroller-based applications used in the agriculture sector.",
      "Led the integration of different submodules to form an automated cohesive system.",
      "Built web portals for controller-based applications and designed PCB layouts.",
    ],
    stack: ["C", "C#", ".NET"],
  },
  {
    role: "Frontend Developer",
    company: "iCogLabs",
    sector: "Research & Development",
    period: "Nov 2014 to Feb 2015",
    points: [
      "Developed the web portal for MedElert, a tele-health project that enabled remote medication scheduling on pill-dispensers.",
      "Translated mock-ups into UI, collaborated with backend developers, and tested the application.",
    ],
    stack: ["JavaScript", "AngularJS", "REST"],
  },
];

export const education = [
  {
    degree: "M.Eng. in Information & Communication Engineering",
    school:
      "University of Electronic Science and Technology of China (UESTC), Chengdu",
    detail: "GPA 3.94",
  },
  {
    degree: "B.Sc. in Electrical and Computer Engineering",
    school: "Addis Ababa University, Ethiopia",
    detail: "Major GPA 3.21",
  },
];

export const certifications = [
  "freeCodeCamp, JavaScript Algorithms and Data Structures",
  "Outstanding International Student Award (participant)",
  "Academic Achievement Awards, 2nd class winner",
];

export const strengths = [
  {
    title: "UI/UX & API development",
    body: "I build responsive, accessible front-end interfaces and design the backend services and REST APIs that power them, from database schema to endpoint.",
  },
  {
    title: "Data integrity",
    body: "I work on validating datasets, resolving discrepancies, and keeping data accurate and consistent across multiple platforms.",
  },
  {
    title: "Attention to detail",
    body: "I have a keen eye for detail, which helps me maintain high code quality and identify and resolve bugs effectively.",
  },
  {
    title: "AI-assisted development",
    body: "I use Cursor and Copilot to work more productively while keeping governance, security, and architecture in mind.",
  },
  {
    title: "Cross-cultural collaboration",
    body: "I have worked with diverse teams both remotely and in person, across a wide range of cultural backgrounds.",
  },
  {
    title: "Adaptable and self-driven",
    body: "I pick up new technologies and frameworks quickly and have acted as team leader on several occasions.",
  },
];
