import * as ROUTES from "./routes";

const caseLinks = [
  {
    title: "sakneen",
    url: ROUTES.CASE_1,
    coverImg: "/assets/sakneen/cover2.webp",
  },
  {
    title: "course app",
    url: ROUTES.CASE_2,
    coverImg: "/assets/courseApp/visual.webp",
  },
  {
    title: "agency portfolio",
    url: ROUTES.CASE_3,
    coverImg: "/assets/agencyPortfolio/cover.webp",
  },
  {
    title: "broker app",
    url: ROUTES.CASE_4,
    coverImg: "/assets/broker/cover.webp",
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
  coverTitle: "sakneen",
  coverSubTitle: "Buy or sell homes in Egypt",
  strong: "Sakneen, the online portal",
  bio: "that helps home buyers search for properties, key financial service providers and prominent angel investors spanning Egypt, MENA, the US, and Europe.",
  coverImg: "/assets/sakneen/cover2.webp",
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

const sakProblem = {
  probDescPrimary:
    "Today, finding the right home is a time-consuming and overwhelming process that wastes valuable time, money, and effort. Sellers also lose out on opportunities simply because the buyer wasn’t aware of the seller’s offering.",
  probDescsecondary:
    "We’re looking to reinvent the real estate process. Standing in the way of a better real estate experience is disorganized public information, mismatched incentives in the sales process, and a lack of transparency around financials.",
  probImg: "/assets/sakneen/problem2.webp",
};

const sakSolOne = {
  solOneDescPrimary:
    "First task is to bring transparency to the search process by helping real estate developers and sellers connect directly with potential buyers.",
  solOneDescsecondary:
    "While the need for a superior digital experience was always clear.",
  solOneImg: "/assets/sakneen/sol1.webp",
};

const sakSolTwo = {
  solTwoDescPrimary:
    "Build a very exciting filter experience to helps home buyers reach to potential home that can save time and efforts.",
  solTwoDescsecondary:
    "The filtration system contain needs of home buyers to find potential home, can select specific location, developer, price range, property type and more. ",
  solTwoImg: "/assets/sakneen/sol2.webp",
};

const sakSolThree = {
  solThreeDescPrimary:
    "Build 3D viewer, home buyer can take a 3D virtual tour for potential home and contain all information home buyers needs .",
  solThreeDescsecondary:
    "Call to actions by (call, mail and whatsApp) easily with home buyer hands.",
  solThreeImg: "/assets/sakneen/3d-space.webp",
};

const sakAppGuide = [
  {
    subTitle: "components",
    desc: "Build component based on Material UI Design System",
    img: "./assets/sakneen/components.webp",
  },
  {
    subTitle: "colors",
    img: "./assets/sakneen/colors.webp",
  },
  {
    subTitle: "typography",
    img: "./assets/sakneen/typo.webp",
  },
  {
    subTitle: "iconography",
    img: "./assets/sakneen/icons.webp",
  },
  {
    subTitle: "imagery",
    desc:"Work with professional photographers who go outdoor and take photos for homes then prepare images to work well in website .",
    img: "./assets/sakneen/imagery.webp",
  },
];
// sakneen Case

// CourseApp Case
const courseAppCover = {
  coverTitle: "course app",
  subTitle: "About the project",
  strong: "ios app",
  bio: "contain various of online course in programming, algorithms and data structures, can select favorites course with specific teachers in this field .",
  coverImg: "/assets/courseApp/visual.webp",
};

const courseAppProjectStatus = [
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

const CourseAppFlow = {
  flowTitle: "user flow",
  flowDesc:
    "simple flow to show important screens and how user can navigate within those screens",
  flowImg: "/assets/courseApp/userflow.webp",
};

const CourseAppFraming = {
  frameTitle: "wireframing",
  frameDesc:
    "black and white low fidelity illustrations to show how elements working together before applying visuals",
  frameImg: "/assets/courseApp/wireframing.webp",
};

const CourseAppVisual = {
  visualTitle: "visual design",
  visualDesc:
    "high fidelity mockups illustrations after applying colors, icon, typography and any other UI elements",
  visualImg: "/assets/courseApp/visual.webp",
};

const CourseAppPrototype = {
  prototypeTitle: "prototyping",
  prototypeDesc:
    "make connections with all screens and present how user can move from frame to another with suitable transitions and easing",
  prototypeImg: "/assets/courseApp/prototyping.webp",
};

const CourseAppGuide = [
  {
    subTitle: "colors",
    img: "./assets/courseApp/colors.webp",
  },
  {
    subTitle: "typography",
    img: "./assets/courseApp/typography.webp",
  },
  {
    subTitle: "iconography",
    img: "./assets/courseApp/icons.webp",
  },
  {
    subTitle: "illustration",
    img: "./assets/courseApp/illastrations.webp",
  },
  {
    subTitle: "components",
    img: "./assets/courseApp/components.webp",
  },
];
// CourseApp Case

// agency portfolio case
const agencyCover = {
  coverTitle: "agency portfolio",
  coverSubTitle: "About the project",
  strong: "Responsive website portfolio",
  bio: "for software agency looking for build web and mobile applications, also make services like quality assurance, web and graphics design .",
  coverImg: "/assets/agencyPortfolio/cover.webp",
};

const agencyProjectStatus = [
  {
    title: "duration",
    collection: [
      {
        bio: "3 weeks",
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

const agencyFlow = {
  flowTitle: "information architecture",
  flowImg: "/assets/agencyPortfolio/flow.webp",
};

const agencyLanding = {
  landingTitle: "landing page",
  landingDesc:
    "First task is build landing page to show what type of services agency build, some projects examples of work and analytics .",
    landingImg: "/assets/agencyPortfolio/landing.webp",
};

const agencyPre = {
  preTitle: "presentation",
  preDesc:
    "Build full presentation to explain every project the agency built, show the problem, solution and used technologies",
    preImg: "/assets/agencyPortfolio/pre.webp",
};

const agencyService = {
  serviceTitle: "services",
  serviceDesc:
    "Design page to show what type of services and can filter by each service like mobile or web",
    serviceImg: "/assets/agencyPortfolio/work.webp",
};

const agencyAbout = {
  aboutTitle: "about & contact",
  aboutImg: "/assets/agencyPortfolio/about-contact.webp",
};

const agencyGuide = [
  {
    subTitle: "components",
    desc: "Build component based on twitter bootstrap",
    img: "/assets/agencyPortfolio/components.webp",
  },
  {
    subTitle: "colors",
    img: "/assets/agencyPortfolio/colors.webp",
  },
  {
    subTitle: "typography",
    img: "/assets/agencyPortfolio/typo.webp",
  },
];

// agency portfolio case

// broker

const brokerCover = {
  coverTitle: "Broker App",
  coverSubTitle: "About the project",
  strong: "Broker, mobile application,",
  bio: " Because the world of real estate is complicated enough as it is, we've decided to create an app for Brokers that is simple and easy to navigate and helps them to find their preferred project and compare it to other compounds.",
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
    probDescsecondary: "So we've decided to create an app for Brokers to help them to find their preferred projects and compounds.",
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

export {
  experience,
  contactInfo,
  getSocial,
  navItems,
  caseLinks,
  courseAppCover,
  courseAppProjectStatus,
  CourseAppFlow,
  CourseAppFraming,
  CourseAppVisual,
  CourseAppPrototype,
  CourseAppGuide,
  aboutMe,
  sakCover,
  sakProjectStatus,
  sakProblem,
  sakSolOne,
  sakSolTwo,
  sakSolThree,
  sakAppGuide,
  agencyCover,
  agencyProjectStatus,
  agencyFlow,
  agencyLanding,
  agencyPre,
  agencyService,
  agencyAbout,
  agencyGuide,
  brokerCover,
  brokerProjectStatus,
  brokerProblem,
  brokerSolOne,
  brokerSolTwo,
  brokerSolThree,
  brokerOnboardingFlow,
  brokerSearchFlow,
  brokerAccountFlow
};
