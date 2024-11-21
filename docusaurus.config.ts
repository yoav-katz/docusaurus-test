require('dotenv').config();
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const config: Config = {
  title: 'DBAAS',
  tagline: 'DBAAS docs',
  favicon: 'img/favicon.icoS',

  // Set the production url of your site here
  url: process.env.PROD_URL,
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: process.env.GITHUB_OU,
  projectName: process.env.GITHUB_PROJECT,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            process.env.GIT_EDIT_REPO_URL,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DBAAS',
      logo: {
        alt: 'DBAAS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'trainingSidebar',
          position: 'left',
          label: 'Training',
        },
        {
          href: process.env.GIT_REPO_MAIN_URL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;