import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const colors = ['#781B5A'];

const Container = styled.div`
  background: #281e3b;
  padding: 0.25rem;
`;

// const Content = styled.div`
//   margin: 0 auto;
//   max-width: 960px;
//   padding: 1.45rem 1.0875rem;
// `;

// const Title = styled.h1`
//   margin: 0;
// `;

// const TitleLink = styled(Link)`
//   background-image: none;
//   color: white;
//   text-decoration: none;
//   text-shadow: none;
// `;

/*
  <Content>
    <Title>
      <TitleLink to="/">{siteTitle}</TitleLink>
    </Title>
  </Content>
*/

const Stripe = styled.div`
  background: linear-gradient(
    90deg,
    rgba(40, 30, 59, 1) 0%,
    rgba(120, 27, 90, ${x => x.alpha}) 50%,
    rgba(40, 30, 59, 1) 100%
  );
  height: 3px;
  margin-left: auto;
  margin-right: auto;
  width: ${x => x.width};

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const Header = ({ siteTitle }) => (
  <Container>
    <Stripe width="75%" alpha={1} />
    <Stripe width="65%" alpha={0.85} />
    <Stripe width="55%" alpha={0.65} />
    <Stripe width="45%" alpha={0.45} />
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
