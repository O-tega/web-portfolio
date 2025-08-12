import ciin from "../../assets/images/ciin.webp";
import enterscale from "../../assets/images/enterscale.webp";
import hauliinBackoffice from "../../assets/images/hauliinBackoffice.webp";
import hauliinClient from "../../assets/images/hauliinClient.webp";
import hauliinWeb from "../../assets/images/hauliinWeb.webp";
import mooyiApp from "../../assets/images/mooyiApp.webp";
import mooyiRewardsApp from "../../assets/images/mooyiRewardsApp.webp";
import mooyiweb from "../../assets/images/mooyiweb.webp";

import mooyiLogo from "../../assets/images/logo/mooyiLogo.ico";
import enterscaleLogo from "../../assets/images/logo/enterscale.png";
import hauliin from "../../assets/images/logo/hauliin.png";
import ciinLogo from "../../assets/images/logo/ciin.png";
import alabian from "../../assets/images/logo/alabian-logo.png";

export const projects = [
  {
    name: "Mooyi – Survey & Rewards Platform",
    description:
      "A platform where businesses create surveys to collect feedback and reward targeted users.",
    role: ["Frontend Development", "UI Engineering", "State Management"],
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "Zustand",
      "React Query",
      "Framer Motion",
    ],
    image: [mooyiApp, mooyiRewardsApp],
    logo: [mooyiLogo],
    url: ["https://app.usemooyi.com", "https://app.mooyirewards.com"],
  },
  {
    name: "Hauliin – Logistics Management Web App",
    description:
      "A logistics solution connecting clients with interstate and international haulage services, including a back-office dashboard.",
    role: ["Frontend Development", "UX Engineering", "State Handling"],
    technologies: [
      "React",
      "React Query",
      "Zustand",
      "TailwindCSS",
      "Custom Hooks",
    ],
    image: [hauliinWeb, hauliinClient, hauliinBackoffice],
    logo: [hauliin],
    url: [
      "https://hauliin.io/",
      "https://customer.hauliin.io/",
      "https://backoffice.hauliin.io/",
    ],
  },
  {
    name: "Enterscale & Mooyi Company Websites",
    description:
      "Corporate and landing websites with smooth UI animations, e-commerce flow, and performance-focused SEO.",
    role: ["Web Design", "Frontend Development", "UI Animation"],
    technologies: [
      "React",
      "Framer Motion",
      "TailwindCSS",
      "Paystack",
      "Flutterwave",
    ],
    image: [enterscale, mooyiweb],
    logo: [enterscaleLogo, mooyiLogo],
    url: ["https://www.enterscale.com/", "https://www.usemooyi.com/"],
  },
  {
    name: "CIIN.org – Enterprise QA Testing",
    description:
      "Internal enterprise tool testing for workflows, payments, and inter-departmental system flow.",
    role: ["QA Testing", "Data Flow Validation", "Usability Review"],
    technologies: ["Vanilla JavaScript", "Manual Testing Tools"],
    image: [ciin],
    logo: [ciinLogo],
    url: ["https://ciinportal.org/"],
  },
];

export const WorkExperience = [
  {
    role: "Frontend Engineer",
    company: "Enterscale",
    description:
      "Enterscale provides startup acceleration services and community-driven products, including marketing automation tools and educational content.",
    expertise: [
      "Built front-end features for Mooyi, an enterprise survey platform for business-consumer insights",
      "Built front-end features for Mooyi rewards, the customer platform by which customers insight are generated",
      "Built Web site for Enterscale, Mooyi, Mooyi rewards with strong SEO capabilities.",
      "Participated in product development for Teach for Nigeria and Flutterwave events.",
      "Collaborated cross-funtionally with backend and product teams on scalability improvements",
    ],
    date: "2023 - 2025",
    logo: enterscaleLogo,
  },
  {
    role: "Intern Frontend Engineer",
    company: "Alabian Solution",
    description:
      "Alabian Solutions combines IT consulting, software and web services, and practical training, positioning themselves as a full-stack digital services provider and coding school.",
    expertise: [
      "Internship focused on frontend development and UI engineering",
      "QA testing and bug tracking",
      "Built CRUD apps and dynamic form logic using React, Node.js, PostgreSQL",
      "Gained hands-on experience in development workflows, Git versioning, and APIs.",
      "Participated in peer code reviews and testing cycles, laying foundation for clean code and modular design.",
    ],
    date: "2021",
    logo: alabian,
  },
];
