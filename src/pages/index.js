import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Intro from '../components/intro';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { breakpoints, themes } from '../constants/styles';

export const query = graphql`
  query {
    contentfulIndexPage {
      author {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      credits {
        key
        lines
        top
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
  }
`;

const ImgWrapper = styled.div`
  width: 250px;
  margin: 0 auto;

  img {
    border-radius: 50%;
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 175px;
  }
`;

const IndexPage = ({ data, location }) => (
  <Layout location={location} theme={themes.dark}>
    <SEO
      title="Home"
      keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
    />
    <Content>
      <Intro credits={data.contentfulIndexPage.credits} />
      <ImgWrapper>
        <Img fluid={data.contentfulIndexPage.author.fluid} />
      </ImgWrapper>
    </Content>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulIndexPage: PropTypes.shape({
      author: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
      credits: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default IndexPage;
