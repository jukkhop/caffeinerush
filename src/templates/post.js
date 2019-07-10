import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { breakpoints, themes } from '../constants/styles';

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
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${breakpoints.large}) {
    flex-direction: column-reverse;
  }
`;

const Title = styled.h1``;

const ImgContainer = styled.div`
  max-width: 300px;
`;

const Body = styled.p``;

const Post = ({ data }) => {
  const { title, body, image } = data.contentfulBlogPost;
  return (
    <Layout theme={themes.light}>
      <SEO title={title} />
      <Content>
        <Title>{title}</Title>
        <ImgContainer>
          <Img alt={title} fluid={image.fluid} />
        </ImgContainer>
        <Body>{body.body}</Body>
        <div>
          <Link to="/blog">View all posts</Link>
        </div>
      </Content>
    </Layout>
  );
};

export default Post;
