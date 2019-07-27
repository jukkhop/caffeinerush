import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

export const query = graphql`
  query {
    contentfulAboutPage {
      body {
        body
      }
    }
  }
`;

const Content = styled.div`
  max-width: 55ch;

  h1 {
    margin-top: 0;
  }

  p:first-of-type {
    margin-top: 1.75rem;
  }

  p {
    font-size: 0.948rem;
    margin-bottom: 0;
    padding-bottom: 1.25rem;
  }

  li {
    font-size: 0.948rem;
    margin-bottom: 0.25rem;
  }
`;

const AboutPage = ({ data, location }) => {
  const { body } = data.contentfulAboutPage;
  return (
    <Layout theme={themes.light} location={location}>
      <SEO
        title="About"
        keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
      />
      <Content>
        <div dangerouslySetInnerHTML={{ __html: body.body }} />
      </Content>
    </Layout>
  );
};

export default AboutPage;
