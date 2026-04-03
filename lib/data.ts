export const profile = {
  name: "Parikshit",
  fullName: "Parikshit Bhardwaj",
  headline: "Full-stack developer shaping high-conversion travel, product, and applied AI experiences.",
  role: "Product-minded Full Stack Developer",
  location: "Pune, Maharashtra, India",
  email: "info.parikshitbhardwaj@gmail.com",
  phone: "+91 9499207262",
  birthday: "Oct 17, 2001",
  avatar: "/assets/images/hi (1).svg",
  resume: "/assets/CV_Parikshit.pdf"
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/uniquepupil" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/parikshit-023486225" },
  { label: "Instagram", href: "https://www.instagram.com/unique_pupil/" },
  { label: "Twitter", href: "https://twitter.com/unique_pupil" }
];

export const heroStats = [
  { label: "Years building", value: "3+" },
  { label: "Projects shipped", value: "20+" },
  { label: "Domains", value: "Travel, public sector, SaaS" },
  { label: "Core mode", value: "End-to-end delivery" },
  { label: "Primary stack", value: "Next.js, Node.js" },
  { label: "Focus", value: "UX, performance, clarity" },
  { label: "Current role", value: "Associate Software Developer" },
  // { label: "Build style", value: "Design to deployment" },
  { label: "Platforms", value: "Web, mobile, AI workflows" }
];

export const aboutParagraphs = [
  "I build digital products end to end, from concept and interface to backend workflows and deployment. My work sits at the intersection of engineering clarity, business outcomes, and a strong visual instinct.",
  "Most of my recent work has focused on hospitality brands, booking funnels, public-information websites, and ML-enabled product features. I care about speed, clean structure, and interfaces that feel polished without becoming noisy.",
  "I’m currently working as an Associate Software Developer at Qualys, while also shipping freelance projects that demand ownership across design, frontend, backend, and delivery."
];

export const capabilityBlocks = [
  {
    title: "Product Websites",
    description:
      "Marketing-led websites with stronger IA, cleaner booking or inquiry flows, and better mobile conversion.",
    accent: "Conversion"
  },
  {
    title: "Full-stack Systems",
    description:
      "Next.js, React, Node.js, Django, SQL, and cloud integrations for products that need both speed and operational reliability.",
    accent: "Execution"
  },
  {
    title: "Applied AI",
    description:
      "Practical AI integrations for security workflows, automation, analysis, and feature enrichment rather than AI for its own sake.",
    accent: "Applied"
  }
];

export const experience = [
  {
    company: "Qualys",
    period: "2025 - Present",
    role: "Associate Software Developer",
    summary:
      "Worked on AI-assisted web application security tooling, frontend performance, Spring Boot backend features, and faster developer workflows."
  },
  {
    company: "DreamCare Developers",
    period: "2025",
    role: "Full Stack Developer",
    summary:
      "Delivered hospitality and public-sector websites using Next.js, Tailwind CSS, Node.js, MongoDB, and AWS-backed media workflows."
  },
  {
    company: "Wisdomix Global Technologies",
    period: "2024 - 2025",
    role: "Software Development Intern",
    summary:
      "Built cross-platform mobile experiences in React Native with Django APIs and cloud deployment support."
  }
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Django",
  "Spring Boot",
  "MongoDB",
  "SQL",
  "AWS",
  "Python",
  "React Native"
];

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  category: string;
  role: string;
  year: string;
  client: string;
  team: string;
  duration: string;
  image: string;
  href: string;
  summary: string;
  sourceNote: string;
  headline: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  stack: string[];
  gallery: string[];
  embedUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "astra-resort-kasauli",
    title: "Astra Resort & Caffe Kasauli",
    kicker: "Luxury hospitality website",
    category: "Web experience",
    role: "Full-stack developer and frontend lead",
    year: "2025",
    client: "Astra Resort & Caffe Kasauli",
    team: "Freelance delivery",
    duration: "4 weeks",
    image: "/assets/images/astra-resorts.png",
    href: "https://astraresorts.com",
    embedUrl: "https://astraresorts.com",

    summary:
      "A premium hospitality site built around room discovery, event positioning, and direct booking intent.",
    sourceNote:
      "Live site references luxury suites, infinity pool, dining, and events positioning; role and delivery framing are inferred from the portfolio context.",
    headline:
      "Repositioned a Kasauli property as a high-end destination with a more persuasive digital experience.",
    challenge:
      "The site needed to sell more than accommodation. It had to communicate luxury, amenities, weddings, dining, and direct booking confidence in one cohesive journey.",
    approach: [
      "Structured the homepage around premium proof points such as infinity pool, suites, dining, and event capacity.",
      "Used large visual panels and section sequencing to make the property feel aspirational before users reached booking CTAs.",
      "Balanced brand storytelling with conversion-heavy actions like reserve, enquiry, and room exploration."
    ],
    outcomes: [
      "Sharper premium positioning for a hospitality brand competing on experience, not just room inventory.",
      "More direct paths into booking, enquiry, room discovery, and event exploration.",
      "A visually stronger brand surface for both mobile visitors and ad-driven traffic."
    ],
    stack: ["Next.js", "Tailwind CSS", "Responsive UI", "Booking CTA flows"],
    gallery: ["/assets/images/astra-resorts.png"]
  },
  {
    slug: "paragliding-mantra",
    title: "Paragliding Mantra",
    kicker: "Adventure tourism funnel",
    category: "Web experience",
    role: "Frontend and growth-focused web developer",
    year: "2025",
    client: "Paragliding Mantra",
    team: "Freelance delivery",
    duration: "3 weeks",
    image: "/assets/images/pm.png",
    href: "https://www.paraglidingmantra.com",
    embedUrl: "https://www.paraglidingmantra.com",
        summary:
      "An adventure booking website designed to build trust quickly and move visitors toward inquiries and reservations.",
    sourceNote:
      "Project details are inferred from the live tourism website, existing portfolio image, and domain positioning.",
    headline:
      "Turned an activity website into a clearer booking-oriented experience for paragliding customers.",
    challenge:
      "Adventure tourism sites often lose users through clutter, weak trust signals, and unclear next actions. This project needed a more decisive flow.",
    approach: [
      "Focused page sections around experience, credibility, destination value, and booking intent.",
      "Used image-forward storytelling and simpler content grouping for faster scanning on mobile.",
      "Prioritized high-intent actions such as pricing checks, inquiry, and lead capture."
    ],
    outcomes: [
      "A stronger top-of-funnel presentation for first-time visitors evaluating adventure operators.",
      "Cleaner transitions from brand browsing to booking consideration.",
      "A more modern tourism web presence aligned with visual-first customer behavior."
    ],
    stack: ["Next.js", "Tailwind CSS", "Responsive UI", "Lead generation UX"],
    gallery: ["/assets/images/pm.png", "/assets/images/paraglidingkamshet.webp"]
  },
  {
    slug: "eco-stays-villa-booking",
    title: "ECO-Stays Villa Booking App",
    kicker: "Mobile-first booking product",
    category: "Product application",
    role: "App developer",
    year: "2024",
    client: "Independent product build",
    team: "Solo / product prototype",
    duration: "Ongoing product build",
    image: "/assets/images/eco-stays.png",
    href: "https://github.com/uniquepupil/villa-booking",
    summary:
      "A villa booking application focused on smooth discovery, browsing, and stay planning for hospitality users.",
    sourceNote:
      "Description is based on the portfolio entry and GitHub link; implementation details are inferred from the app category and visuals.",
    headline:
      "Explored a hospitality product beyond brochureware by moving into booking-oriented app interactions.",
    challenge:
      "Unlike a marketing website, a booking app needs persistent utility: faster browsing, cleaner property comparisons, and clearer booking context across sessions.",
    approach: [
      "Designed the experience around inventory browsing and destination-led stay discovery.",
      "Optimized the interface for mobile usage patterns instead of desktop-first layouts.",
      "Treated the app as a product system rather than a static showcase."
    ],
    outcomes: [
      "A stronger portfolio example for app product thinking in the hospitality domain.",
      "Demonstrated the ability to translate travel UX patterns into a mobile product surface.",
      "Created a reusable base for future booking-related product work."
    ],
    stack: ["React Native", "Mobile UI", "Booking workflows", "Product prototyping"],
    gallery: ["/assets/images/eco-stays.png"]
  },
  {
    slug: "police-department-websites",
    title: "Police Department Websites",
    kicker: "Public information platform family",
    category: "Institutional web systems",
    role: "Full-stack developer",
    year: "2025",
    client: "Multiple police and public sector organizations",
    team: "DreamCare Developers",
    duration: "Multi-site rollout",
    image: "/assets/images/police-project.png",
    href: "https://puneruralpolice.gov.in",
    summary:
      "A group of public-facing websites built for information access, visibility, and structured communication across departments.",
    sourceNote:
      "Project context comes from the portfolio experience section and linked public sector site.",
    headline:
      "Scaled a repeated website delivery model for public institutions with stronger reliability and accessibility.",
    challenge:
      "Government and public-service sites need clarity, trust, and maintainability. The work had to balance accessibility, security, and repeatable implementation across multiple organizations.",
    approach: [
      "Created reusable patterns for informational pages, notice structures, contact access, and institutional updates.",
      "Focused on performance, security hardening, and easier content maintenance for multi-site delivery.",
      "Built systems that could be adapted across departments without redesigning from scratch every time."
    ],
    outcomes: [
      "Improved digital reach for citizen-facing public information.",
      "Delivered multiple related sites under a repeatable implementation model.",
      "Strengthened portfolio credibility in complex, stakeholder-heavy delivery work."
    ],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "AWS S3"],
    gallery: ["/assets/images/police-project.png"]
  },
  {
    slug: "the-pine-paradise",
    title: "The Pine Paradise",
    kicker: "Boutique stay brand site",
    category: "Hospitality web design",
    role: "Frontend developer",
    year: "2025",
    client: "The Pine Paradise",
    team: "Freelance delivery",
    duration: "3 weeks",
    image: "/assets/images/thepineparadise.webp",
    href: "https://thepineparadise.com",
    summary:
      "A hospitality website for a boutique mountain stay, built to make the property feel calm, premium, and bookable.",
    sourceNote:
      "Live site title indicates a luxury boutique hotel in Kasauli; role framing is inferred from the portfolio context.",
    headline:
      "Built a quieter, more atmospheric hospitality experience around premium stays and destination mood.",
    challenge:
      "Boutique stay websites need emotional pull without sacrificing clarity. The interface had to make the property feel distinct while still serving bookings and trust-building.",
    approach: [
      "Let imagery lead while supporting it with concise copy and booking-oriented actions.",
      "Designed a calmer page rhythm than high-pressure resort funnels, more aligned with boutique positioning.",
      "Focused on responsive polish so the experience still felt premium on smaller screens."
    ],
    outcomes: [
      "A more brand-led hospitality presentation for a destination property.",
      "Stronger visual quality in the portfolio’s hospitality segment.",
      "A reusable design language for premium travel clients."
    ],
    stack: ["Next.js", "Visual design systems", "Responsive UI", "Hospitality UX"],
    gallery: ["/assets/images/thepineparadise.webp", "/assets/images/eagleparadise.webp"],
    embedUrl: "https://thepineparadise.com"
  },
  {
    slug: "lakeside-mantra",
    title: "Lakeside Mantra",
    kicker: "Destination stay website",
    category: "Hospitality web design",
    role: "Frontend developer",
    year: "2025",
    client: "Lakeside Mantra",
    team: "Freelance delivery",
    duration: "3 weeks",
    image: "/assets/images/lakesidemantra.webp",
    href: "https://lakesidemantra.in",
    embedUrl: "https://lakesidemantra.in",
    summary:
      "A destination-led hospitality website centered on visual appeal, property browsing, and inquiry flow.",
    sourceNote:
      "The live site could not be fully extracted in this environment; details are inferred from the link, screenshot, and category.",
    headline:
      "Created a scenic property website built to sell atmosphere first and booking intent second.",
    challenge:
      "Travel properties compete heavily on visual perception. The site had to communicate experience quality quickly before users compared options elsewhere.",
    approach: [
      "Used large image surfaces and short copy blocks to keep attention on the destination and stay quality.",
      "Simplified information architecture to reduce distraction on mobile.",
      "Kept inquiry and property browsing pathways close to the primary value proposition."
    ],
    outcomes: [
      "A more premium-feeling digital touchpoint for a stay-focused brand.",
      "Higher consistency across the hospitality websites in the portfolio.",
      "Clearer conversion pathways for visitors arriving through discovery and social traffic."
    ],
    stack: ["Next.js", "Tailwind CSS", "Responsive layout", "Visual storytelling"],
    gallery: ["/assets/images/lakesidemantra.webp"]
  },
  {
    slug: "codekhojo",
    title: "CodeKhojo",
    kicker: "Developer utility app",
    category: "Application",
    role: "Product developer",
    year: "2024",
    client: "Independent build",
    team: "Solo project",
    duration: "Prototype",
    image: "/assets/images/codekhojo.png",
    href: "https://codekhojo.netlify.app/",
    embedUrl: "https://codekhojo.netlify.app/",
    summary:
      "A utility-oriented application built around code discovery and developer-focused workflows.",
    sourceNote:
      "The live site was not extractable in this environment; description is inferred from the project name, category, and screenshot.",
    headline:
      "Built a developer-facing utility product rather than another marketing surface.",
    challenge:
      "Utility products have to make value obvious quickly. The interface needed to feel efficient and focused, not decorative.",
    approach: [
      "Structured the UI around task completion and quick navigation.",
      "Prioritized a darker product-style interface aligned with developer tooling expectations.",
      "Kept interaction overhead low so utility remained the core experience."
    ],
    outcomes: [
      "Expanded the portfolio beyond travel and brochure-style sites.",
      "Showed product thinking for niche user workflows.",
      "Added a more tool-like case study to complement service websites."
    ],
    stack: ["React", "Frontend product UI", "Utility workflow design"],
    gallery: ["/assets/images/codekhojo.png"]
  }
];

export const featuredSlugs = [
  "astra-resort-kasauli",
  "police-department-websites",
  "eco-stays-villa-booking",
  "the-pine-paradise"
];

export const featuredCaseStudies = caseStudies.filter((project) =>
  featuredSlugs.includes(project.slug)
);

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}

export const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d624.5359288302849!2d76.59246673676843!3d28.91905962676232!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x390d8582f0f72d3f%3A0xb8dda1cef53548ae!2s178%2C%20Ram%20Nagar%2C%20Rohtak%2C%20Haryana%20124001%2C%20India!3m2!1d28.919280099999998!2d76.5929932!4m5!1s0x390d8514a8f7c00d%3A0x97cfda01953ce57!2sParvesh%20nagar%20gohana%20road%2C%20WH9V%2B9MW%2C%20Rajendra%20Nagar%2C%20Rohtak%2C%20Haryana%20124001!3m2!1d28.9184853!2d76.5941984!5e0!3m2!1sen!2sin!4v1772307246659!5m2!1sen!2sin";
