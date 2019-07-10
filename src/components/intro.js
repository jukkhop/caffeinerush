import { Delay } from 'animate-components';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { createGlobalStyle } from 'styled-components';

import { breakpoints } from '../constants/styles';

import {
  ModernVisionEOT,
  ModernVisionSVG,
  ModernVisionTTF,
  ModernVisionWOFF,
} from '../utils/fonts';

const typingDuration = 350;
const fadeOutDelay = 5000;

const Keyframes = createGlobalStyle`

  @font-face {
    font-family: 'Modern-Vision';
    src: url(${ModernVisionEOT}?#iefix) format('embedded-opentype'),
      url(${ModernVisionWOFF}) format('woff'),
      url(${ModernVisionTTF}) format('truetype'),
      url(${ModernVisionSVG}#Modern-Vision) format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @keyframes typing {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  
  @keyframes hide {
    0% {
      opacity: 1;
    }
    99%: {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes flicker-out {
    0% {
      opacity: 1;
    }
    33% {
      opacity: 0;
    }
    66% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    0% {
      color: #d40078;
      filter: blur(2px);
      opacity: 1;
      transform: scale(1.05);
    }
    100% {
      color: #d40078;
      filter: blur(2px);
      opacity: 0;
      transform: scale(1.05);
    }
  }

  .rectangle-hide {
    animation: hide ${typingDuration}ms steps(1) 0s 1 forwards;
  }

  .credit-exit-active .rectangle-flicker-out {
    animation: flicker-out 100ms steps(1) 0s 5 forwards;
  }

  .credit-exit-active .writer {
    animation: fade-out 650ms linear 500ms 1 forwards;
  }

  .credit-exit-done {
    display: none;
  }
`;

const Container = styled.div`
  align-self: flex-start;
  background-color: ${x => x.theme.bg};
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
  width: 400px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.large}) {
    padding-top: 2.25rem;
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 274px;
  }

  @media (max-width: ${breakpoints.small}) {
    width: auto;
  }

  @media (max-height: ${breakpoints.mediumHeight}) {
    align-self: center;
    padding-top: 1.5rem;
  }

  @media (max-height: 575px) {
    padding-top: 0.5rem;
  }
`;

const Credit = styled.div`
  min-height: 94px;
  position: relative;
  top: ${x => x.top || 'auto'};
  width: 400px;

  @media (max-width: ${breakpoints.large}) {
    bottom: 0;
    min-height: 64px;
    top: 0;
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 274px;
  }

  @media (max-width: ${breakpoints.small}) {
    width: auto;
  }

  @media (max-height: ${breakpoints.mediumHeight}) {
    bottom: 0;
    min-height: 64px;
    top: 0;
  }
`;

const CreditLine = styled.div`
  display: flex;
`;

const WriterContainer = styled.div`
  display: flex;
`;

const Rectangle = styled.div`
  align-self: center;
  background-color: ${x => x.theme.introFg};
  height: 23px;
  width: 21px;

  @media (max-width: ${breakpoints.medium}) {
    height: 18px;
    width: 16px;
    margin-bottom: 2px;
  }
`;

const Writer = styled.div`
  animation: typing ${x => x.duration}ms steps(${x => x.length});
  box-sizing: border-box;
  color: ${x => x.theme.introFg};
  font-family: Modern-Vision;
  font-size: 2.25rem;
  letter-spacing: 0.75px;
  line-height: 1.1;
  margin-left: 6px;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: ${breakpoints.medium}) {
    font-size: 1.75rem;
  }
`;

const credits = [
  {
    key: 'name',
    lines: ['Name', 'JUKKA HOPEAVUORI'],
    top: '1rem',
  },
  {
    key: 'born',
    lines: ['Date of birth', 'MAY 1989'],
    top: '6rem',
  },
  {
    key: 'occupation',
    lines: ['Occupation', 'DEVELOPER'],
    top: '1rem',
  },
  {
    key: 'location',
    lines: ['Location', 'HELSINKI, FINLAND'],
    top: '6rem',
  },
];

const Intro = () => {
  const [{ credit, loopCount }, setState] = useState({
    credit: null,
    loopCount: 0,
  });

  const timer = useRef(null);

  useEffect(
    () => {
      const index = credits.indexOf(credit);
      const nextIndex = index < credits.length - 1 ? index + 1 : 0;
      const nextCredit = credits[nextIndex];
      const incrLoop = index > -1 && nextIndex === 0;
      const timeout = credit ? fadeOutDelay : 100;

      const nextState = {
        credit: nextCredit,
        loopCount: incrLoop ? loopCount + 1 : loopCount,
      };

      timer.current = setTimeout(() => {
        setState(nextState);
      }, timeout);

      return () => {
        clearTimeout(timer.current);
      };
    },
    [credit, loopCount],
  );

  if (!credits || credits.length === 0) {
    return <Container />;
  }

  if (!credit) {
    return <Container />;
  }

  const { bottom, lines, top } = credit;
  const key = `${loopCount}_${credit.key}`;

  return (
    <>
      <Keyframes />
      <Container>
        <TransitionGroup>
          <CSSTransition key={key} timeout={1150} classNames="credit">
            <Delay timeout={1200}>
              <Credit top={top} bottom={bottom}>
                {lines.map((line, index) => (
                  <CreditLine key={index}>
                    <Delay timeout={index * typingDuration + 100}>
                      <WriterContainer>
                        <Rectangle
                          className={
                            index < lines.length - 1
                              ? 'rectangle-hide'
                              : 'rectangle-flicker-out'
                          }
                        />
                        <Writer
                          className="writer"
                          duration={typingDuration}
                          length={line.length}
                        >
                          {line}
                        </Writer>
                      </WriterContainer>
                    </Delay>
                  </CreditLine>
                ))}
              </Credit>
            </Delay>
          </CSSTransition>
        </TransitionGroup>
      </Container>
    </>
  );
};

export default Intro;
