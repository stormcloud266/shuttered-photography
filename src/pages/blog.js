import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map((post) => (
      <div key={post.node.id}>
        <Img
          sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes}
          style={{
            maxWidth: 630
          }}
        />
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        <br/><br/>
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <hr/>
      </div>
    ))}
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
