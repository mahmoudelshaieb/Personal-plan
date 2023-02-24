import * as ROUTES from "./routes";

const caseLinks = [
  {
    title: "Real Estate Marketplace",
    desc: "Buy or sell homes in Egypt, Sakneen, the online portal that helps home buyers search for properties",
    url: ROUTES.CASE_1,
    coverImg: "/assets/sakneen/sak-cover.webp",
  },
  {
    title: "Driving Mobile App",
    desc: "Driving mobile app in a specific area of Egypt",
    url: ROUTES.CASE_6,
    coverImg: "/assets/drivingApp/d-cover.webp",
  },
  {
    title: "Real Estate Mobile App",
    desc: "Mobile application that makes the experience for a new buyer, homeowner, and Developer Analytics",
    url: ROUTES.CASE_5,
    coverImg: "/assets/sodic/banner.webp",
  },
];

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
        subTitle: "Sakneen",
        italic: "April 2020 - Present",
      },
      {
        subTitle: "Pioneers",
        italic: "January 2020 - March 2020",
      },
    ],
  },
  {
    title: "design skills",
    collection: [
      {
        bio: "design thinking, interaction design, information architecture, visual design, design tools like (Adobe xd & figma) graphics design, color theory, wireframing, prototyping .",
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
  avatar: "./assets/me.jpeg",
  primaryBio:
    "I'm mahmoud, have Bachelor's degree in Computer and Information Sciences graduated in 2016, I'm digital product designer, user interface creator for web and mobile applications based on user experience and business goals .",
  secondaryBio:
    "I develop myself in programming and frontend development, this current personal portfolio is completely customized and i have done it from scratch using react js (no website builder no CMS) .",
};

// sakneen Case
const sakCover = {
  coverImg: "/assets/sakneen/sak-cover.webp",
};

const sakOverview = {
  projectName: "Real Estate Marketplace (Sakneen)",
  title: "overview",
  desc: "Sakneen, the online portal that helps home buyers search for properties, key financial service providers and prominent angel investors spanning Egypt, MENA, the US, and Europe.",
};

const sakProjectStatus = [
  {
    title: "date",
    collection: [
      {
        bio: "January 2020, present",
      },
    ],
  },
  {
    title: "role",
    collection: [
      {
        bio: "Product Designer",
      },
    ],
  },
  {
    title: "location",
    collection: [
      {
        bio: "Cairo, Egypt",
      },
    ],
  },
];

const sakScroll = [
  "/assets/sakneen/sak-1.webp",
  "/assets/sakneen/sak-2.webp",
  "/assets/sakneen/sak-3.webp",
];

// sakneen Case

// driving Case
const drivingCover = {
  coverImg: "/assets/drivingApp/d-cover.webp",
};

const drivingOverview = {
  projectName: "Driving Mobile App",
  title: "overview",
  desc: "Driving mobile app in a specific area of Egypt",
};

const drivingAppProjectStatus = [
  {
    title: "duration",
    collection: [
      {
        bio: "4 weeks",
      },
    ],
  },
  {
    title: "role",
    collection: [
      {
        bio: "UX/UI Designer",
      },
    ],
  },
  {
    title: "location",
    collection: [
      {
        bio: "Cairo, Egypt",
      },
    ],
  },
];

const drivingScroll = [
  "/assets/drivingApp/d-1.webp",
  "/assets/drivingApp/d-2.webp",
  "/assets/drivingApp/d-3.webp",
  "/assets/drivingApp/d-4.webp",
  "/assets/drivingApp/d-com.webp",
];

// driving Case

// broker

const brokerCover = {
  coverTitle: "Broker App",
  bio: " Broker, mobile application,Because the world of real estate is complicated enough as it is, we've decided to create an app for Brokers that is simple and easy to navigate and helps them to find their preferred project and compare it to other compounds.",
  coverImg: "/assets/broker/cover.webp",
};

const brokerProjectStatus = [
  {
    title: "date",
    collection: [
      {
        bio: "October 2020, February 2021",
      },
    ],
  },
  {
    title: "role",
    collection: [
      {
        bio: "Product Designer",
      },
    ],
  },
  {
    title: "location",
    collection: [
      {
        bio: "Cairo, Egypt",
      },
    ],
  },
];

const brokerProblem = {
  probDescPrimary:
    "In the real estate world, brokers suffer to find preferred projects, and compounds this wastes valuable time, money, and effort.",
  probDescsecondary:
    "So we've decided to create an app for Brokers to help them to find their preferred projects and compounds.",
  probImg: "/assets/sakneen/problem2.webp",
};

const brokerSolOne = {
  solOneDescPrimary:
    "Make a simple and easy process to navigate and help brokers to find their preferred project and compare it to other compounds, also manage their profile account.",
  solOneImg: "/assets/broker/sol1.webp",
};

const brokerSolTwo = {
  solTwoDescPrimary:
    "Because the design is a non-linear, iterative process, in iteration 0 we designed a house card containing lots of information.",
  solTwoDescsecondary:
    "But after user testing and reviewing user requirements, we decided to simplify the card design in the next iteration.",
  solTwoImg: "/assets/broker/sol2.webp",
};

const brokerSolThree = {
  solThreeDescPrimary:
    "Build filters process, in iteration 0 we make a design that looks like google maps, but after talking with potential users we know that’s not the best solution for them.",
  solThreeDescsecondary:
    "So we decided to search for better solutions, and in iteration 1 make the design simple and easy to navigate.",
  solThreeImg: "/assets/broker/sol3.webp",
};

const brokerOnboardingFlow = {
  flow1Title: "onboarding flow",
  flow1Img: "/assets/broker/onboarding-flow.webp",
};

const brokerSearchFlow = {
  flow2Title: "search flow",
  flow2Img: "/assets/broker/search-flow.webp",
};

const brokerAccountFlow = {
  flow3Title: "account flow",
  flow3Img: "/assets/broker/account-flow.webp",
};

// broker

// sodic

const sodicCover = {
  coverImg: "/assets/sodic/cover.webp",
};

const sodicOverview = {
  projectName: "Real Estate Mobile App",
  title: "overview",
  desc: "As a part of my work with sakneen I had the opportunity to work with a mobile application for real estate developers in Egypt alongside my teammates. This app builds a new buyer experience aims for an unprecedented level of transparency both for new buyers as well as for the existing community with features like (View Unit Details, Payment Notifications, ROI Calculator, Personalized Investment Opportunities, and Price Tracker).",
};

const sodicProjectStatus = [
  {
    title: "timeline",
    collection: [
      {
        bio: "February 2022, Present",
      },
    ],
  },
  {
    title: "role",
    collection: [
      {
        bio: "Product Designer",
      },
    ],
  },
  {
    title: "team size",
    collection: [
      {
        bio: "4 people",
      },
    ],
  },
];

const sodicProblem = {
  probTitle: "The problem",
  probDesc:
    "Today, finding the right home is a time-consuming and overwhelming process that wastes valuable time, money, and effort. Sellers also lose out on opportunities simply because the buyer wasn’t aware of the seller’s offering.",
};

const sodicSolution = {
  solTitle: "The challenge",
  solDesc:
    "A mobile application that makes the experience for a new buyer, homeowner, and Developer Analytics.",
  solImages: [
    "/assets/sodic/s1.webp",
    "/assets/sodic/s2.webp",
    "/assets/sodic/s3.webp",
  ],
};

const sodicUserResearch = {
  sodicResearhTitle: "User Research",
  sodicResearhDesc:
    "Alongside sakneen business owners, we made a survey and collect quantitative and statistical data for the SODIC Marketing budget and had able to conduct an interview with SODIC owners and offer sakneen solution.",
  sodicResearhImg: ["/assets/sodic/research.jpg"],
};

const sodicPersona = {
  sodicPersonaTitle: "User Persona",
  sodicPersonaImg: ["/assets/sodic/persona.webp"],
};

const sodicIteration = [
  {
    subTitle: "Iteration 2",
    img: "/assets/sodic/test-1.webp",
  },
  {
    subTitle: "Iteration 3",
    img: "/assets/sodic/test-2.webp",
  },
  {
    subTitle: "Iteration 5",
    img: "/assets/sodic/test-3.webp",
  },
];

const sodicGuide = [
  {
    subTitle: "design system",
    img: "/assets/sodic/style-guide.webp",
  },
  {
    subTitle: "components",
    img: "/assets/sodic/components.webp",
  },
];

const sodicDesigns = {
  sodicDesignsTitle: "Final designs",
  sodicDesignsImg: [
    "/assets/sodic/v1.webp",
    "/assets/sodic/v2.webp",
    "/assets/sodic/v3.webp",
    "/assets/sodic/v4.webp",
    "/assets/sodic/v5.webp",
    "/assets/sodic/v6.webp",
  ],
};

const sodicSuccess = {
  successTitle: "product success 🏅",
  successDesc: "Enabling the startup to sign the first SaaS contract worth more than $100,000 in 1 year after initiated prototyping of this app"
}

// sodic

export {
  experience,
  contactInfo,
  getSocial,
  navItems,
  caseLinks,
  aboutMe,
  sakCover,
  sakOverview,
  sakProjectStatus,
  sakScroll,
  drivingCover,
  drivingOverview,
  drivingAppProjectStatus,
  drivingScroll,
  brokerCover,
  brokerProjectStatus,
  brokerProblem,
  brokerSolOne,
  brokerSolTwo,
  brokerSolThree,
  brokerOnboardingFlow,
  brokerSearchFlow,
  brokerAccountFlow,
  sodicCover,
  sodicOverview,
  sodicProjectStatus,
  sodicProblem,
  sodicSolution,
  sodicUserResearch,
  sodicPersona,
  sodicIteration,
  sodicGuide,
  sodicDesigns,
  sodicSuccess,
};
