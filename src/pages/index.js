import React from 'react';
import styled from 'styled-components';

import Intro from '../components/intro';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Introduction = styled.article``;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
    />
    <Intro />
  </Layout>
);

export default IndexPage;
