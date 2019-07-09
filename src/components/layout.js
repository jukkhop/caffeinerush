import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';
import './layout.css';

const medium = '576px';

const Body = styled.main`
  margin: auto;
  padding: 2rem 2rem 0rem;

  @media (max-width: ${medium}) {
    padding: 2rem 0.5rem 0rem;
  }
`;

const Children = styled.div`
  height: calc(100vh - 235px);

  @media (max-width: ${medium}) {
    height: calc(100vh - 325px);
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Body>
          <Children>{children}</Children>
          <Footer />
        </Body>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
