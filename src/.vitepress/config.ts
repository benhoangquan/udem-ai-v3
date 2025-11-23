import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

import headConfig from "./config/headConfig";

import enNavigation from "./config/nav/en";
import frNavigation from "./config/nav/fr";

import enSidebar from "./config/sidebar/en";
import frSidebar from "./config/sidebar/fr";

const hostname = "https://udemai.ca";

export default defineConfig({
  // https://vitepress.dev/reference/site-config
  title: "UdeM AI",
  description:
    "Université de Montréal AI Club - Learning, Building, and Innovating Together",

  head: headConfig,

  cleanUrls: true,

  lastUpdated: true,

  sitemap: {
    hostname,
  },

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        nav: enNavigation,
        sidebar: enSidebar,
        socialLinks: [
          {
            icon: "discord",
            link: "https://discord.gg/placeholder",
            ariaLabel: "Join Discord",
          },
          {
            icon: "instagram",
            link: "https://instagram.com/placeholder",
            ariaLabel: "Follow on Instagram",
          },
          {
            icon: "linkedin",
            link: "https://linkedin.com/company/placeholder",
            ariaLabel: "Connect on LinkedIn",
          },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm-1 1.217 7 4.2 7-4.2V12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/></svg>',
            },
            link: "mailto:contact@udemai.club",
            ariaLabel: "Send email",
          },
        ],
        editLink: {
          pattern: "https://github.com/udem-ai/website/tree/main/src/:path",
        },
        footer: {
          copyright: "Copyright © 2024-present UdeM AI.",
        },
      },
    },
    fr: {
      label: "Français",
      lang: "fr",
      link: "/fr/",
      themeConfig: {
        nav: frNavigation,
        sidebar: frSidebar,
        socialLinks: [
          {
            icon: "discord",
            link: "https://discord.com/invite/2Ttnw8p2Hy",
            ariaLabel: "Rejoindre Discord",
          },
          {
            icon: "instagram",
            link: "https://www.instagram.com/udem.ai/",
            ariaLabel: "Suivre sur Instagram",
          },
          {
            icon: "linkedin",
            link: "https://www.linkedin.com/company/udem-ai/",
            ariaLabel: "Se connecter sur LinkedIn",
          },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm-1 1.217 7 4.2 7-4.2V12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/></svg>',
            },
            link: "mailto:hey@udemai.ca",
            ariaLabel: "Envoyer un courriel",
          },
        ],
        editLink: {
          pattern: "https://github.com/udem-ai/website/tree/main/src/:path",
        },
        footer: {
          copyright: "Copyright © 2024-present UdeM AI.",
        },
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/udemai-logo.svg",

    search: {
      provider: "local",
    },
  },
});
