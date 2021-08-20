import * as ROUTES from "./routes";

const caseLinks = [
  {
    title: "sakneen",
    url: ROUTES.CASE_1,
    coverImg: "/assets/sakneen/cover2.jpg",
  },
  {
    title: "course app",
    url: ROUTES.CASE_2,
    coverImg: "/assets/courseApp/visual.jpg",
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
// Social section
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
  subTitle: "Buy or sell homes in Egypt",
  strong: "Sakneen, the online portal",
  bio: "that helps home buyers search for properties, key financial service providers and prominent angel investors spanning Egypt, MENA, the US, and Europe.",
  coverImg: "/assets/sakneen/cover2.jpg",
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
  probImg: "/assets/sakneen/problem2.jpg",
};

const sakSolOne = {
  solOneDescPrimary:
    "First task is to bring transparency to the search process by helping real estate developers and sellers connect directly with potential buyers.",
  solOneDescsecondary:
    "While the need for a superior digital experience was always clear.",
  solOneImg: "/assets/sakneen/sol1.jpg",
};

const sakSolTwo = {
  solTwoDescPrimary:
    "Build a very exciting filter experience to helps home buyers reach to potential home that can save time and efforts.",
  solTwoDescsecondary:
    "The filtration system contain needs of home buyers to find potential home, can select specific location, developer, price range, property type and more. ",
  solTwoImg: "/assets/sakneen/sol2.jpg",
};

const sakSolThree = {
  solThreeDescPrimary:
    "Build 3D viewer, home buyer can take a 3D virtual tour for potential home and contain all information home buyers needs .",
  solThreeDescsecondary:
    "Call to actions by (call, mail and whatsApp) easily with home buyer hands.",
  solThreeImg: "/assets/sakneen/3d-space.jpg",
};

const sakAppGuide = [
  {
    subTitle: "components",
    desc: "Build component based on Material UI Design System",
    img: "./assets/sakneen/components.png",
  },
  {
    subTitle: "colors",
    img: "./assets/sakneen/colors.png",
  },
  {
    subTitle: "typography",
    img: "./assets/sakneen/typo.png",
  },
  {
    subTitle: "iconography",
    img: "./assets/sakneen/icons.png",
  },
  {
    subTitle: "imagery",
    desc:"Work with professional photographers who go outdoor and take photos for homes then prepare images to work well in website .",
    img: "./assets/sakneen/imagery.jpg",
  },
];
// sakneen Case

// CourseApp Case
const courseAppCover = {
  coverTitle: "course app",
  subTitle: "About the project",
  strong: "ios app",
  bio: "contain various of online course in programming, algorithms and data structures, can select favorites course with specific teachers in this field .",
  coverImg: "/assets/courseApp/visual.jpg",
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
  flowImg: "/assets/courseApp/userflow.png",
};

const CourseAppFraming = {
  frameTitle: "wireframing",
  frameDesc:
    "black and white low fidelity illustrations to show how elements working together before applying visuals",
  frameImg: "/assets/courseApp/wireframing.png",
};

const CourseAppVisual = {
  visualTitle: "visual design",
  visualDesc:
    "high fidelity mockups illustrations after applying colors, icon, typography and any other UI elements",
  visualImg: "/assets/courseApp/visual.jpg",
};

const CourseAppPrototype = {
  prototypeTitle: "prototyping",
  prototypeDesc:
    "make connections with all screens and present how user can move from frame to another with suitable transitions and easing",
  prototypeImg: "/assets/courseApp/prototyping.png",
};

const CourseAppGuide = [
  {
    subTitle: "colors",
    img: "./assets/courseApp/colors.png",
  },
  {
    subTitle: "typography",
    img: "./assets/courseApp/typography.png",
  },
  {
    subTitle: "iconography",
    img: "./assets/courseApp/icons.png",
  },
  {
    subTitle: "illustration",
    img: "./assets/courseApp/illastrations.png",
  },
  {
    subTitle: "components",
    img: "./assets/courseApp/components.png",
  },
];
// CourseApp Case

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
  sakAppGuide
};
