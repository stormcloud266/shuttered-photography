import React from 'react';
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const NewestPosts = ({posts}) => (
  <section className="NewestPosts wrapper" id="blog">
    <h2 className="NewestPosts__title">Newest Blog Posts</h2>
    <div className="divider"></div>
    <div className="NewestPosts__container">
    {
      posts.map(post => (
        <Link className="post" to={post.node.frontmatter.path}>
          <div className="post__inner" key={post.node.id}>
              <Img
                className="post__img"
                sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes}
              />
              <h3 className="post__title">{post.node.frontmatter.title}</h3>
          </div>
        </Link>
      ))
    }
    </div>
  <Link className="NewestPosts__link button" to='/blog'>See More Blog Posts</Link>
  </section>
);

export default NewestPosts;
