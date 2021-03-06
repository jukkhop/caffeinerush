import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { LinkProps } from './layout';
import { breakpoints } from '../constants/styles';

interface Props {
  links: LinkProps[];
}

interface StyledLink {
  href: string;
  key: string;
}

interface StyledStripe {
  alpha: number;
  width: string;
}

const Container = styled.footer`
  margin: 0 auto;
  max-width: ${breakpoints.large};
  width: 100%;
  padding: 0rem 1.0875rem 0.25rem;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 450px;
`;

const Link = styled.div<StyledLink>`
  a {
    background-image: none;
    color: ${(x): string => x.theme.fg};
    cursor: pointer;
    font-family: 'Varela Round';
    font-size: 0.527rem;
    letter-spacing: 1.75px;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
  }

  a:hover {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 1px,
      ${(x): string => x.theme.fg} 1px,
      ${(x): string => x.theme.fg} 2px,
      rgba(0, 0, 0, 0) 2px
    );
  }
`;

const Stripes = styled.div`
  margin-top: 0.75rem;
  width: 100%;
`;

const Stripe = styled.div<StyledStripe>`
  background: linear-gradient(
    90deg,
    ${(x): string => x.theme.bg} 0%,
    rgba(253, 55, 119, ${(x): number => x.alpha}) 50%,
    ${(x): string => x.theme.bg} 100%
  );

  height: 3px;
  margin-left: auto;
  margin-right: auto;
  width: ${(x): string => x.width};

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const Footer: FunctionComponent<Props> = ({ links }): JSX.Element => (
  <Container>
    <Links>
      {links.map(
        (link): JSX.Element => (
          <Link href={link.to} key={link.to}>
            <a href={link.to}>{link.text}</a>
          </Link>
        ),
      )}
    </Links>
    <Stripes>
      <Stripe width="25%" alpha={0.45} />
      <Stripe width="50%" alpha={0.65} />
      <Stripe width="75%" alpha={0.85} />
      <Stripe width="100%" alpha={1} />
    </Stripes>
  </Container>
);

export default Footer;
