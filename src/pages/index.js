import React from 'react';
import Script from 'react-load-script';

import Layout from '../components/layout';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import NewestPosts from '../components/NewestPosts';
import Footer from '../components/Footer';

import { graphql } from 'gatsby'

function handleScriptLoad() {
  if (typeof window !== `undefined` && window.netlifyIdentity) {
    window.netlifyIdentity.on('init', user => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });
  }
  window.netlifyIdentity.init();
}

class IndexPage extends React.Component {
  render() {
    const newestPosts = this.props.data.allMarkdownRemark.edges.slice(0, 3)

    return (
      <div>
        <Script
				url="https://identity.netlify.com/v1/netlify-identity-widget.js"
				onLoad={() => handleScriptLoad()}
			/>
      <Layout>
        <Header />
        <About />
        <Services
          ser1={this.props.data.ser1}
          ser2={this.props.data.ser2}
        />
        <Portfolio gr1={this.props.data.gr1} />
        <NewestPosts posts={newestPosts}/>
        <Footer />
      </Layout>
      </div>

    )
  }
}

export default IndexPage;

export const query = graphql`
  query {
    ser1: file(relativePath: { regex: "/images/ser1/" }) {
      childImageSharp {
        resolutions(height: 560) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    ser2: file(relativePath: { regex: "/images/ser2/" }) {
      childImageSharp {
        resolutions(height: 560) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    gr1: file(relativePath: { regex: "/images/gr1/" }) {
      childImageSharp {
        sizes(maxHeight: 300) {
          ...GatsbyImageSharpSizes
        }
      }
    },
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 930) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
