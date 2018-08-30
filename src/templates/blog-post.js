import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/Header'
import Img from 'gatsby-image'
import './blog-post.css'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Header siteTitle='title' />
      <Link to='/blog'>Back</Link>

      <hr/>
      <div className="content">
        <Img
          sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
          style={{
            maxWidth: 630
          }}
        />
        <h1>{post.frontmatter.title}</h1>
        <p>posted by {post.frontmatter.author} on {post.frontmatter.date}</p>
        <div className="content__inner" dangerouslySetInnerHTML={{__html: post.html}} />
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        path
        title
        author
        date
        featuredImage {
          childImageSharp{
             sizes(maxWidth: 630) {
               ...GatsbyImageSharpSizes
           }
         }
        }
      }
    }
  }
`
