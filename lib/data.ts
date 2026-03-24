export const tabs = ["about", "resume", "portfolio", "contact"] as const;

export type TabKey = (typeof tabs)[number];

export const profile = {
  name: "Parikshit",
  fullName: "Parikshit Bhardwaj",
  role: "Full Stack Developer",
  avatar: "/assets/images/hi (1).svg",
  email: "info.parikshitbhardwaj@gmail.com",
  phone: "+91 9499207262",
  birthday: "Oct 17, 2001",
  location: "Pune, Maharastra, INDIA",
  resume: "/assets/CV_Parikshit.pdf"
};

export const aboutParagraphs = [
  "I'm a Full Stack Developer from Rohtak, Haryana and a 2025 graduate from the Army Institute of Technology. I love solving real-world problems through clean code, efficient systems, and intuitive user experiences.",
  "I specialize in building fast, scalable and modern applications from responsive websites and backend APIs to mobile apps and intelligent ML-powered features. My focus is always on functionality, performance, and usability while keeping the design simple and meaningful.",
  "I enjoy working on end-to-end product development, adding a personal touch to every project and ensuring it aligns with your vision. Whether it's a web application, mobile app, or backend system, I aim to deliver solutions that are reliable, visually appealing and impactful."
];

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building fast, scalable and secure websites and applications using modern technologies like Next.js, React, Node.js and Django.",
    icon: "code"
  },
  {
    title: "Machine Learning",
    description:
      "Developing intelligent ML solutions including data analysis, predictive modeling and automation for real-world applications.",
    icon: "brain"
  },
  {
    title: "Mobile App Development",
    description:
      "Building smooth and intuitive mobile applications using React Native with optimized performance and modern UI/UX practices.",
    icon: "mobile"
  },
  {
    title: "Sketching & Creative Art",
    description:
      "I enjoy sketching and creative art as a hobby, often using it to visualize ideas and bring concepts to life.",
    icon: "camera"
  }
];

export const education = [
  {
    title: "Army Institute Of Technology",
    period: "2021-25",
    description: "Bachelor of Engineering in Information technology | SGPA: 7.71"
  },
  {
    title: "John Wesley Convent",
    period: "2019-20",
    description: "Senior Secondary School | Percentage: 89.6"
  },
  {
    title: "John Wesley Convent",
    period: "2017-18",
    description: "Secondary School | Percentage: 94.2"
  }
];

export const experience = [
  {
    title: "Qualys",
    period: "March 2025 - Present",
    description: [
      "Associate Software Developer (Sept 2025 - Present)",
      "Software Intern (March 2025 - August 2025)",
      "Developed TotalAI interface for Web Application Security, integrating LLMs for dynamic security analysis.",
      "Used React for improving performance and scalability.",
      "Reduced load and build times by 80%, enhancing both user and developer experience.",
      "Implemented backend features including transformer-based request handling, rate limiting, input validation, and data sanitization in Spring Boot.",
      "Optimized SQL queries and backend logic, reducing API response time and improving resource efficiency."
    ]
  },
  {
    title: "DreamCare Developers",
    period: "Feb 2025 - March 2025",
    description: [
      "Full Stack Developer.",
      "Developed and maintained websites for Pune Rural Police, IONAIM.AI Startup, Akola Police, IGP Konkan Range, Sindhudurg Police, Nandurbar Police, and others using Next.js, Tailwind CSS, MongoDB, AWS S3, and Node.js.",
      "Implemented backend solutions with Node.js and AWS, ensuring scalability, security, and performance.",
      "Worked with Railway, Vercel, and GoDaddy for deployment and hosting.",
      "Enhanced digital accessibility for law enforcement agencies, improving public safety awareness and citizen engagement.",
      "Strengthened website security against SQL injection, XSS, CSRF, and other vulnerabilities.",
      "Optimized performance with caching, load balancing, and efficient database queries."
    ]
  },
  {
    title: "Wisdomix Global Technologies",
    period: "Nov 2024 - Feb 2025",
    description: [
      "Software Development Intern.",
      "Developed and maintained a cross-platform mobile application using React Native, enhancing user experience and performance.",
      "Built a scalable Django backend, implementing RESTful APIs for efficient data handling.",
      "Integrated AWS services for backend deployment and storage optimization.",
      "Published and managed the application on Google Play Console, ensuring compliance with Play Store policies."
    ]
  },
  {
    title: "Freelancer",
    period: "2023 - Present",
    description: [
      "Working on UI/UX and web development as a freelancer, with projects spanning hospitality, law enforcement, and SaaS."
    ]
  }
];

export const techStack = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Django",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Figma",
  "AWS",
  "Linux",
  "Python",
  "SQL",
  "MongoDB",
  "Hugging Face",
  "Google Cloud"
];

export const projects = [
  {
    title: "Salonect App",
    category: "Applications",
    image: "/assets/images/salonect.png",
    href: "https://play.google.com/store/apps/details?id=com.myunique.salonapp"
  },
  {
    title: "Astra Resorts Kasauli",
    category: "Web development",
    image: "/assets/images/astra-resorts.png",
    href: "https://astraresorts.com"
  },
  {
    title: "Paragliding Mantara",
    category: "Web development",
    image: "/assets/images/pm.png",
    href: "https://www.paraglidingmantra.com"
  },
  {
    title: "CodeKhojo",
    category: "Applications",
    image: "/assets/images/codekhojo.png",
    href: "https://codekhojo.netlify.app/"
  },
  {
    title: "ECO-Stays | Villa Booking App",
    category: "App Development",
    image: "/assets/images/eco-stays.png",
    href: "https://github.com/uniquepupil/villa-booking"
  },
  {
    title: "Police Department Websites (20+)",
    category: "Application",
    image: "/assets/images/police-project.png",
    href: "https://puneruralpolice.gov.in"
  },
  {
    title: "Lakeside Mantra",
    category: "Web development",
    image: "/assets/images/lakesidemantra.webp",
    href: "https://lakesidemantra.in"
  },
  {
    title: "The Pine Paradise",
    category: "Web development",
    image: "/assets/images/thepineparadise.webp",
    href: "https://thepineparadise.com"
  },
  {
    title: "Eagle Paradise",
    category: "Web development",
    image: "/assets/images/eagleparadise.webp",
    href: "https://eagleparadise.in"
  },
  {
    title: "Sunrise Paragliding",
    category: "Web development",
    image: "/assets/images/sunriseparaglidingkamshet.webp",
    href: "https://sunriseparaglidingkamshet.com"
  },
  {
    title: "Paragliding In India",
    category: "Web development",
    image: "/assets/images/paraglidinginindia.webp",
    href: "https://paraglidinginindia.com"
  },
  {
    title: "Paragliding Kamshet",
    category: "Web development",
    image: "/assets/images/paraglidingkamshet.webp",
    href: "https://paraglidingkamshet.in"
  },
  {
    title: "Stock Price Prediction",
    category: "Machine Learning",
    image: "/assets/images/1_lGUo8infdJRj33EXvEgi2A.png",
    href: "https://colab.research.google.com/drive/18bmU8gCYNeqh5MH1b3620hV3tQfDN-mV#scrollTo=15UwlIobQ-GG"
  },
  {
    title: "AIT Navigation",
    category: "Applications",
    image: "/assets/images/ait.png",
    href: "https://drive.google.com/drive/folders/17zfXNTA-4qjoH5sA87YljMcLZkhSlgUL"
  },
  {
    title: "AIT Lost And Found",
    category: "Web development",
    image: "/assets/images/aitlostnfound.png",
    href: "https://aitlostandfoundnew.netlify.app/"
  },
  {
    title: "URL Shortner",
    category: "Web development",
    image: "/assets/images/urlshortner.png",
    href: "http://urlshortner.eu-north-1.elasticbeanstalk.com/"
  }
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/unique_pupil/" },
  { label: "Facebook", href: "https://www.facebook.com/unique.pupil" },
  { label: "Twitter", href: "https://twitter.com/unique_pupil" },
  { label: "GitHub", href: "https://github.com/uniquepupil" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/parikshit-023486225" }
];

export const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d624.5359288302849!2d76.59246673676843!3d28.91905962676232!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x390d8582f0f72d3f%3A0xb8dda1cef53548ae!2s178%2C%20Ram%20Nagar%2C%20Rohtak%2C%20Haryana%20124001%2C%20India!3m2!1d28.919280099999998!2d76.5929932!4m5!1s0x390d8514a8f7c00d%3A0x97cfda01953ce57!2sParvesh%20nagar%20gohana%20road%2C%20WH9V%2B9MW%2C%20Rajendra%20Nagar%2C%20Rohtak%2C%20Haryana%20124001!3m2!1d28.9184853!2d76.5941984!5e0!3m2!1sen!2sin!4v1772307246659!5m2!1sen!2sin";
