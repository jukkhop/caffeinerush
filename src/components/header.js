import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../constants/styles';

const Container = styled.div`
  margin: 0 auto;
  max-width: ${breakpoints.large};
  padding: 0.25rem 1.0875rem 0;
  width: 100%;
`;

const Top = styled.div`
  width: 100%;
`;

const Stripe = styled.div`
  background: linear-gradient(
    90deg,
    ${x => x.theme.bg} 0%,
    rgba(212, 0, 120, ${x => x.alpha}) 50%,
    ${x => x.theme.bg} 100%
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

  @media (max-width: ${breakpoints.medium}) {
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
  color: ${x => x.theme.headerFg};
  text-decoration: none;

  &:hover {
    background-image: none !important;
    text-shadow: none !important;
  }
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
    color: ${x => x.fg};
    cursor: pointer;
    font-family: 'Varela Round';
    font-size: 0.737rem;
    letter-spacing: 2.25px;
    text-shadow: none;
    text-transform: none;
  }

  a:hover,
  a.active,
  a.active:hover {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 0px,
      ${x => x.fg} 0px,
      ${x => x.fg} 1px,
      rgba(0, 0, 0, 0) 1px
    );

    text-shadow: 0.03em 0 ${x => x.theme.bg}, -0.03em 0 ${x => x.theme.bg},
      0 0.03em ${x => x.theme.bg}, 0 -0.03em ${x => x.theme.bg},
      0.06em 0 ${x => x.theme.bg}, -0.06em 0 ${x => x.theme.bg},
      0.09em 0 ${x => x.theme.bg}, -0.09em 0 ${x => x.theme.bg},
      0.12em 0 ${x => x.theme.bg}, -0.12em 0 ${x => x.theme.bg},
      0.15em 0 ${x => x.theme.bg}, -0.15em 0 ${x => x.theme.bg};
  }

  &:not(:last-of-type) {
    margin-right: 3rem;
  }
`;

const navs = [
  {
    to: '/about',
    text: 'about',
  },
  {
    to: '/blog',
    text: 'blog',
  },
];

const Header = ({ location, siteTitle, theme }) => (
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
          {navs.map(nav => {
            const active = location && location.pathname.includes(nav.to);
            const fg = active ? theme.linkColorActive : theme.fg;
            const className = active ? 'active' : '';

            return (
              <Nav key={nav.text} fg={fg}>
                <Link className={className} to={nav.to}>
                  {nav.text}
                </Link>
              </Nav>
            );
          })}
        </Navs>
      </nav>
    </Bottom>
  </Container>
);

Header.propTypes = {
  location: PropTypes.shape({}).isRequired,
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
