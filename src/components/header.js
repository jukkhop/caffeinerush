import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const large = '960px';
const medium = '576px';

const Container = styled.div`
  margin: 0 auto;
  max-width: ${large};
  padding: 0.25rem 1.0875rem;
  width: 100%;
`;

const Top = styled.div`
  width: 100%;
`;

const Stripe = styled.div`
  background: linear-gradient(
    90deg,
    rgba(40, 30, 59, 1) 0%,
    rgba(212, 0, 120, ${x => x.alpha}) 50%,
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

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0.75rem;
  width: 100%;

  @media (max-width: ${medium}) {
    align-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.h1`
  margin: 0;
  justify-self: flex-start;
`;

const TitleLink = styled(Link)`
  background-image: none;
  color: white;
  text-decoration: none;
  text-shadow: none;
`;

const Navs = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 0;
  margin-bottom: 0;
  justify-self: flex-end;
`;

const Nav = styled.li`
  display: block;
  margin-bottom: 0;

  a {
    background-image: none;
    color: white;
    cursor: pointer;
    font-family: Varela Round;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2.25px;
    text-decoration: none;
    text-shadow: none;
    text-transform: uppercase;
  }

  a:hover {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 1px,
      white 1px,
      white 2px,
      rgba(0, 0, 0, 0) 2px
    );
  }

  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`;

const Header = ({ siteTitle }) => (
  <Container>
    <Top>
      <Stripe width="100%" alpha={1} />
      <Stripe width="75%" alpha={0.85} />
      <Stripe width="50%" alpha={0.65} />
      <Stripe width="25%" alpha={0.45} />
    </Top>
    <Bottom>
      <Title>
        <TitleLink to="/">{siteTitle}</TitleLink>
      </Title>
      <nav>
        <Navs>
          <Nav>
            <Link to="/about">about</Link>
          </Nav>
          <Nav>
            <Link to="/blog">blog</Link>
          </Nav>
        </Navs>
      </nav>
    </Bottom>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
