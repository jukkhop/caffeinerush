import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import moment from 'moment';
import React, { FunctionComponent } from 'react';
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

  li {
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

interface Data {
  contentfulPostTemplate: {
    navBackText: string;
  };
  contentfulPost: {
    body: {
      childMarkdownRemark: {
        html: string;
      };
    };
    createdAt: string;
    image: {
      fluid: FluidObject;
    };
    title: string;
  };
}

interface Props {
  data: Data;
  location: {
    pathname: string;
  };
}

const Post: FunctionComponent<Props> = ({ data, location }): JSX.Element => {
  const { navBackText } = data.contentfulPostTemplate;
  const { body, createdAt, image, title } = data.contentfulPost;
  return (
    <Layout theme={themes.light} location={location}>
      <SEO
        title={title}
        keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
      />
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

export default Post;
