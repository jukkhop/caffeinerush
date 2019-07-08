import { Delay } from 'animate-components';
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { createGlobalStyle } from 'styled-components';

import {
  ModernVisionEOT,
  ModernVisionSVG,
  ModernVisionTTF,
  ModernVisionWOFF,
} from '../utils/fonts';

const mobile = '576px';
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
      color: #803fbf;
      filter: blur(2px);
      opacity: 1;
      transform: scale(1.05);
    }
    100% {
      color: #803fbf;
      filter: blur(2px);
      opacity: 0;
      transform: scale(1.05);
    }
  }

  .rectangle-hide {
    animation: hide ${typingDuration}ms steps(1) 0s 1 forwards;
  }

  .credit-exit .rectangle-flicker-out {
    animation: flicker-out 100ms steps(1) 0s 5 forwards;
  }

  .credit-exit .writer {
    animation: fade-out 650ms linear 500ms 1 forwards;
  }

  .credit-exit-done {
    display: none;
  }
`;

// background-color: rgba(0, 0, 0, 0.9);

const Container = styled.div`
  background-color: #281e3b;
  min-height: 420px;
  padding: 2rem;

  @media (max-width: ${mobile}) {
    padding: 2rem 0.5rem;
  }
`;

const Credit = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  max-width: 450px;
`;

const CreditLine = styled.div`
  display: flex;
`;

const WriterContainer = styled.div`
  display: flex;
`;

const Writer = styled.div`
  animation: typing ${x => x.duration}ms steps(${x => x.length});
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.95);
  font-family: Modern-Vision;
  font-size: 2.25rem;
  letter-spacing: 0.75px;
  line-height: 1.1;
  margin-left: 6px;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: ${mobile}) {
    font-size: 2rem;
  }
`;

const Rectangle = styled.div`
  align-self: center;
  background-color: rgba(255, 255, 255, 0.95);
  height: 22px;
  margin-bottom: 2px;
  width: 20px;
`;

const credits = [
  {
    key: 'built-by',
    lines: ['Built by', 'JUKKA HOPEAVUORI'],
    mt: '4rem',
  },
  {
    key: 'built-with',
    lines: ['Built with', 'GATSBY'],
    mt: '10rem',
  },
];

const Intro = () => {
  const [state, setState] = useState({
    credit: null,
    loopCount: 0,
  });

  const { credit, loopCount } = state;

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

      setTimeout(() => {
        setState(nextState);
      }, timeout);
    },
    [credit, loopCount],
  );

  if (!credits || credits.length === 0) {
    return null;
  }

  if (!credit) {
    return null;
  }

  const { lines, mt } = credit;
  const key = `${loopCount}_${credit.key}`;

  return (
    <>
      <Keyframes />
      <Container>
        <TransitionGroup>
          <CSSTransition key={key} timeout={1150} classNames="credit">
            <Delay timeout={1200}>
              <Credit style={{ marginTop: mt }}>
                {lines.map((line, index) => (
                  <CreditLine key={index}>
                    <Delay timeout={index * typingDuration}>
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
