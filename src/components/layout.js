import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import './layout.css';

const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-bottom: 1.45rem;
  padding-left: 1.0875rem;
  padding-right: 1.0875rem;
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
          <footer>© {new Date().getFullYear()}</footer>
        </Body>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
