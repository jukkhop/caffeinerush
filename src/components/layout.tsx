import { StaticQuery, graphql } from 'gatsby';
import React, { FunctionComponent, ReactNode } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Footer from './footer';
import Header from './header';
import { Themed, ThemeProps, breakpoints } from '../constants/styles';
import '../css/layout.css';

interface Props {
  children: ReactNode;
  location: {
    pathname: string;
  };
  theme: ThemeProps;
}

const BodyStyle = createGlobalStyle<Themed>`
  body {
    background: ${(x): string => x.theme.bg};
    color: ${(x): string => x.theme.fg};
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

const Layout: FunctionComponent<Props> = ({
  children,
  location,
  theme,
}): JSX.Element => (
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
    render={(data): JSX.Element => (
      <ThemeProvider theme={theme}>
        <>
          <BodyStyle />
          <Header
            location={location}
            navs={data.contentfulNavLinks.links}
            theme={theme}
            title={data.site.siteMetadata.title}
          />
          <Main>
            <Children>{children}</Children>
            <Footer links={data.contentfulFooterLinks.links} />
          </Main>
        </>
      </ThemeProvider>
    )}
  />
);

export default Layout;
