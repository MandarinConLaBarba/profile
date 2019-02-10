import React from 'react';
import styled, { keyframes } from 'styled-components'

const enter = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 100;
}
`;

const FadeIn = styled.div`
  opacity: 0;
  position: relative;
  animation-fill-mode: forwards;
  animation-duration .5s;
  animation-delay: .3s;
  animation-name ${enter};
`;

export default ({ children }) => {

  return (
    <FadeIn>{children}</FadeIn>
  )

}
