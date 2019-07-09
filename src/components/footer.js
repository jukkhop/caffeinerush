import React from 'react';
import styled from 'styled-components';

const large = '960px';

const Container = styled.footer`
  margin: 0 auto;
  max-width: ${large};
  width: 100%;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 450px;
  margin: 0 auto;
`;

const Link = styled.div`
  a {
    background-image: none;
    color: white;
    cursor: pointer;
    font-family: Varela Round;
    font-size: 10px;
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
      white 1px,
      white 2px,
      rgba(0, 0, 0, 0) 2px
    );
  }
`;

const Stripes = styled.div`
  margin-top: 0.75rem;
  width: 100%;
`;

const Stripe = styled.div`
  background: linear-gradient(
    90deg,
    rgba(40, 30, 59, 1) 0%,
    rgba(253, 55, 119, ${x => x.alpha}) 50%,
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

const Footer = () => (
  <Container>
    <Links>
      <Link>
        <a href="mailto:jukka.hopea@gmail.com">gmail</a>
      </Link>
      <Link>
        <a href="https://github.com/jukkhop">github</a>
      </Link>
      <Link>
        <a href="https://www.linkedin.com/in/jukka-hopeavuori-65b83b72/">
          linkedin
        </a>
      </Link>
    </Links>
    <Stripes>
      <Stripe width="25%" alpha={0.45} />
      <Stripe width="50%" alpha={0.65} />
      <Stripe width="75%" alpha={0.85} />
      <Stripe width="100%" alpha={1} />
    </Stripes>
  </Container>
);

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
