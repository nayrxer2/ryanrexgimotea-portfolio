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

  // TODO: Your job title (e.g. "Frontend Developer", "Full-Stack Engineer")
  title: "Frontend Developer",

  // TODO: A short, punchy tagline shown beneath your name in the Hero
  tagline: "I build fast, accessible, and beautiful web experiences.",

  // TODO: 2–3 sentence bio shown in the About section
  bio: "I'm a frontend developer passionate about creating clean and performant user interfaces. I love turning ideas into polished digital experiences that users actually enjoy. When I'm not coding, you'll find me exploring new design trends or contributing to open source.",

  // TODO: Your city / country (e.g. "Manila, Philippines")
  location: "Your City, Country",

  // TODO: Your public contact email
  email: "hello@youremail.com",

  // TODO: Path to your avatar/photo — place the file in the public/ folder
  //       and reference it as "/avatar.jpg" (or .png, .webp, etc.)
  //       Recommended: square image, at least 400×400 px
  avatar: "/avatar.png",
};

// ─────────────────────────────────────────────────────────────────────────────
// ─── 2. SOCIAL LINKS ─────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const socials: Social[] = [
  {
    platform: "github",
    // TODO: Replace with your GitHub profile URL
    url: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    platform: "linkedin",
    // TODO: Replace with your LinkedIn profile URL
    url: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    platform: "instagram",
    // TODO: Replace with your Instagram profile URL
    url: "https://instagram.com/yourusername",
    label: "Instagram",
  },
  {
    platform: "blog",
    // TODO: Replace with your blog/personal site URL
    //       Remove this entry entirely if you don't have a blog
    url: "https://yourblog.com",
    label: "Blog",
  },
  {
    platform: "resume",
    // TODO: Place your resume PDF at public/resume.pdf — this link will work automatically
    url: "/resume.pdf",
    label: "Resume",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ─── 3. SKILLS ───────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    // TODO: Rename this category or add/remove skills as needed
    category: "Languages",
    skills: [
      // TODO: List your programming languages
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      // TODO: List your frameworks and libraries
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
      // TODO: List your tools, platforms, and services
      "Git",
      "GitHub",
      "Figma",
      "VS Code",
      "Vercel",
    ],
  },
  {
    category: "Other",
    skills: [
      // TODO: Any other relevant skills (testing, methodologies, soft skills, etc.)
      "REST APIs",
      "Responsive Design",
      "Web Accessibility",
      "Performance Optimization",
    ],
  },
  // TODO: Add or remove skill groups as needed
];

// ─────────────────────────────────────────────────────────────────────────────
// ─── 4. PROJECTS ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    // TODO: Project name
    title: "Project One",

    // TODO: 1–2 sentence description of what this project does / what problem it solves
    description:
      "A brief description of what this project does and what problem it solves. Replace this with your actual project description.",

    // TODO: Tech stack used
    tech: ["React", "TypeScript", "Tailwind CSS"],

    // TODO: Live demo URL — remove this line if there's no live demo
    liveUrl: "https://project-one.vercel.app",

    // TODO: GitHub repo URL — remove this line if the repo is private
    repoUrl: "https://github.com/yourusername/project-one",

    // TODO: Screenshot path — place images in public/projects/ folder
    //       (e.g. public/projects/project-one.png → "/projects/project-one.png")
    //       Remove this line if you don't have a screenshot yet
    image: "/projects/project-one.png",

    // TODO: Set to true to show a "Featured" badge on the card
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
  // TODO: Add more projects following the same structure above
  //       There's no hard limit — the grid will adapt automatically
];

// ─────────────────────────────────────────────────────────────────────────────
// ─── 5. WORK EXPERIENCE ──────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    // TODO: Company name
    company: "Company Name",

    // TODO: Your role/title at this company
    role: "Frontend Developer",

    // TODO: Employment period (e.g. "Jan 2023 – Present")
    period: "Jan 2023 – Present",

    // TODO: 2–3 sentences about your responsibilities and key achievements
    description:
      "Describe your responsibilities, key achievements, and impact in this role. Mention specific projects and measurable outcomes where possible.",

    // TODO: Technologies you used here
    tech: ["React", "TypeScript", "Next.js"],
  },
  {
    company: "Previous Company",
    role: "Junior Frontend Developer",
    period: "Jun 2021 – Dec 2022",
    description:
      "Describe your responsibilities, key achievements, and impact in this role. Mention specific projects and measurable outcomes where possible.",
    tech: ["HTML", "CSS", "JavaScript", "Vue.js"],
  },
  // TODO: Add more experience entries as needed
];

// ─────────────────────────────────────────────────────────────────────────────
// ─── 6. EDUCATION ────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    // TODO: School or university name
    school: "University Name",

    // TODO: Degree type (e.g. "Bachelor of Science", "Associate Degree")
    degree: "Bachelor of Science",

    // TODO: Field of study
    field: "Computer Science",

    // TODO: Attendance period (e.g. "2017 – 2021")
    period: "2017 – 2021",

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
