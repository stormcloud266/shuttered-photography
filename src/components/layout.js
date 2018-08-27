import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import headerJPG from '../images/header.jpeg';

import '../styles/styles.scss';

library.add(fab)

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name:"twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "Shuttered Photography Studio"},
            { name:"twitter:description", content:"Timeless photography for non-existent people."},
            { name:"twitter:image", content: `https://naughty-khorana-38a3bb.netlify.com/${headerJPG}` }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
