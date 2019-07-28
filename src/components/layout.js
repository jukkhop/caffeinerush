import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Footer from './footer';
import Header from './header';
import { breakpoints } from '../constants/styles';
import '../css/layout.css';

const BodyStyle = createGlobalStyle`
  body {
    background: ${x => x.theme.bg};
    color: ${x => x.theme.fg};
    transition: background 500ms;
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: ${breakpoints.large};
  width: 100%;
`;

const Children = styled.div`
  min-height: calc(100vh - 190px);
  padding: 6.5rem 1.0875rem 0;

  @media (max-width: ${breakpoints.medium}) {
    min-height: calc(100vh - 285px);
    padding: 2rem 0.625rem 0rem;
  }

  @media (max-height: ${breakpoints.mediumHeight}) {
    padding: 2rem 0.625rem 0rem;
  }
`;

const Layout = ({ children, location, theme }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        contentfulNavLinks {
          links {
            to
            text
          }
        }
        contentfulFooterLinks {
          links {
            to
            text
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Fragment>
          <BodyStyle />
          <Header
            navs={data.contentfulNavLinks.links}
            location={location}
            theme={theme}
            title={data.site.siteMetadata.title}
          />
          <Main>
            <Children>{children}</Children>
            <Footer links={data.contentfulFooterLinks.links} />
          </Main>
        </Fragment>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default Layout;
