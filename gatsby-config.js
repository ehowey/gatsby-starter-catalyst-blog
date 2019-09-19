module.exports = {
  siteMetadata: {
    title: `Catalyst Core`,
    description: `Speed up your Gatsby development workflow. Designed as an opinionated and high speed starter.`,
    author: `Eric Howey`,
    siteUrl: `https://gatsby-starter-catalyst-core.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file
    pageLinks: [
      {
        name: `Design System`,
        link: `/design-system`,
      },
      {
        name: `Page 2`,
        link: `/page-2`,
      },
    ],
    anchorLinks: [
      {
        name: `Anchor 1`,
        link: `#anchor1`,
      },
      {
        name: `Anchor 2`,
        link: `#anchor2`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        url: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        url: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        url: `https://www.twitter.com/erchwy`,
        location: `header`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        displaySiteLogo: true,
        displaySiteTitle: true,
        invertSiteLogo: true,
        headerType: "anchornav",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-basic`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo-512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
