import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      body {
        body
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      slug
      tags
      title
    }
  }
`;

const Content = styled.div`
  max-width: 55ch;
`;

const ImgContainer = styled.div`
  max-width: 300px;
`;

const Body = styled.p``;

const Post = ({ data, location }) => {
  const { title, body, image } = data.contentfulBlogPost;
  return (
    <Layout theme={themes.light} location={location}>
      <SEO title={title} />
      <Content>
        <h2>{title}</h2>
        {image && (
          <ImgContainer>
            <Img alt={title} fluid={image.fluid} />
          </ImgContainer>
        )}
        <Body>{body.body}</Body>
        <div>
          <Link to="/blog">View all posts</Link>
        </div>
      </Content>
    </Layout>
  );
};

export default Post;
