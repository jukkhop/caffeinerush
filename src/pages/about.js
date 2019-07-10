// import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

const Content = styled.div`
  max-width: 55ch;

  p:first-of-type {
    margin-top: 1.75rem;
  }

  p {
    font-size: 0.7895rem;
    margin-bottom: 0;
    padding-bottom: 1.25rem;
  }

  li {
    font-size: 0.7895rem;
    margin-bottom: 0.25rem;
  }

  span {
    font-size: 1rem;
  }
`;

const AboutPage = ({ location }) => {
  return (
    <Layout theme={themes.light} location={location}>
      <SEO
        title="About"
        keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
      />
      <Content>
        <h2>Hello!</h2>
        <p>
          Welcome to my personal introductory page.{' '}
          <span aria-label="waving hand" role="img">
            👋
          </span>
        </p>
        <p>
          My name is Jukka and I develop software for a living, and as a hobby.
          I am 30 years old and live in Helsinki, Finland. Currently I work at{' '}
          <a href="https://motley.fi/">Motley</a>, which is foremost an
          innovation agency.
        </p>
        <p>
          One of the main reasons I made this website was to try out some new
          tech. This website was built with{' '}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>, which is a React-based
          static site generator. Content is fetched at build-time from{' '}
          <a href="https://www.contentful.com/">Contentful</a>. The entire CI/CD
          pipeline and hosting is handled by{' '}
          <a href="https://www.netlify.com/">Netlify</a>.
        </p>
        <p>
          You can also check out my <Link to="/blog">blog</Link>, there may or
          may not be any posts written in there.
        </p>
        <p>
          All right, take care!{' '}
          <span aria-label="winking face" role="img">
            😉
          </span>
        </p>
      </Content>
    </Layout>
  );
};

export default AboutPage;
