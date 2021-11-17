// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {

  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en'],
    localeConfigs: {
      ro: {
        label: 'Română',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },

    },
  },

  plugins: [
    '@aldridged/docusaurus-plugin-lunr',
//     [require.resolve('@cmfcmf/docusaurus-search-local'),{
//         // Options here
//         language: "ro" // language of your documentation, see next section
//     }]

    [require.resolve('docusaurus-lunr-search'),
      {
        languages: ['ro', 'ro'], // language codes,
        indexBaseUrl: true
      },
    ],


  ],

  title: 'Fizichim',
  tagline: 'Invăţăm prin experimente',
  url: 'https://lucidumitru.github.io',
  baseUrl: '/fizichim_v2/', // link pentru productie
/*  baseUrl: '/', // link local  */
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lucidumitru', // Usually your GitHub org/user name.
  projectName: 'fizichim_v2', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
/*          cacheTime: 600 * 1000, // 600 sec - cache purge period */
          changefreq: 'weekly',
          priority: 0.5,
        },


      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
          'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Invăţare uşoară cu fizichim',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },

/*          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          }, */

/*         {to: '/blog', label: 'Blog', position: 'left'}, */

/*          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, */

         {to: '/docs/fizica/clasa6/capitolul1-introducere-in-studiul-fizicii/I-1-ce-este-fizica', label: 'Fizică', position: 'left'},

         {to: '/docs/chimie/clasa7/chimie-clasa7-capitolul1', label: 'Chimie', position: 'left'},

         {to: '/docs/biologie/fizicainlumeavie/miscarea-si-parghiile', label: 'Opțional', position: 'left'},

        ],
      },
      footer: {
        style: 'dark',
        links: [
/*          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          }, */

/*          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          }, */

/*          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          }, */

          {
            title: 'Invăţare uşoară',
            items: [
              {
                label: 'Fizică',
                to: '/docs/fizica/clasa6/capitolul1-introducere-in-studiul-fizicii/I-1-ce-este-fizica',
              },
              {
                label: 'Chimie',
                to: '/docs/chimie/clasa7/chimie-clasa7-capitolul1',
              },
 /*             {
                label: 'Opțional',
                to: '/docs/biologie/fizicainlumeavie/miscarea-si-parghiile',
              }, */
            ],
          },
          {
            title: 'Comunitate',
            items: [{
              label: 'Facebook',
              href: 'https://www.facebook.com/fizichim',
            },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/fizichim',
              },
            ],
          },
          {
            title: 'Donații',
            items: [{
              label: 'Dă click aici pentru a dona prin Revolut',
              to: 'https://revolut.me/iuliadumitru',
//                            label: 'Blog',
//                            to: 'blog',
            },
            ],
          },

        ],
/*        copyright: `Copyright © ${new Date().getFullYear()} Dumitru Elena-Daniela: Fizichim vers2. Built with Docusaurus.`, */

        copyright: `Copyright © ${new Date().getFullYear()} Dumitru Elena-Daniela: Fizichim. Donații poți face în contul: RO79 BREL 0005 5015 6588 0100`,

      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
