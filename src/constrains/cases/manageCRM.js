import * as ROUTES from "../routes";
import { STATUS } from "./status";

// Real Estate CRM — bento layout.
// Every value below belongs to this case study only. Do not import content
// from another case module: copy it, so editing one study can never change another.
const manageCRM = {
  meta: {
    key: "manageCRM",
    layout: "bento",
    title: "Real Estate CRM",
    status: STATUS.LIVE,
    desc: "Modern, powerful, affordable platform to manage your projects and supercharge your sales team",
    url: ROUTES.CASE_3,
    cover: "/assets/manageCRM/manage-cover.webp",
  },

  overview: {
    title: "overview",
    desc: "Modern, powerful, affordable platform to manage your projects and supercharge your sales team",
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
      title: "We synchronize with your systems.",
      desc: "Ready for the next wave of personalization tools, composable backends, Everything is an API call away.",
      img: "/assets/manageCRM/00.png",
    },
    {
      kind: "bento",
      span: 8,
      descWidth: 60,
      assetWidth: 80,
      title: "Real Time Inventory",
      desc: "We synchronize with your systems to make sure your inventory is always up to date.",
      img: "/assets/manageCRM/01.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Management Workflow",
      desc: "Supercharge your inventory by creating fully customize projects.",
      img: "/assets/manageCRM/02.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Sort & Filters",
      desc: "Display appropriate inventory by customize your search.",
      img: "/assets/manageCRM/03.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Price Updating",
      desc: "Super fast your inventory by updating the price in one-click.",
      img: "/assets/manageCRM/04.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Archive Units",
      desc: "A soft delete is available for units and we can recover them up to 30 days.",
      img: "/assets/manageCRM/05.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Fully Management",
      desc: "Free customize your inventory with multiple actions.",
      img: "/assets/manageCRM/06.png",
    },
    {
      kind: "bento",
      span: 8,
      descWidth: 60,
      title: "Fully Automated Workflow",
      desc: "We offer Multiple unit sections of your inventory to bulk edits and synchronize your data.",
      img: "/assets/manageCRM/07.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Update Unit Status",
      desc: "Control next decision by checking and updating unit status.",
      img: "/assets/manageCRM/08.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Track Requests",
      desc: "Speedy close positional transactions by following current request status.",
      img: "/assets/manageCRM/09.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Simple EOI System",
      desc: "Reach out to a large audience who desire to buy a unit for a new project.",
      img: "/assets/manageCRM/10.png",
    },
    {
      kind: "bento",
      span: 12,
      descWidth: 45,
      title: "Team Management",
      desc: "Manage and collaborate with team members to set and get permission about projects.",
      img: "/assets/manageCRM/11.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Team Role",
      desc: "Collaborate in real-time, or work async with comments and version history.",
      img: "/assets/manageCRM/12.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Add Users",
      desc: "Synchronize your team members by uploading via spreadsheet.",
      img: "/assets/manageCRM/13.png",
    },
    {
      kind: "bento",
      span: 4,
      title: "Real Time Collaboration",
      desc: "Facilitate dynamic collaboration in real-time to analyze, and share insights.",
      img: "/assets/manageCRM/14.png",
    },
    {
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

export default manageCRM;
