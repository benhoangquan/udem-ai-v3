// Sidebar pour la section Articles
const activitiesSidebar = [
  {
    text: "Articles",
    collapsed: false,
    items: [
      {
        text: "Vue d'ensemble",
        link: "/fr/blogs/",
      },
      {
        text: "Rencontres Hebdomadaires",
        link: "/fr/blogs/weekly/",
      },
      {
        text: "Technique",
        link: "/fr/blogs/technical/",
      },
    ],
  },
  {
    text: "Projets",
    collapsed: false,
    items: [
      {
        text: "Vue d'ensemble",
        link: "/fr/projects/",
      },
    ],
  },
  {
    text: "Ressources",
    collapsed: false,
    items: [
      {
        text: "Vue d'ensemble",
        link: "/fr/resources/",
      },
    ],
  },
];

// Sidebar pour la section Photos/Membres
const membersSidebar = [
  {
    text: "Nos Membres",
    collapsed: false,
    items: [
      {
        text: "Vue d'ensemble",
        link: "/fr/photos/",
      },
    ],
  },
  {
    text: "Exécutifs",
    collapsed: false,
    items: [
      {
        text: "Vue d'ensemble",
        link: "/fr/executives/",
      },
    ],
  },
];

// Sidebar par défaut pour la page d'accueil et autres pages
const defaultSidebar = [
  {
    text: "Nos Activités",
    collapsed: false,
    items: [
      {
        text: "Articles",
        link: "/fr/blogs/",
      },
      {
        text: "Projets",
        link: "/fr/projects/",
      },
      {
        text: "Ressources",
        link: "/fr/resources/",
      },
    ],
  },
];

export default {
  "/fr/": defaultSidebar,
  "/fr/blogs/": activitiesSidebar,
  "/fr/projects/": activitiesSidebar,
  "/fr/resources/": activitiesSidebar,
  "/fr/photos/": membersSidebar,
  "/fr/executives/": membersSidebar,
};
