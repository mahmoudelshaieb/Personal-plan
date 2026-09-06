import * as ROUTES from "./routes";

// Site-wide content: nav, about, contact, and the work-index intro.
//
// Case study content does NOT live here. Each case study owns a module in
// constrains/cases/ and the work index derives its cards from that registry.
// See CLAUDE.md -> "Adding a case study".

const welcometxt = {
  name: "Mahmoud",
  bio: "I’m Mahmoud, UI/UX & Product Designer with nearly 6 years of experience designing digital products across B2B, real estate, and aviation. At flynas, I work across customer, crew, and operational experiences, while building a scalable design system and using AI to speed up my design workflow.",
};

// Navigation bar items
const navItems = [
  {
    name: "work",
    url: `${ROUTES.WORK}`,
  },
  {
    name: "about",
    url: `${ROUTES.ABOUT}`,
  },
  {
    name: "contact",
    url: `${ROUTES.CONTACT}`,
  },
];

// Experience section
const experience = [
  {
    title: "education",
    collection: [
      {
        subTitle: "Open Source Application Development",
        bio: "Technical Trainer, Information Technology Institute (ITI)",
        italic: "September 2019 - December 2019",
      },
      {
        subTitle: "Faculty of Computer and Information",
        bio: "Bachelor Degree, Computer Science",
        italic: "June 2012 - June 2016",
      },
    ],
  },
  {
    title: "experience",
    collection: [
      {
        subTitle: "UX/UI Engineer at Flynas",
        italic: "October 2025 - Present",
      },
      {
        subTitle: "Product Designer at sakneen",
        italic: "April 2020 - August 2025",
      },
      {
        subTitle: "UX/UI Designer at Pioneers",
        italic: "January 2020 - March 2020",
      },
    ],
  },
  {
    title: "design skills",
    collection: [
      {
        bio: "design thinking, interaction design, information architecture, visual design, design tools like (Adobe xd & figma) graphics design, color theory, wireframing, prototyping, design system.",
      },
    ],
  },
  {
    title: "technical skills",
    collection: [
      {
        bio: "HTML5, CSS3, responsive web design, mobile first approuch, understanding javascript with various frameworks like (react js), good Knowledge in Object Oriented Programming, Algorithms and Data Structures .",
      },
    ],
  },
];

// Contacts section
const contactInfo = [
  {
    title: "elshaieb_career@outlook.com",
    icon: "../assets/mail.svg",
    url: "mailto:elshaieb_career@outlook.com",
  },
  {
    title: "+20 101 695 3899",
    icon: "../assets/phone.svg",
    url: "tel:+201016953899",
  },
  // {
  //   title: "Cairo, Egypt",
  //   icon: "../assets/marker.svg",
  //   url: "https://goo.gl/maps/B3nhKEt64fLiAFzFA",
  // },
];

// Social section
const getSocial = [
  {
    title: "twitter",
    icon: "./assets/twitter.svg",
    url: "https://twitter.com/HMahmouds",
  },
  {
    title: "behace",
    icon: "./assets/behance.svg",
    url: "https://behance.net/mahmoudelshaieb",
  },
  {
    title: "linkedin",
    icon: "./assets/linkedin.svg",
    url: "https://www.linkedin.com/in/mahmoudelshaieb/",
  },
];

// about
const aboutMe = {
  avatar: "./assets/me.png",
  primaryBio:
    "I'm mahmoud, have Bachelor's degree in Computer and Information Sciences graduated in 2016, I am a digital product designer with over 5 years of experience. I have completed several projects such as an e commerce web app, a real estate marketplace and SaaS projects such as dashboards and landing pages",
  secondaryBio:
    "I believe that good design is easy to understand, appropriate for people of various abilities and backgrounds, and solves user problems",
  lists: [
    "Empathize with users to identify their goal, pinpoint and motivations, also business objectives",
    "Define user problem space based on research like (user stories, personas, Affinity Diagrams)",
    "Take information, insights, and data gathered from research and create design solutions. That is the ideation process",
    "Finally create prototypes of the designs and test with a group of users to get feedback",
    "It’s an iterative process Test -> Ideate -> prototype (user-centered-design and iterative process)",
  ],
};

export {
  welcometxt,
  navItems,
  experience,
  contactInfo,
  getSocial,
  aboutMe,
};
