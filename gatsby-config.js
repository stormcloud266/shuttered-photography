module.exports = {
  siteMetadata: {
    title: 'Shuttered Photography Studio',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Shuttered Photography Studio',
        short_name: 'Shuttered',
        start_url: '/',
        background_color: '#141311',
        theme_color: '#141311',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          ],
        },
      },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display', 'Open Sans:300']
        }
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ],
}
