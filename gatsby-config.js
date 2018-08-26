module.exports = {
  siteMetadata: {
    title: 'Shuttered Photography',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Shuttered Photography',
        short_name: 'Shuttered',
        start_url: '/',
        background_color: '#141311',
        theme_color: '#141311',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
