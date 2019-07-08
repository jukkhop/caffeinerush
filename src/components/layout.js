import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import './layout.css';

const Body = styled.main`
  height: 100vh;
  margin: auto;
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
          {children}
          <footer>© Jukka Hopeavuori {new Date().getFullYear()}</footer>
        </Body>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
