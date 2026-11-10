export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  previews: {
    src: string;
    alt: string;
    label: string;
  }[];
  visualSteps: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Botox & Filler Lab",
    category: "Professional Project",
    description:
      "A website for a U.S.-based aesthetics clinic, developed with the Owen Group team to deliver a clear, polished online experience.",
    stack: ["Web Development", "Frontend", "Maintenance"],
    links: [{ label: "Visit website", url: "https://botoxandfillerlab.com/" }],
    previews: [
      {
        src: "/projects/botox-filler-lab.png",
        alt: "Botox and Filler Lab website landing page",
        label: "Botox & Filler Lab",
      },
    ],
    visualSteps: [],
    featured: true,
  },
  {
    title: "Reddith",
    category: "Academic Project",
    description:
      "A campus community and discussion forum designed to help students connect, exchange ideas, and share information.",
    stack: ["Full-stack", "Community Platform", "Responsive UI"],
    links: [
      {
        label: "Visit website",
        url: "https://plum-giraffe-248987.hostingersite.com/",
      },
    ],
    previews: [
      {
        src: "/projects/reddith.png",
        alt: "Reddith campus community and discussion forum landing page",
        label: "Reddith",
      },
    ],
    visualSteps: [],
    featured: true,
  },
  {
    title: "Village Service Digitalization",
    category: "Community Service Program (KKN) · 5 Websites",
    description:
      "Five websites developed to support public services, information, citizen complaints, and mapping at the village administrative level in Parepare City, Indonesia.",
    stack: ["Next.js", "React", "Digital Public Service"],
    links: [
      { label: "KILAT", url: "https://kilat-watsor.vercel.app/" },
      { label: "SIMPEL", url: "https://simpel-watsor.vercel.app/" },
      { label: "SUARA KAMI", url: "https://suarakami-watsor.vercel.app/" },
      { label: "PASTI BISA", url: "https://pastibisa-watsor.vercel.app/" },
      { label: "PANTAS KEREN", url: "https://pantaskeren-watsor.vercel.app/" },
    ],
    previews: [
      { src: "/projects/kilat.png", alt: "KILAT digital correspondence service landing page", label: "KILAT" },
      { src: "/projects/simpel.png", alt: "SIMPEL community reporting service landing page", label: "SIMPEL" },
      { src: "/projects/suarakami.png", alt: "SUARA KAMI public service survey landing page", label: "SUARA KAMI" },
      { src: "/projects/pastibisa.png", alt: "PASTI BISA stunting risk mapping landing page", label: "PASTI BISA" },
      { src: "/projects/pantaskeren.png", alt: "PANTAS KEREN creative economy mapping landing page", label: "PANTAS KEREN" },
    ],
    visualSteps: [],
    featured: true,
  },
  {
    title: "Intelligent System: Computer Vision & Machine Learning",
    category: "Academic Project · 2026",
    description:
      "A computer vision system that detects and analyzes the geometric profiles of rice-field embankments, with a Decision Tree-based machine learning model to support navigation decisions.",
    stack: ["Python", "OpenCV", "YOLO", "Machine Learning"],
    links: [],
    previews: [],
    visualSteps: ["Visual data", "YOLO detection", "OpenCV analysis", "Decision Tree", "Navigation decision"],
  },
];

export const skillGroups = [
  {
    title: "Web Development & Systems",
    description: "Building and maintaining full-stack websites, digital services, database-backed systems, and API integrations.",
    items: ["Laravel", "PHP", "JavaScript", "React", "Next.js", "HTML & CSS", "MySQL", "REST APIs", "Git & GitHub"],
  },
  {
    title: "AI-Assisted Development",
    description: "Using coding assistants to accelerate implementation, debugging, refactoring, and technical exploration, then reviewing and refining their output.",
    items: ["ChatGPT", "OpenAI Codex", "Claude", "Claude Code"],
  },
  {
    title: "Artificial Intelligence & Data",
    description: "Processing data and building intelligent applications with machine learning, computer vision, and API-based model integration.",
    items: ["Python", "Data Processing", "Machine Learning", "OpenCV", "YOLO", "Machine Learning APIs"],
  },
];

export const highlights = [
  { value: "8", label: "Websites developed" },
  { value: "3.67", label: "GPA / 4.00" },
  { value: "3+", label: "Technology areas" },
  { value: "2026", label: "Professional experience since" },
];

export const workPrinciples = [
  {
    title: "Integrity & responsibility",
    description: "Taking ownership of tasks, working with integrity, and following through on responsibilities.",
  },
  {
    title: "Leadership & teamwork",
    description: "Contributing to collaborative development work and supporting teammates toward shared goals.",
  },
  {
    title: "Adaptability & attention to detail",
    description: "Managing time and priorities carefully, paying attention to details, and adapting as needs change.",
  },
];

export const contactLinks = [
  {
    label: "WhatsApp",
    value: "+62 853-4261-4904",
    href: "https://wa.me/6285342614904",
  },
  {
    label: "Email",
    value: "imamhudzaifah@gmail.com",
    href: "mailto:imamhudzaifah@gmail.com",
  },
  {
    label: "Instagram",
    value: "@imamhzf",
    href: "https://www.instagram.com/imamhzf",
  },
];
