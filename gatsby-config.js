module.exports = {
  siteMetadata: {
    siteTitle: `Omer Gulen`,
    siteTitleAlt: `Omer Gulen - Software Engineer`,
    siteHeadline: `Omer Gulen - Personal Website`,
    siteUrl: `https://omergulen.dev`,
    siteDescription: `Personal website and portfolio.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@omergulenn`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
}
