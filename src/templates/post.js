import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

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

const Content = styled.div``;

const Title = styled.h1``;

const ImgContainer = styled.div`
  max-width: 300px;
`;

const Body = styled.p``;

const Post = ({ data }) => {
  const { title, body, image } = data.contentfulBlogPost;
  return (
    <Layout>
      <SEO title={title} />
      <Content>
        <Title>{title}</Title>
        <ImgContainer>
          <Img alt={title} fluid={image.fluid} />
        </ImgContainer>
        <Body>{body.body}</Body>
        <div>
          <Link to="/posts">View more posts</Link>
        </div>
        <div>
          <Link to="/">Back to Home</Link>
        </div>
      </Content>
    </Layout>
  );
};

export default Post;
