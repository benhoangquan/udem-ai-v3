// Sidebar for Blogs section
const activitiesSidebar = [
  {
    text: "Blogs",
    collapsed: false,
    items: [
      {
        text: "Overview",
        link: "/en/blogs/",
      },
      {
        text: "Weekly Meetings",
        link: "/en/blogs/weekly/",
      },
      {
        text: "Technical",
        link: "/en/blogs/technical/",
      },
    ],
  },
  {
    text: "Projects",
    collapsed: false,
    items: [
      {
        text: "Overview",
        link: "/en/projects/",
      },
    ],
  },
  {
    text: "Resources",
    collapsed: false,
    items: [
      {
        text: "Overview",
        link: "/en/resources/",
      },
    ],
  },
];

// Sidebar for Photos/Members section
const membersSidebar = [
  {
    text: "Our Photos",
    collapsed: false,
    items: [
      {
        text: "Overview",
        link: "/en/photos/",
      },
    ],
  },
  {
    text: "Executives",
    collapsed: false,
    items: [
      {
        text: "Overview",
        link: "/en/executives/",
      },
    ],
  },
];

// Default sidebar for home and other pages
const defaultSidebar = [
  {
    text: "Our Activities",
    collapsed: false,
    items: [
      {
        text: "Blogs",
        link: "/en/blogs/",
      },
      {
        text: "Projects",
        link: "/en/projects/",
      },
      {
        text: "Resources",
        link: "/en/resources/",
      },
    ],
  },
];

export default {
  "/en/": defaultSidebar,
  "/en/blogs/": activitiesSidebar,
  "/en/projects/": activitiesSidebar,
  "/en/resources/": activitiesSidebar,
  "/en/photos/": membersSidebar,
  "/en/executives/": membersSidebar,
};
