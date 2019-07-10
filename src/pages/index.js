import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Intro from '../components/intro';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { breakpoints, themes } from '../constants/styles';

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

const IndexPage = ({ location }) => (
  <Layout location={location} theme={themes.dark}>
    <SEO
      title="Home"
      keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
    />
    <Content>
      <Intro />
      <ImgWrapper>
        <StaticQuery
          query={graphql`
            query {
              image: file(relativePath: { eq: "author.png" }) {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => <Img fluid={data.image.childImageSharp.fluid} />}
        />
      </ImgWrapper>
    </Content>
  </Layout>
);

export default IndexPage;
