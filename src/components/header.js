import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const colors = [
  '#4d2673',
  '#592c86',
  '#663399',
  '#7339ac',
  '#803fbf',
  '#8c52c6',
  '#9965cc',
  '#a678d2',
  '#b28bd9',
  '#bf9edf',
  '#ccb1e5',
  '#d8c4ec',
  '#e5d8f2',
  '#f2ebf8',
];

const Container = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const TitleLink = styled(Link)`
  background-image: none;
  color: white;
  text-decoration: none;
  text-shadow: none;
`;

/*
  <Content>
    <Title>
      <TitleLink to="/">{siteTitle}</TitleLink>
    </Title>
  </Content>
*/

const Stripe = styled.div`
  background-color: ${props => props.color};
  height: 6px;
  width: 100%;
  margin: 0px 0px;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <Stripe color={colors[0]} />
    <Stripe color={colors[1]} />
    <Stripe color={colors[2]} />
    <Stripe color={colors[3]} />
    <Stripe color={colors[4]} />
    <Stripe color={colors[5]} />
    <Stripe color={colors[6]} />
    <Stripe color={colors[7]} />
    <Stripe color={colors[8]} />
    <Stripe color={colors[9]} />
    <Stripe color={colors[10]} />
    <Stripe color={colors[11]} />
    <Stripe color={colors[12]} />
    <Stripe color={colors[13]} />
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
