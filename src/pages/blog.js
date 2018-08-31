import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import BlogHeader from '../components/BlogHeader'
import Footer from '../components/Footer'

const BlogPage = ({ data }) => (
  <Layout>
    <BlogHeader blogPost={false}/>
    {console.log(data)}
    <section className="BlogPage wrapper">
      <h1 className="BlogPage__title title-underline" id="latest">Latest Posts</h1>

      <div className="BlogPage__grid">
        {data.allMarkdownRemark.edges.map((post) => (
          <div key={post.node.id} className="BlogPage__grid-item">
            <Img sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes} />
            <div className="BlogPage__grid-text">
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.description}</p>
              <Link to={post.node.frontmatter.path}>Read More</Link>
            </div>
          </div>
        ))}
      </div>


    </section>
    {console.log(data)}
    <Footer />
  </Layout>
)

export default BlogPage


export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            description
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
