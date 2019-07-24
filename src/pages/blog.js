import { Link, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

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

const Content = styled.div`
  max-width: 55ch;

  p:first-of-type {
    margin-top: 1.75rem;
  }

  p {
    font-size: 0.948rem;
    margin-bottom: 0;
    padding-bottom: 1.25rem;
  }
`;

const BlogPage = ({ data, location }) => {
  const posts = data.allContentfulBlogPost.edges;

  return (
    <Layout location={location} theme={themes.light}>
      <SEO
        title="Blog"
        keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
      />
      <Content>
        <h2>All posts</h2>
        <div className="posts">
          {posts.map(({ node: post }) => (
            <div key={post.id}>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </div>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default BlogPage;
