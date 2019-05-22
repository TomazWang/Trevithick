/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
// const users = [
  // {
  //   caption: 'Tomaz Wang',
  //   image: '/img/profile.png',
  //   infoLink: 'https://github.io/tomazwang',
  //   pinned: true,
  // },
// ];

const siteConfig = {
  title: 'The Tomaz Log', // Title for your website.
  tagline: 'Driven by obsession and bubble milk tea.',
  url: 'https://tomazw.com', // Your website URL
  baseUrl: '/', // Base URL for your project

  // Used for publishing and more
  projectName: 'Trevithick',
  organizationName: 'TomazWang',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // {doc: 'doc1', label: 'Docs'},
    // {doc: 'doc4', label: 'API'},
    // {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  //
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/locomotive.svg',
  footerIcon: 'img/locomotive.svg',
  favicon: 'img/favicon-32x32.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#626b1b',
    secondaryColor: '#444a12',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
