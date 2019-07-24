import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      body {
        childMarkdownRemark {
          html
        }
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
  max-width: 60ch;
  padding-bottom: 5rem;

  p {
    font-size: 0.948rem;
  }
`;

const ImgContainer = styled.div`
  max-width: 600px;
  margin: 2.5rem 0rem;
`;

const Body = styled.div`
  margin-top: 1.75rem;
`;

const Post = ({ data, location }) => {
  const { title, body, image } = data.contentfulBlogPost;
  return (
    <Layout theme={themes.light} location={location}>
      <SEO title={title} />
      <Link to="/blog">View all posts</Link>
      <Content>
        {image && (
          <ImgContainer>
            <Img alt={title} fluid={image.fluid} />
          </ImgContainer>
        )}
        <h1>{title}</h1>
        <Body
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
      </Content>
    </Layout>
  );
};

export default Post;
