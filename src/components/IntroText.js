import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components'
import FadeIn from './FadeIn';


const Wrapper = styled.div`
  position: fixed;
  width: 25vw;
  height: 100vh;
  z-index: 1;
  padding: 2vw;
  font-size: 6vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const enter = keyframes`
from {
  top: 110vh;
}

to {
  top: 0vh;
}
`;


const SlideIn = styled.div`
  position: relative;
  animation-fill-mode: forwards;
  animation-duration .5s;
  animation-name ${enter};
  color: #3c415e;
  margin-bottom: 3vh;
`;

export default ({ children }) => {
  return (
    <Wrapper>
      {children.map((c, i) => <Child key={`intro-text-${i}`}>{c}</Child>)}
    </Wrapper>
  )

}

class Child extends PureComponent {
  render() {

    const { children } = this.props;

    return (
      <SlideIn>{children}</SlideIn>
    )

  }
}