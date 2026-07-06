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
    link: "https://fhecosystem.com/",
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
    link: "https://foodforthehungry.lightning.force.com/one/one.app",
  },
  {
    name: "Z-PlusERP",
    tagline: "ERP, HR, payroll, and attendance management",
    description:
      "A web-based ERP application integrating Human Resources, Payroll, and Attendance management systems.",
    tags: [
      "TypeScript",
      "Angular 6",
      "Node.js",
      "Angular Material",
      "HTML5/CSS3",
      "RESTful APIs",
      "Git",
    ],
  },
  {
    name: "I/O Simulator",
    tagline: "Microcontroller input/output simulator",
    description:
      "A simulator to visualize microcontroller (uC) input/output behavior for testing and demonstration purposes.",
    tags: [
      "C#",
      ".NET",
      "C",
      "Windows Forms/WPF",
      "Proteus",
      "Multisim",
      "Visual Studio",
    ],
  },
  {
    name: "Thermostat",
    tagline: "Agricultural temperature monitoring device",
    description:
      "A device that detects and displays temperature change in real time for agricultural monitoring applications.",
    tags: [
      "C (Embedded C)",
      "Thermocouple",
      "LCD",
      "MCU",
      "ADC",
      "Proteus",
      "Multisim",
      "PCB Design",
    ],
  },
  {
    name: "MedElert",
    tagline: "Tele-health medication scheduling portal",
    description:
      "A tele-health web application enabling doctors and pharmacists to remotely set medication schedules on pill dispensers, alerting caregivers if patients miss doses.",
    tags: [
      "JavaScript",
      "AngularJS",
      "HTML5/CSS3",
      "Bootstrap",
      "RESTful APIs",
      "Git",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  sector: string;
  period: string;
  projects: string[];
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "Food for the Hungry Inc.",
    sector: "INGO, USA, Remote",
    period: "Apr 2019 to Present",
    projects: [
      "Worldlink",
      "Ecosystem",
      "AiQA",
      "Vision",
      "OVAS",
      "ExportEd",
      "Salesforce CRM",
    ],
    points: [
      "Design, develop, and maintain enterprise web applications, delivering responsive frontends, backend systems, and APIs; implementing new features and enhancing existing functionality, writing test scripts, fixing bugs, managing releases and deployment.",
      "Implement APIs, middleware, and integrations for data addressing data integrity issues across internal platforms such as WL3, Ecosystem and Salesforce.",
      "Design and optimize relational databases (MySQL, PostgreSQL, MSSQL), implement ETL processes, and ensure data accuracy across systems.",
      "Validate Sponsor, Sponsorship, Participant, Area, and Media datasets on a daily and weekly basis to ensure data accuracy, consistency, and completeness.",
      "Conduct technical research for new marketplace platform initiatives by analyzing Business Requirements Documents (BRDs), generating proof-of-concepts (PoCs), building prototypes, and Minimum Viable Products (MVPs), validating technical feasibility, user workflows, and solution approaches prior to full-scale development.",
      "Manage deployments via Bitbucket Pipelines and Docker; maintain technical documentation in Confluence.",
      "Lead UI/UX design efforts for new initiatives such as Ecosystem, building wireframes, and defining functional requirements in collaboration with stakeholders.",
      "Deliver Salesforce solutions by implementing Apex changes and LWC enhancements to improve functionality, user interface and experience.",
      "Participate in Agile/Scrum ceremonies (sprint planning, stand-ups, retrospectives) and collaborate cross-functionally with M&E, program, and donor-relations teams to gather and refine requirements.",
      "Conduct code reviews and uphold coding standards; monitor production systems and respond to incidents.",
    ],
  },
  {
    role: "Front-end Developer",
    company: "Zerihun Associates Plc.",
    sector: "IT Consultancy",
    period: "Sep 2018 to Apr 2019",
    projects: ["Z-PlusERP"],
    points: [
      "Developed responsive UIs and reusable, feature-specific components.",
      "Created unit tests to validate component and feature behavior.",
      "Contributed to the design and implementation of REST APIs consumed by the frontend.",
      "Identified and resolved bugs across the application.",
      "Prepared technical documentation and user manuals.",
      "Collaborated with backend developers and participated in Agile/Scrum ceremonies (sprint planning, stand-ups).",
      "Used Git for version control and participated in code reviews within the team.",
    ],
  },
  {
    role: "Software Developer",
    company: "Advanced Defense Concepts (ADC) R&D",
    sector: "R&D",
    period: "Feb 2015 to Aug 2016",
    projects: ["I/O Simulator", "Thermostat"],
    points: [
      "Developed a web portal for controller-based applications.",
      "Programmed ICs and microcontrollers, including LCDs, thermostats, and inverters.",
      "Designed schematics for various electrical devices and PCB layouts.",
      "Wrote and tested embedded firmware, and debugged/validated circuits on the bench.",
      "Documented hardware-software interface specifications and collaborated with hardware engineers on system integration.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "iCogLabs",
    sector: "R&D",
    period: "Nov 2014 to Feb 2015",
    projects: ["MedElert"],
    points: [
      "Developed the web portal for the MedElert platform.",
      "Debugged and addressed issues across the application.",
      "Translated design mock-ups into functional UI.",
      "Collaborated closely with backend developers on API integration.",
      "Manually tested the application, including cross-browser and responsive-layout checks.",
    ],
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

export const certifications: { degree: string; school: string; detail?: string }[] = [
  {
    degree: "Certification - JavaScript Algorithms and Data Structures",
    school: "freeCodeCamp",
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
