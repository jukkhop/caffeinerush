import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Intro from '../components/intro';
import Layout from '../components/layout';
import SEO from '../components/seo';

// const Introduction = styled.article``;

const large = '960px';
const medium = '576px';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5rem;
  max-width: ${large};
  margin: 0 auto;

  @media (max-width: ${large}) {
    flex-direction: column-reverse;
    padding-top: 0;
  }

  @media (max-height: 641px) {
    padding-top: 0rem;
  }
`;

const ImgWrapper = styled.div`
  width: 250px;
  margin: 0 auto;

  img {
    border-radius: 50%;
  }

  @media (max-width: ${medium}) {
    width: 175px;
  }
`;

const IndexPage = () => (
  <Layout>
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
