import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      body {
        childMarkdownRemark {
          html
        }
      }
      createdAt
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      slug
      tags
      title
    }
    contentfulPostTemplate {
      navBackText
    }
  }
`;

const Content = styled.div`
  max-width: 60ch;
  padding-bottom: 5rem;

  p:first-of-type {
    margin-top: 2.5rem;
  }

  p {
    font-size: 0.948rem;
  }
`;

const ImgContainer = styled.div`
  max-width: 600px;
  max-height: 200px;
  margin: 2.5rem 0;

  div,
  img {
    max-height: 200px;
    object-fit: contain !important;
  }
`;

const CreatedAt = styled.div`
  font-size: 0.8175rem;
`;

const Body = styled.div`
  margin-top: 1.75rem;
`;

const Post = ({ data, location }) => {
  const { navBackText } = data.contentfulPostTemplate;
  const { createdAt, title, body, image } = data.contentfulPost;

  return (
    <Layout theme={themes.light} location={location}>
      <SEO title={title} />
      <Link to="/blog">{navBackText}</Link>
      <Content>
        {image && (
          <ImgContainer>
            <Img alt={title} fluid={image.fluid} />
          </ImgContainer>
        )}
        <h1>{title}</h1>
        <CreatedAt>{moment(createdAt).format('MMMM Do, YYYY')}</CreatedAt>
        <Body
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
      </Content>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    contentfulPost: PropTypes.shape({
      createdAt: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string,
        }),
      }),
      image: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }),
    }),
    contentfulPostTemplate: PropTypes.shape({
      navBackText: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default Post;
