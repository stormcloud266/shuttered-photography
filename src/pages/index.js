import React from 'react';

import Layout from '../components/layout';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import NewestPosts from '../components/NewestPosts';
import Footer from '../components/Footer';

import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const newestPosts = data.allMarkdownRemark.edges.slice(0, 3)

  return (
    <Layout>
      <Header />
      <About />
      <Services
        ser1={data.ser1}
        ser2={data.ser2}
      />
      <Portfolio gr1={data.gr1} />
      <NewestPosts posts={newestPosts}/>
      <Footer />
    </Layout>
  )
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
            author
            featuredImage {
              childImageSharp{
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
