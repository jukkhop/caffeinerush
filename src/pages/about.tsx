import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

interface Props {
  data: {
    contentfulAboutPage: {
      body: {
        body: string;
      };
    };
  };
  location: {
    pathname: string;
  };
}

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
`;

const AboutPage: FunctionComponent<Props> = ({
  data: {
    contentfulAboutPage: { body },
  },
  location,
}): JSX.Element => (
  <Layout location={location} theme={themes.light}>
    <SEO
      title="About"
      keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
    />
    <Content>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: body.body }} />
    </Content>
  </Layout>
);

export default AboutPage;
