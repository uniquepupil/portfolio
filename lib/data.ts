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
    kicker: "Hospitality commerce and loyalty platform",
    category: "Full-stack hospitality platform",
    role: "Full-stack developer and frontend lead",
    year: "2025",
    client: "Astra Resort & Caffe Kasauli",
    team: "Freelance delivery",
    duration: "4 weeks",
    image: "/assets/images/astra-resorts.png",
    href: "https://astraresorts.com",
    embedUrl: "https://astraresorts.com",

    summary:
      "A full-stack luxury hospitality platform combining resort discovery, room commerce, Razorpay checkout, customer accounts, booking management, and the Astra Club loyalty experience.",
    sourceNote:
      "Project details are based on the live Astra Resort & Caffe Kasauli website, Astra Club pages, public room storefront, and the delivery context recorded in this portfolio. Property claims, prices, discounts, membership rules, reward eligibility, and redemption limits belong to the client and may change on the live platform.",
    headline:
      "Built a premium Kasauli hospitality ecosystem that connects brand storytelling with room sales, customer accounts, and loyalty-driven repeat visits.",
    challenge:
      "Astra needed one coherent experience for several business models at once: luxury room discovery, paid room packages, direct enquiries, restaurant and bar discovery, weddings, corporate events, and repeat-guest loyalty. The platform had to explain Classic Valley View, Premium Pool & Valley, and Jacuzzi stays; move customers into a secure cart and payment journey; and give returning guests a clear place to track bookings, membership progress, Astra Coins, wallet activity, expiry, and eligible checkout redemption—without letting transactional complexity dilute the premium resort brand.",
    approach: [
      "Created an image-led opening experience around the Kasauli landscape, infinity pool, and 'Where luxury meets the clouds' positioning so destination value is established before commerce begins.",
      "Structured room discovery around distinct accommodation and meal-plan products, exposing inclusions, pricing context, promotional discounts, and clear purchase actions.",
      "Connected room products to a Razorpay-powered storefront with cart and checkout flows, giving customers a transactional path in addition to availability search, WhatsApp, phone, and enquiry options.",
      "Built Astra Club around authenticated customer accounts that bring bookings, membership tier and progress, Astra Coins balance, wallet activity, and credit-expiry information into one place.",
      "Designed eligible coin redemption into the customer room-booking checkout, showing usable rewards alongside the remaining monetary payment while keeping program rules and limits explicit.",
      "Separated future café redemption from currently available benefits so customers are not promised functionality that has not launched; café redemption remains clearly labelled as a future release.",
      "Presented Celeste dining, the Nova bar, weddings, corporate MICE, social celebrations, and the 300-guest pillar-less banquet facility as complementary revenue journeys within the same brand system.",
      "Used responsive navigation, social proof, amenity summaries, galleries, location context, policies, and repeated conversion actions to support both first-time mobile visitors and returning members."
    ],
    outcomes: [
      "Extended Astra from a resort marketing website into a hospitality commerce platform with room products, cart behavior, checkout, customer authentication, and account-based booking context.",
      "Created a repeat-guest loop through Astra Club membership progress, booking-earned Astra Coins, wallet visibility, expiry tracking, and eligible room-checkout redemption.",
      "A more complete room-purchase journey that distinguishes accommodation categories, meal plans, inclusions, pricing, and promotions before payment.",
      "Multiple conversion paths for different customer preferences, including storefront purchase, availability search, customer account, WhatsApp, phone, enquiry, and driving directions.",
      "Stronger visibility for non-room revenue opportunities such as weddings, banquets, corporate offsites, Celeste dining, and the Nova bar.",
      "Clear separation between live loyalty benefits and planned features, reducing ambiguity around Astra Coins and future café redemption."
    ],
    stack: ["Next.js", "Tailwind CSS", "Responsive UI", "Razorpay Webstore", "E-commerce checkout", "Customer accounts", "Booking management", "Astra Coins wallet", "Loyalty redemption UX", "WhatsApp enquiries", "Local SEO structure"],
    gallery: ["/assets/images/astra-resorts.png"]
  },
  {
    slug: "paragliding-mantra",
    title: "Paragliding Mantra",
    kicker: "Adventure tourism SEO and booking funnel",
    category: "Adventure tourism website",
    role: "Frontend developer and growth-focused web developer",
    year: "2025",
    client: "Paragliding Mantra",
    team: "Freelance delivery",
    duration: "3 weeks",
    image: "/assets/images/paragliding-mantra-live-2026.png",
    href: "https://www.paraglidingmantra.com",
    embedUrl: "https://www.paraglidingmantra.com",
    summary:
      "A dedicated adventure booking website for Paragliding Mantra, structured to support search visibility, trust building, and fast enquiry conversion.",
    sourceNote:
      "Project details are based on the live Paragliding Mantra website, existing portfolio image, and adventure tourism positioning.",
    headline:
      "Turned Paragliding Mantra into a clearer booking-oriented web experience for adventure and paragliding customers.",
    challenge:
      "Adventure tourism sites often lose users through clutter, weak trust signals, and unclear next actions. Paragliding Mantra needed a more decisive web flow that could support organic discovery and move high-intent visitors toward enquiry.",
    approach: [
      "Focused page sections around paragliding experience, credibility, destination value, and booking intent.",
      "Used image-forward storytelling and simpler content grouping for faster scanning on mobile.",
      "Prioritized high-intent actions such as pricing checks, inquiry, and lead capture while keeping the live project link as a clean portfolio reference."
    ],
    outcomes: [
      "Created a stronger SEO-friendly case-study surface for Paragliding Mantra with a direct backlink to the live domain.",
      "Cleaner transitions from brand browsing to booking consideration.",
      "A more modern tourism web presence aligned with visual-first customer behavior."
    ],
    stack: ["Next.js", "Tailwind CSS", "SEO content structure", "Lead generation UX"],
    gallery: ["/assets/images/paragliding-mantra-live-2026.png"]
  },
  {
    slug: "sunrise-paragliding-kamshet",
    title: "Sunrise Paragliding Kamshet",
    kicker: "Kamshet adventure tourism SEO page",
    category: "Adventure tourism website",
    role: "Frontend developer and SEO-focused web developer",
    year: "2025",
    client: "Sunrise Paragliding Kamshet",
    team: "Freelance delivery",
    duration: "3 weeks",
    image: "/assets/images/sunrise-paragliding-live-2026.png",
    href: "https://sunriseparaglidingkamshet.com/",
    embedUrl: "https://sunriseparaglidingkamshet.com/",
    summary:
      "A dedicated Kamshet paragliding website built to present adventure packages, trust signals, and booking intent clearly for search and mobile visitors.",
    sourceNote:
      "Project framing is based on the live Sunrise Paragliding Kamshet site, the portfolio asset, and the adventure tourism booking context.",
    headline:
      "Built a focused paragliding website for Kamshet visitors who need quick trust, clear package context, and a direct path to enquiry.",
    challenge:
      "Paragliding customers usually arrive with high intent but low patience. The website needed to answer safety, location, experience, and booking questions quickly while supporting organic discovery for Kamshet paragliding searches.",
    approach: [
      "Structured the page around Kamshet paragliding intent, using direct service positioning instead of generic adventure copy.",
      "Kept calls to action close to package, location, and experience sections so mobile users could enquire without hunting.",
      "Used image-led presentation to build confidence while keeping the content readable for search engines and first-time visitors."
    ],
    outcomes: [
      "Created a dedicated SEO surface for Sunrise Paragliding Kamshet instead of relying only on social or marketplace discovery.",
      "Improved the path from organic visit to enquiry with clearer location, activity, and booking context.",
      "Added a relevant dofollow portfolio backlink from a case-study page to the live project."
    ],
    stack: ["Next.js", "Tailwind CSS", "Local SEO", "Lead generation UX"],
    gallery: ["/assets/images/sunrise-paragliding-live-2026.png"]
  },
  {
    slug: "paragliding-kamshet",
    title: "Paragliding Kamshet",
    kicker: "Adventure booking and local SEO site",
    category: "Adventure tourism website",
    role: "Frontend developer and conversion-focused web developer",
    year: "2025",
    client: "Paragliding Kamshet",
    team: "Freelance delivery",
    duration: "3 weeks",
    image: "/assets/images/paragliding-kamshet-live-2026.png",
    href: "https://paraglidingkamshet.in/",
    embedUrl: "https://paraglidingkamshet.in/",
    summary:
      "A separate SEO-focused website for paragliding in Kamshet, designed around discovery, credibility, and fast enquiry conversion.",
    sourceNote:
      "Content is based on the provided live URL, existing project screenshot, and the site’s positioning around paragliding in Kamshet.",
    headline:
      "Created a search-friendly landing experience for Kamshet paragliding customers comparing operators and preparing to book.",
    challenge:
      "The project needed to stand on its own as a location-specific paragliding website, not just another portfolio thumbnail. It had to support search visibility while still feeling useful for real customers.",
    approach: [
      "Focused the page language on paragliding in Kamshet, giving search engines and users a clear topic match.",
      "Designed the experience around trust, destination context, and booking readiness instead of broad adventure branding.",
      "Kept the live project link visible as a clean dofollow reference from the case-study page."
    ],
    outcomes: [
      "Added an independent portfolio case-study page for Paragliding Kamshet with a direct backlink to the live domain.",
      "Separated this project from Sunrise Paragliding Kamshet so both brands can receive their own internal route and sitemap entry.",
      "Improved SEO clarity by giving the project its own slug, title, metadata, image, and case-study content."
    ],
    stack: ["Next.js", "Tailwind CSS", "SEO content structure", "Responsive UI"],
    gallery: ["/assets/images/paragliding-kamshet-live-2026.png"]
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
    kicker: "Hospitality SEO and destination website",
    category: "Hospitality website",
    role: "Frontend developer and SEO-focused web developer",
    year: "2025",
    client: "Lakeside Mantra",
    team: "Freelance delivery",
    duration: "3 weeks",
    image: "/assets/images/lakesidemantra.webp",
    href: "https://lakesidemantra.in",
    embedUrl: "https://lakesidemantra.in",
    summary:
      "A destination-led hospitality website for Lakeside Mantra, built around visual appeal, organic discovery, property browsing, and enquiry flow.",
    sourceNote:
      "Project framing is based on the live Lakeside Mantra site, the existing portfolio screenshot, and its hospitality destination positioning.",
    headline:
      "Created a scenic hospitality website that sells atmosphere, location appeal, and booking confidence in one focused journey.",
    challenge:
      "Travel properties compete heavily on visual perception and search visibility. Lakeside Mantra needed a site that could feel premium, communicate destination value quickly, and still provide a clean path from discovery to enquiry.",
    approach: [
      "Used large image surfaces and short copy blocks to keep attention on the destination, stay quality, and visitor intent.",
      "Simplified information architecture to reduce distraction on mobile.",
      "Kept inquiry and property browsing pathways close to the primary value proposition while preserving a direct portfolio backlink to the live domain."
    ],
    outcomes: [
      "Added a stronger SEO-friendly portfolio case-study page for Lakeside Mantra with a direct link to the live website.",
      "Higher consistency across the hospitality websites in the portfolio.",
      "Clearer conversion pathways for visitors arriving through discovery and social traffic."
    ],
    stack: ["Next.js", "Tailwind CSS", "Hospitality SEO", "Lead generation UX"],
    gallery: ["/assets/images/lakesidemantra.webp"]
  },
  {
    slug: "lonavala-interiors",
    title: "Lonavala Interiors",
    kicker: "Interior design lead-generation site",
    category: "Business website",
    role: "Full-stack developer",
    year: "2026",
    client: "The home dekor’s & Sk interior",
    team: "Built independently",
    duration: "Recent launch",
    image: "/assets/images/lonavala-interiors-live-2026.png",
    href: "https://www.lonavalainteriors.com",
    summary:
      "A conversion-focused interior design website for villas, bungalows, apartments, and commercial spaces in Lonavala, Kamshet, and Maval.",
    sourceNote:
      "Content is based on the live site metadata and homepage positioning, including turnkey interiors, modular kitchens, 3D visualization, and Vastu-aware design services.",
    headline:
      "Built a local SEO-focused interiors website designed to rank, convert enquiries, and present premium residential and commercial design work clearly.",
    challenge:
      "The site needed to work as both a local discovery page and a trust-building sales surface. It had to cover search intent for interior design in Lonavala while still feeling premium and service-led.",
    approach: [
      "Structured the site around local SEO signals like Lonavala, Kamshet, and Maval while keeping the pages readable and client-facing.",
      "Positioned the brand around turnkey interiors for villas, bungalows, farmhouses, apartments, and commercial spaces.",
      "Used conversion-oriented sections for packages, services, portfolio, Vastu, and direct contact so users can quickly move from discovery to enquiry."
    ],
    outcomes: [
      "Created a stronger organic-search surface for a location-based interior design business.",
      "Improved clarity around service types, areas served, and premium turnkey delivery.",
      "Gave the business a cleaner digital presence for both direct leads and future backlink growth."
    ],
    stack: ["Next.js", "SEO metadata", "Responsive UI", "Lead generation UX"],
    gallery: ["/assets/images/lonavala-interiors-live-2026.png"],
    embedUrl: "https://www.lonavalainteriors.com"
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
  "paragliding-mantra",
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
