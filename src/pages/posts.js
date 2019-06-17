import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`;

const Posts = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <SEO title="Posts" />
      <h1>{"Here's a list of all posts!"}</h1>
      <div className="posts">
        {posts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back</Link>
      </div>
    </Layout>
  );
};

export default Posts;
