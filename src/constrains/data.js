import * as ROUTES from "./routes";

const welcometxt = {
  name: "Mahmoud",
  bio: "I'm currently working as a digital product designer with 5+ years of experience, I've had the opportunity to work on different projects such as digital sales tools for real estate developers, learning management system, and B2B dashboard."
}

const caseLinks = [
  {
    title: "Real Estate CRM",
    workFlow:"Live",
    desc: "Modern, powerful, affordable platform to manage your projects and supercharge your sales team",
    url: ROUTES.CASE_3,
    coverImg: "/assets/manageCRM/manage-cover.webp",
  },
  {
    title: "Real Estate Sales Tool",
    workFlow:"Live",
    desc: "Display all your inventory on a map reflecting availability from your CRM and close transactions from anywhere at any time",
    url: ROUTES.CASE_7,
    coverImg: "/assets/SalesTool/sales-cover.webp",
  },
  {
    title: "Interactive navigation tool",
    workFlow:"Live",
    desc: "An interactive geographic navigation tool, enabling users to explore locations across Egypt through an intuitive zoom-and-click interface",
    url: "https://sodic.public.sakneen.com/search/map/public#7.24/30.296/30.299",
    coverImg: "/assets/geo-tool/banner.webp",
  },
  {
    title: "Driving Mobile App",
    workFlow:"Finished",
    desc: "Make travel between Egypt's governorates easier and more affordable for travellers by sharing trips with nearby networks",
    url: ROUTES.CASE_6,
    coverImg: "/assets/drivingApp/d-cover.webp",
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
        subTitle: "Product Designer at sakneen",
        italic: "April 2020 - Present",
      },
      {
        subTitle: "UI Developer at sakneen",
        italic: "April 2020 - October 2021",
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
  avatar: "./assets/me.jpeg",
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

// dashboard-crm

const impactmetrics = [
  {
    title: "Real Estate Developers",
    metric: "+10",
  },
  {
    title: "Salespersons",
    metric: "+2k",
  },
  {
    title: "Inventory Management",
    metric: "+30k",
  },
];


const DS = {
  introDS: "Full-featured Design System.",
  descDS: "Design language that guides how we build high-quality digital experiences with everything typography, sizes, icons, colors, spacing, patterns, tokens and full set of highly customizable components and styles ready to use inside applications.",
  imgDS: "/assets/manageCRM/ds.png"
}


const CRMOverview = {
  projectName: "Real Estate CRM",
  desc: "Modern, powerful, affordable platform to manage your projects and supercharge your sales team",
};

const CRMintro = {
  intro00: "We synchronize with your systems.",
  desc00: "Ready for the next wave of personalization tools, composable backends, Everything is an API call away.",
  img00: "/assets/manageCRM/00.png"
}

const realTimeInventory = {
  title01: "Real Time Inventory",
  desc01: "We synchronize with your systems to make sure your inventory is always up to date.",
  img01: "/assets/manageCRM/01.png"
}

const workFlow = {
  title02: "Management Workflow",
  desc02: "Supercharge your inventory by creating fully customize projects.",
  img02: "/assets/manageCRM/02.png"
}

const filters = {
  title03: "Sort & Filters",
  desc03: "Display appropriate inventory by customize your search.",
  img03: "/assets/manageCRM/03.png"
}

const price = {
  title04: "Price Updating",
  desc04: "Super fast your inventory by updating the price in one-click.",
  img04: "/assets/manageCRM/04.png"
}

const archive = {
  title05: "Archive Units",
  desc05: "A soft delete is available for units and we can recover them up to 30 days.",
  img05: "/assets/manageCRM/05.png"
}

const fullManage = {
  title06: "Fully Management",
  desc06: "Free customize your inventory with multiple actions.",
  img06: "/assets/manageCRM/06.png"
}

const autoWorkflow = {
  title07: "Fully Automated Workflow",
  desc07: "We offer Multiple unit sections of your inventory to bulk edits and synchronize your data.",
  img07: "/assets/manageCRM/07.png"
}

const unitStatus = {
  title08: "Update Unit Status",
  desc08: "Control next decision by checking and updating unit status.",
  img08: "/assets/manageCRM/08.png"
}

const trackRequests = {
  title09: "Track Requests",
  desc09: "Speedy close positional transactions by following current request status.",
  img09: "/assets/manageCRM/09.png"
}

const EOI = {
  title10: "Simple EOI System",
  desc10: "Reach out to a large audience who desire to buy a unit for a new project.",
  img10: "/assets/manageCRM/10.png"
}

const teamManagement = {
  title11: "Team Management",
  desc11: "Manage and collaborate with team members to set and get permission about projects.",
  img11: "/assets/manageCRM/11.png"
}

const teamRole = {
  title12: "Team Role",
  desc12: "Collaborate in real-time, or work async with comments and version history.",
  img12: "/assets/manageCRM/12.png"
}

const addUsers = {
  title13: "Add Users",
  desc13: "Synchronize your team members by uploading via spreadsheet.",
  img13: "/assets/manageCRM/13.png"
}

const collaboration = {
  title14: "Real Time Collaboration",
  desc14: "Facilitate dynamic collaboration in real-time to analyze, and share insights.",
  img14: "/assets/manageCRM/14.png"
}

// dashboard-crm


// Sales Tool

const salesOverview = {
  projectName: "Real Estate Sales Tool",
  desc: "Display all your inventory on a map reflecting availability from your CRM and close transactions from anywhere at any time",
};

const salesintro = {
  intro00: "Provide a seamless, performant map experience.",
  desc00: "Display all your inventory on a map reflecting availability from your CRM.",
  img00: "/assets/SalesTool/00.png"
}

const mapintro = {
  intro01: "Streamline custom data workflows.",
  desc01: "Overlay your masterplan and easily upload and draw projects outlines on the map that are tied to latitude/longitude coordinates.",
  img01: "/assets/SalesTool/01.png"
}

const engagement = {
  title02: "Boost engagement with real-time projects",
  desc02: "Control all projects with specific masterplan and grab your customer attention about available units on specific project.",
  img02: "/assets/SalesTool/02.png"
}

const searchFilters = {
  title03: "Instant Filter & Search",
  desc03: "You will be able to instantly search through thousands of properties.",
  img03: "/assets/SalesTool/03.png"
}

const customize = {
  title04: "Customize in a click",
  desc04: "Configuring the map for different types of work is as easy as flipping a switch.",
  img04: "/assets/SalesTool/04.png"
}

const commuteCalculator = {
  title05: "Commute Calculator",
  desc05: "Distance between desired unit and your current location work or primary home.",
  img05: "/assets/SalesTool/05.png"
}

const searchPrecisely  = {
  title06: "Search Precisely",
  desc06: "Speedy find desired property by searching by unit ID.",
  img06: "/assets/SalesTool/06.png"
}

const unitManagement  = {
  title07: "Unit Management",
  desc07: "Sell anywhere your customers are by listing and reserve a unit for potential customer.",
  img07: "/assets/SalesTool/07.png"
}

const Offergeneration  = {
  title08: "One-click offer generation",
  desc08: "Instantly create offers for all your clients - no more copy pasting offers together.",
  img08: "/assets/SalesTool/08.png"
}

const community = {
  intro09: "Engage with the Community.",
  desc09: "Take a look at what's taking place inside the community, discover the amenities that are available, and stay updated on construction updates from developer. Also, learn more about the project and get in touch with available units for sale.",
  img09: "/assets/SalesTool/09.png"
}

const sakSuccess = {
  successTitle: "product success 🏅",
  successDesc:
    "The company has signed contracts with 6+ real estate developers and onboarded more than 100 salespeople. Their aim is to sell over a thousand units in 10+ projects.",
};

const sakLearning = {
  learnTitle: "what i learned 👨🏼‍💻",
  learnList: [
    "Collaborated closely with management and product design team regularly in order to get feedback and show progress on designs",
    "Increase design speed and ensure quality delivery on time by designing reusable components at Figma",
    "Responsible for designing an expandable design system that guides how we build high-quality and consistent digital experiences",
    "Managed incoming designs, assisted teammates and reviewed styles",
    "Cooperated with software engineers to deliver design assets for development process",
  ],
};

//Sales Tool

// sakneen Case
const sakCover = {
  coverImg: "/assets/sakneen/sak-cover.webp",
};

const saknUrls = [
  {
    label: "more info",
    url: "https://www.sakneen.com/en"
  },
]

const sakOverview = {
  projectName: "Real Estate Marketplace",
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
    title: "Type",
    collection: [
      {
        bio: "SaaS Project",
      },
    ],
  },
];

const sakScroll = [
  {
    src: "/assets/sakneen/sak-1.webp",
  },
  {
    src: "/assets/sakneen/sak-2.webp",
  },
  {
    src: "/assets/sakneen/sak-3.webp",
  },
];

// sakneen Case

// driving Case
const drivingCover = {
  coverImg: "/assets/drivingApp/d-cover.webp",
};

const drivingUrls = [
  {
    label: "Figma File",
    url: "https://www.figma.com/file/ERjPy53J2fmJH1Y5DMfLqU/%F0%9F%9A%97-Ucar-Mobile-App?node-id=0-1&t=22fFosLupkla45by-0"
  },
]

const drivingOverview = {
  projectName: "Driving Mobile App",
  title: "overview",
  desc: "UCAR is a freelance project on Upwork. This project's goal is to make travel between Egypt's governorates easier and more affordable for travellers by sharing trips with nearby networks.",
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
        bio: "Upwork",
      },
    ],
  },
];

const drivingProblem = {
  probTitle: "The problem",
  probDesc:
    "Egyptians are having difficulty traveling from one governorate to another. Traveling within Egypt between governorates is painful and unsafe, and finding the right ride or transportation is an overwhelming process that wastes valuable time, effort, and money.",
};

const drivingSolution = {
  solTitle: "project goals",
  solSubTitle: "Trip sharing, Drive or Ride",
  solDesc1:
    "As a driver, can utilize his personal vehicle and share a trip with surrounding networks of riders and make money.",
  solDesc2:
    "As a rider, can submit incoming trips and connect with drivers if their trips match. it’s lower cost and save money.",
  solImages: [
    {
      src: "/assets/drivingApp/s1.webp",
    },
    {
      src: "/assets/drivingApp/s2.webp",
    },
    {
      src: "/assets/drivingApp/s3.webp",
    },
  ],
};

const drivingResearch = {
  researchTitle: "User Research",
  researchDesc1:
    "The problem of travel between governorates in Egypt began due to a lack of interest in the public transportation network. I and people nearby are traveling a lot, and a huge majority of travelers experience the same problem while traveling between governorates.",
  researchDesc2:
    "So I began researching this topic in order to find a solution, and I asked a group of people if there could be an application like Uber that could solve this problem. I interviewed people who are already using travel apps like Uber. Some of the pain points are:",
  researchLists: [
    "It's only in the capital of Egypt",
    "The price is very high",
  ],
};

const drivingAnalysis = {
  analysisTitle: "Competitive analysis",
  analysisDesc:
    "After the interview, take notes. I analyzed 4 most popular apps surrounding this goal and topic and I found that none of them can solve the problem and help passengers have a comfortable and affordable trip.",
  analysisLists: ["Uber", "SWVL", "InDriver", "HitchHiker"],
};

const drivingPersona = {
  personaTitle: "User Persona",
  personaImages: [
    {
      src: "/assets/drivingApp/persona1.webp",
    },
    {
      src: "/assets/drivingApp/persona2.webp",
    },
  ],
};

const drivingFlow = {
  flowTitle: "Information Architecture",
  flowImages: [
    {
      src: "/assets/drivingApp/user-flow.png",
    },
  ],
};

const drivingTesting = {
  testTitle: "User testing, iteration designs",
  testDesc:
    "Conducting user tests with a group of target users and getting feedback. We've gone through several design iterations in order to improve some designs and add new features.",
  testImages: [
    {
      src: "/assets/drivingApp/test1.webp",
    },
    {
      src: "/assets/drivingApp/test2.webp",
    },
    {
      src: "/assets/drivingApp/test3.webp",
    },
  ],
};
const drivingDesigns = {
  designsTitle: "Final designs",
  designsImg: [
    {
      src: "/assets/drivingApp/d-1.webp",
    },
    {
      src: "/assets/drivingApp/d-2.webp",
    },
    {
      src: "/assets/drivingApp/d-3.webp",
    },
    {
      src: "/assets/drivingApp/d-4.webp",
    },
    {
      src: "/assets/drivingApp/d-com.webp",
    },
  ],
};

const drivingLearning = {
  learnTitle: "what i learned 👨🏼‍💻",
  learnList: [
    "How to conduct user research and make a competitive analysis",
    "How to listen to potential users to improve UX usability",
    "Analyzed the most popular apps surrounding this goal to conduct a competitive analysis",
    "Built UI/UX mobile application with 2+ iterations of user flows and prototyping",
    "Designed 20+ reusable components in Figma to increase design speed and ensure quality delivery on time",
  ],
};

const drivingInsights = [
  {
    title: "Tools",
    desc: "Figma, miro, user research, competitive analysis,mobile app design",
  },
  {
    title: "Deliverables",
    desc: "Accessible Figma file of 20+ components and mobile screens",
  },
  {
    title: "Impacts",
    desc: "Build UI/UX mobile app with 2+ iterations of user flows and prototyping",
  },
];

// driving Case

// coin app

const coinCover = {
  coverImg: "/assets/cJungle/cover.webp",
};

const coinUrls = [
  {
    label: "Figma File",
    url: "https://www.figma.com/file/8KAKHkUXWoZLxoJ1VMJubD/Bitcoinjungle-Website-(Freelance-Copy)?node-id=0-1&t=QB5g6P0lpohXUhJR-0"
  },
  {
    label: "Beta Website",
    url: "https://market.staging.pvbtc.cloud/"
  },
]

const coinOverview = {
  projectName: "Bitcoin Jungle",
  title: "overview",
  desc: "I had the opportunity to work on a project redesigning a responsive website for an existing mobile application as a freelancer on Upwork. This project aims to display the latest posts about subjects such as vehicles, restaurants, and properties, among others. Users can search for any subject, and the app includes a map search flow that makes the search process easier.",
};

const coinInsights = [
  {
    title: "Tools",
    desc: "Figma, user research, website design",
  },
  {
    title: "Deliverables",
    desc: "Accessible Figma file of 23+ components and user flows",
  },
  {
    title: "Impacts",
    desc: "Build Responsive wesite design with 2+ iterations of user flows and prototyping",
  },
];

const coinProjectStatus = [
  {
    title: "Duration",
    collection: [
      {
        bio: "4 Weeks",
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
        bio: "Upwork",
      },
    ],
  },
];

const coinProblem = {
  probTitle: "The Problem, Research Summary",
  probDesc:
    "Before considering redesigning, I needed to learn more about the concept.",
  probDesc2:
    "Analyzed an existing mobile app and Looked at similar apps, and get some insights:",
  probLists: [
    "lack of text accessibility for map pins and Text sizes, white spacing, and the layout grid are all inconsistent",
    "unclear toggle control between map and list view",
    "The filter experience is overwhelming because it appears above the main view",
    "Many users are unable to install the mobile app on their smartphones, so they need a website to access via a laptop or phone browser",
  ],
};

const coinFlow = {
  flowTitle: "User Flow",
  flowImages: [
    {
      src: "/assets/cJungle/user-flow.png",
    },
  ],
};

const coinDesigns = {
  designsTitle: "Designs, Iterations",
  designsImg: [
    {
      src: "/assets/cJungle/s1.webp",
    },
    {
      src: "/assets/cJungle/s2.webp",
    },
    {
      src: "/assets/cJungle/s3.webp",
    },
  ],
};

const coinSuccess = {
  successTitle: "product success 🏅",
  successDesc:
    "Collaborated with a software engineer to deliver assets and components for the development process. (Still in the testing phase).",
};

const cointesting = {
  testTitle: "Feedbacks",
  testDesc:
    "We evaluated the designs with a group of users and received some feedback.",
  testImages: [
    {
      src: "/assets/cJungle/feedback.webp",
    },
  ],
};

const coinLearning = {
  learnTitle: "what i learned 👨🏼‍💻",
  learnList: [
    "Conducted user research with a group of target users",
    "Collaborated with a software engineer to deliver user flows for the implementation process",
    "Think and look for ways to make the user's search experience better",
    "Learned to work per hour and organize tasks and milestones on upwork",
  ],
};

// coin app

export {
  welcometxt,
  experience,
  contactInfo,
  getSocial,
  navItems,
  caseLinks,
  aboutMe,
  sakCover,
  saknUrls,
  sakOverview,
  sakProjectStatus,
  sakScroll,
  drivingCover,
  drivingUrls,
  drivingOverview,
  drivingAppProjectStatus,
  drivingProblem,
  drivingSolution,
  drivingResearch,
  drivingAnalysis,
  drivingPersona,
  drivingFlow,
  drivingTesting,
  drivingLearning,
  drivingDesigns,
  drivingInsights,
  coinCover,
  coinUrls,
  coinOverview,
  coinInsights,
  coinProjectStatus,
  coinProblem,
  coinFlow,
  coinDesigns,
  coinSuccess,
  cointesting,
  coinLearning,
  impactmetrics,
  CRMOverview,
  CRMintro,
  realTimeInventory,
  workFlow,
  filters,
  price,
  archive,
  fullManage,
  autoWorkflow,
  unitStatus,
  trackRequests,
  EOI,
  teamManagement,
  teamRole,
  addUsers,
  collaboration,
  DS,
  salesOverview,
  salesintro,
  mapintro,
  engagement,
  searchFilters,
  customize,
  commuteCalculator,
  searchPrecisely,
  unitManagement,
  Offergeneration,
  community,
  sakSuccess,
  sakLearning
};
