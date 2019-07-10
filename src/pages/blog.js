import { Link, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { breakpoints, themes } from '../constants/styles';

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
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: ${breakpoints.large};
  margin: 0 auto;

  @media (max-width: ${breakpoints.large}) {
    flex-direction: column-reverse;
    padding-top: 0;
  }

  @media (max-height: ${breakpoints.mediumHeight}) {
    padding-top: 0rem;
  }
`;

const BlogPage = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges;

  return (
    <Layout theme={themes.light}>
      <SEO
        title="Posts"
        keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
      />
      <Content>
        <h2>{"Here's a list of all posts!"}</h2>
        <div className="posts">
          {posts.map(({ node: post }) => (
            <div key={post.id}>
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
          ))}
          <span className="mgBtm__24" />
          <Link to="/">Go back</Link>
        </div>
      </Content>
    </Layout>
  );
};

export default BlogPage;
