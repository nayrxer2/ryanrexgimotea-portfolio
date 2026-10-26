// ─────────────────────────────────────────────────────────────────────────────
// portfolio.ts — THIS IS THE ONLY FILE YOU NEED TO EDIT
// Every field is marked with a // TODO: comment so you know exactly what to fill in.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  avatar: string;
}

export interface Social {
  platform: "github" | "linkedin" | "instagram" | "blog" | "resume";
  url: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ─── 1. PROFILE ──────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Ryan Rex Gimotea",
  title: "Frontend Developer",
  tagline: "Code. Style. Deploy. Debug. Repeat.",
  bio: "I write TypeScript, weaponize Tailwind, and deploy Next.js applications. My hobbies include making pixels behave, murdering bugs, and asking myself why the CSS worked yesterday.",
  location: "Iloilo City, Philippines",
  email: "ryangimotea9@gmail.com",
  avatar: "/avatar.png",
};

// ─────────────────────────────────────────────────────────────────────────────
// ─── 2. SOCIAL LINKS ─────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const socials: Social[] = [
  {
    platform: "github",
    url: "https://github.com/nayrxer2",
    label: "GitHub",
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/ryan-gimotea",
    label: "LinkedIn",
  },
  {
    platform: "blog",
    url: "https://yourblog.com",
    label: "Blog",
  },
  {
    platform: "resume",
    url: "https://github.com/nayrxer2/CV/blob/main/RYAN%20CV.pdf",
    label: "Resume",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ─── 3. SKILLS ───────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "VS Code",
      "Vercel",
    ],
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ─── 4. PROJECTS ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of what this project does and what problem it solves. Replace this with your actual project description.",

    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://project-one.vercel.app",
    repoUrl: "https://github.com/yourusername/project-one",
    image: "/projects/project-one.png",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "A brief description of what this project does and what problem it solves. Replace this with your actual project description.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://project-two.vercel.app",
    repoUrl: "https://github.com/yourusername/project-two",
    image: "/projects/project-two.png",
    featured: true,
  },
  {
    title: "Project Three",
    description:
      "A brief description of what this project does and what problem it solves. Replace this with your actual project description.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://project-three.vercel.app",
    repoUrl: "https://github.com/yourusername/project-three",
    image: "/projects/project-three.png",
    featured: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ─── 5. WORK EXPERIENCE ──────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    company: "MySchoolSuite",
    role: "Frontend Developer",
    period: "Jan 2026 – Present",
    description:
      "AI-Augmented Development. API Integration & Maintenance. Code Review & Quality Assurance",
    tech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
  },
  {
    company: "Cogitate",
    role: "Frontend Developer",
    period: "Dec 2021 – Dec 2025",
    description:
      "Web Application Maintenance. UI/UX Implementation. Cross-Functional Collaboration.",
    tech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
  },
  {
    company: "Waffle Time Inc.",
    role: "Software Developer",
    period: "May 2019 – Dec 2021",
    description:
      "Desktop Application Maintenance. Database Maintenance. Application Workflow & Database Design",
    tech: ["MySQL", "VB.Net", "CSS", "JavaScript"],
  }
  // TODO: Add more experience entries as needed
];

// ─────────────────────────────────────────────────────────────────────────────
// ─── 6. EDUCATION ────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    // TODO: School or university name
    school: "Central Philippine University",

    // TODO: Degree type (e.g. "Bachelor of Science", "Associate Degree")
    degree: "Bachelor of Science",

    // TODO: Field of study
    field: "Information Technology",

    // TODO: Attendance period (e.g. "2017 – 2021")
    period: "2012 – 2018",

    // TODO: Optional — short description or notable achievements (remove if not needed)
    description:
      "Brief description of your program, notable achievements, or relevant coursework.",
  },
  // TODO: Add more entries (bootcamps, certificates, online courses, etc.)
];

// ─────────────────────────────────────────────────────────────────────────────
// ─── 7. CONTACT FORM ─────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

// TODO: Set up a free Formspree account at https://formspree.io
//       1. Create a new form → copy the form ID (e.g. "xabcdefg")
//       2. Replace "YOUR_FORMSPREE_FORM_ID" below with your actual ID
export const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_FORM_ID";

// ─────────────────────────────────────────────────────────────────────────────
// ─── 8. SEO / OPEN GRAPH ─────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const seo = {
  // TODO: Update title to "Your Name | Frontend Developer"
  title: "Ryan Rex Gimotea | Frontend Developer",

  // TODO: Write a 1–2 sentence description for search engines and social previews
  description:
    "Frontend developer specializing in React, TypeScript, and modern web technologies. Check out my projects and get in touch.",

  // TODO: Replace with your deployed URL
  //       e.g. "https://yourdomain.com" or "https://yourusername.github.io/my-portfolio"
  url: "https://yourusername.github.io/my-portfolio",

  // TODO: Place a 1200×630 px image at public/og-image.png for social sharing previews
  ogImage: "/og-image.png",
};
