import * as ROUTES from "../routes";
import { STATUS } from "./status";

// Real Estate Sales Tool — bento layout.
// Every value below belongs to this case study only. Do not import content
// from another case module: copy it, so editing one study can never change another.
const salesTool = {
  meta: {
    key: "salesTool",
    layout: "bento",
    title: "Real Estate Sales Tool",
    status: STATUS.LIVE,
    desc: "Display all your inventory on a map reflecting availability from your CRM and close transactions from anywhere at any time",
    url: ROUTES.CASE_7,
    cover: "/assets/SalesTool/sales-cover.webp",
  },

  overview: {
    title: "overview",
    desc: "Display all your inventory on a map reflecting availability from your CRM and close transactions from anywhere at any time",
  },

  // ImpactMetrics renders a fixed 3-up row. Keep this at exactly 3 entries.
  metrics: [
    { title: "Real Estate Developers", metric: "10+" },
    { title: "Salespersons", metric: "2k+" },
    { title: "Inventory Management", metric: "300k+" },
  ],

  status: [
    { title: "date", collection: [{ bio: "January 2020, present" }] },
    { title: "role", collection: [{ bio: "Product Designer" }] },
    { title: "Type", collection: [{ bio: "SaaS Project" }] },
  ],

  // Grid cells, rendered in order. kind: "bento" | "descriptive".
  // span = the cell-lg-* width out of 12; everything is full width on mobile.
  sections: [
    {
      kind: "descriptive",
      className: "mt-5",
      span: 12,
      title: "Provide a seamless, performant map experience.",
      desc: "Display all your inventory on a map reflecting availability from your CRM.",
      img: "/assets/SalesTool/00.png",
    },
    {
      kind: "descriptive",
      span: 12,
      title: "Streamline custom data workflows.",
      desc: "Overlay your masterplan and easily upload and draw projects outlines on the map that are tied to latitude/longitude coordinates.",
      img: "/assets/SalesTool/01.png",
    },
    {
      kind: "bento",
      span: 8,
      descWidth: 80,
      assetWidth: 85,
      title: "Boost engagement with real-time projects",
      desc: "Control all projects with specific masterplan and grab your customer attention about available units on specific project.",
      img: "/assets/SalesTool/02.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Instant Filter & Search",
      desc: "You will be able to instantly search through thousands of properties.",
      img: "/assets/SalesTool/03.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Customize in a click",
      desc: "Configuring the map for different types of work is as easy as flipping a switch.",
      img: "/assets/SalesTool/04.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Commute Calculator",
      desc: "Distance between desired unit and your current location work or primary home.",
      img: "/assets/SalesTool/05.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Search Precisely",
      desc: "Speedy find desired property by searching by unit ID.",
      img: "/assets/SalesTool/06.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "One-click offer generation",
      desc: "Instantly create offers for all your clients - no more copy pasting offers together.",
      img: "/assets/SalesTool/08.png",
    },
    {
      kind: "bento",
      span: 8,
      descWidth: 60,
      title: "Unit Management",
      desc: "Sell anywhere your customers are by listing and reserve a unit for potential customer.",
      img: "/assets/SalesTool/07.png",
    },
    {
      kind: "descriptive",
      span: 12,
      title: "Engage with the Community.",
      desc: "Take a look at what's taking place inside the community, discover the amenities that are available, and stay updated on construction updates from developer. Also, learn more about the project and get in touch with available units for sale.",
      img: "/assets/SalesTool/09.png",
    },
    {
      // Same design-system panel the CRM study shows, including its manageCRM
      // asset path. Duplicated on purpose so the two studies stay independent.
      kind: "descriptive",
      span: 12,
      title: "Full-featured Design System.",
      desc: "Design language that guides how we build high-quality digital experiences with everything typography, sizes, icons, colors, spacing, patterns, tokens and full set of highly customizable components and styles ready to use inside applications.",
      img: "/assets/manageCRM/ds.png",
    },
  ],

  // FullPresent blocks rendered after the grid.
  outro: [
    {
      title: "product success 🏅",
      desc: "The company has signed contracts with 10+ real estate developers and onboarded more than +400 salespeople per day. Their aim is to sell over a thousand units in 15+ projects.",
      url: "https://www.sakneen.com/",
      urlLabel: "See More about this business",
    },
    {
      title: "what i learned 👨🏼‍💻",
      lists: [
        "Collaborated closely with management and product design team regularly in order to get feedback and show progress on designs",
        "Increase design speed and ensure quality delivery on time by designing reusable components at Figma",
        "Responsible for designing an expandable design system that guides how we build high-quality and consistent digital experiences",
        "Managed incoming designs, assisted teammates and reviewed styles",
        "Cooperated with software engineers to deliver design assets for development process",
      ],
    },
  ],
};

export default salesTool;
