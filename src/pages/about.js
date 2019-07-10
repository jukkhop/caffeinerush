// import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
// import { Link } from 'gatsby';

import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

const Content = styled.div`
  max-width: 55ch;

  p:first-of-type {
    margin-top: 1.58rem;
  }

  p {
    font-size: 0.895rem;
  }
`;

const AboutPage = () => (
  <Layout theme={themes.light}>
    <SEO
      title="About"
      keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
    />
    <Content>
      <h3>Hello, and welcome!</h3>
      <p>
        I am Jukka and this is my personal introductory page. You can also check
        out my blog.
      </p>
      <p>This website was built with Gatsby, Contentful and Netlify.</p>
    </Content>
  </Layout>
);

export default AboutPage;
