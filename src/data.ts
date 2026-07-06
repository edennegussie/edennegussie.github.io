export const profile = {
  name: "Eden N. Mekuria",
  role: "Full-Stack Software Developer",
  location: "Addis Ababa, Ethiopia",
  email: "educasmail@gmail.com",
  phone: "+251 911 815 359",
  altPhone: "+1 623 239 2406",
  linkedin: "https://www.linkedin.com/in/eden-mekuria",
  cvUrl: "/EdenCV.pdf",
  tagline:
    "I'm a full-stack developer driven by social impact. For over 8 years, I've built data-driven web applications for the humanitarian sector; now, exploring how to push that impact further, across new problems and new sectors, while experimenting with AI.",
  summary:
    `I am a skilled Software Developer with over 8 years of experience in the design, implementation, and maintenance of web applications; specializing
     in Full-stack web development. I build scalable backend services and responsive front-end interfaces with TypeScript, JavaScript, React, Angular,
      .NET, Node.js, Python, and PHP. I'm proficient in database tools such as PostgreSQL & MySQL to support data management, optimization, and cross-platform 
      synchronization. I specialize in Monotoring and Evaluation (M&E), Grants Management System and Sponsorship apps; but I am able to adapt quickly to new projects and deliver high-quality solutions.`,
  summarySecondary:
    `My work covers the full lifecycle: developing new features, building responsive interfaces, backend services and APIs, designing database 
    schemas, writing queries and ETL, troubleshooting and fixing bugs, writing tests, ensuring data security and integrity, and managing releases
     and deployment. Along the way I've worked closely with architects, business analysts, stakeholders, project managers, QAs, and fellow 
     developers. Recently, I've been exploring AI to build AI-powered applications. I also embrace AI-enabled tools like Cursor and Copilot to improve
      productivity and code quality, while keeping strong governance, security, and architectural discipline.`,
};

export const drive = {
  heading: "What drives me",
  body: [`I am driven by work that improves societal well-being and livelihoods. For most of my career, that has meant contributing to technical 
    solutions for humanitarian organizations; i.e. developing systems that support field programs and help reach communities. That said, I am open
     to new industries and to tackling different sets of challenges.`
      ],
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "C#", "Python", "PHP"],
  },
  {
    group: "Frontend",
    items: ["React", "Angular", "AngularJS", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: [".NET Core", "Node.js", "PHP (Laravel)"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SOQL", "Databricks"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Google Cloud Platform", "Docker", "Azure Cloud Services", "CI/CD (Bitbucket Pipelines)"],
  },
  {
    group: "CRM",
    items: ["Salesforce CRM", "Apex", "LWC", "SOQL"],
  },
  {
    group: "Tools & Practices",
    items: [
      "Jira",
      "Git/GitHub/Bitbucket",
      "Postman",
      "Cursor",
      "Claude & Copilot (AI-assisted development)",
      "Windows/Linux OS",
      "Agile-Scrum",
      "RESTful APIs",
      "Confluence documentation",
      "Figma",
    ],
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
    name: "Worldlink",
    tagline: "M&E and GMS platform",
    description:
      "An M&E and GMS app used for donor and award management, data collection, and progress tracking of field programs.",
    tags: [
      "JavaScript",
      "Angular",
      "AngularJS",
      "PHP",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "Jasmine",
      "Docker",
      "Azure App Services",
      "RESTful APIs",
      "Bitbucket Pipelines",
    ],
    link: "https://wl3.fh.org/",
  },
  {
    name: "Ecosystem",
    tagline: "Household and sponsorship management",
    description:
      "An application for household and children-under-sponsorship management.",
    tags: [
      "React",
      ".NET Core",
      "C#",
      "Entity Framework Core",
      "AWS EC2",
      "AWS S3",
      "REST APIs",
      "Figma",
    ],
  },
  {
    name: "AiQA",
    tagline: "AI-powered QA for sponsor correspondence",
    description:
      "An AI-powered QA application that reviews letters and cards written by sponsored children to their sponsors. It integrates Playwright for browser automation and OpenAI for content validation, running the full set of QA checks and approving submissions without human intervention.",
    tags: ["Playwright", "OpenAI API (GPT-4)", "Node.js", "TypeScript", "Prompt Engineering"],
    ai: true,
  },
  {
    name: "Vision",
    tagline: "AI photo processing for field offices",
    description:
      "A software tool that utilizes AI (Azure Computer Vision) for face and body recognition, and performs automatic processing of child photos from field offices to reposition and align them according to the organization standards.",
    tags: [
      "Pug",
      "jQuery",
      "Node.js",
      "Express",
      "MSSQL",
      "Axios",
      "Mocha",
      "Chai",
      "Azure Computer Vision API",
      "Docker",
    ],
    link: "https://vision.fh.org/",
    ai: true,
  },
  {
    name: "OVAS",
    tagline: "Volunteer management platform",
    description:
      "A volunteer management platform designed for FH staff to register and manage volunteers who do not have email addresses. It allows assigning unique IDs, linking with devices, and generating scannable badges.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "React Router",
      "QR/barcode generation library",
      "REST APIs",
    ],
  },
  {
    name: "ExportEd",
    tagline: "Salesforce ETL middleware",
    description:
      "A custom standalone Node.js middleware which listens to platform events from Salesforce, runs a SOQL-based ETL process, generates zipped CSV outputs, and writes processed data back to Salesforce.",
    tags: ["Node.js", "Salesforce Platform Events", "SOQL", "Salesforce REST/Bulk API", "JSZip", "Cron scheduling"],
  },
  {
    name: "Salesforce CRM",
    tagline: "Sponsorship and donation management",
    description:
      "CRM used to manage sponsors, children, sponsorships, and donations, enabling tracking and dynamic association between sponsors and beneficiaries.",
    tags: [
      "Apex",
      "Lightning Web Components (LWC)",
      "SOQL",
      "Batching tool",
      "Salesforce Flow",
      "Salesforce Data Loader",
    ],
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
    role: "Software Developer",
    company: "Food for the Hungry Inc.",
    sector: "International NGO",
    period: "Apr 2019 to Present",
    points: [
      "Develop, maintain, and deploy enterprise web applications (Worldlink, OVAS, Vision), including new features, UX improvements, troubleshooting, and bug fixes.",
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
  {
    degree: "Certification - JavaScript Algorithms and Data Structures",
    school: "freeCodeCamp",
    detail: "July 2022",
  },
];

export const strengths = [
  {
    title: "Web app development",
    body: `I develop and maintain enterprise web applications covering UI/UX, APIs, and databases; and implementing new features, enhancing functionality, writing test scripts, fixing bugs, and managing releases.` 
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
    title: "Adaptable and self-driven",
    body: "I pick up new technologies and frameworks quickly and have acted as team leader on several occasions.",
  },
];
