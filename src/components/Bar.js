import React from 'react';

import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 5px;
  width: 2vw;
  height: ${props => props.height}vh;
  @media only screen and (max-width: 600px) {
    height: 50vh;
    width: 23vw;
  }
  color: #${props => props.color};
  background-color: #${props => props.bgColor};
  color: #${props => props.color};
`;


const Bar = ({ children, bgColor, color, height = 75 }) => {
  return (
      <Wrapper
        {...{color, bgColor, height}}>
        {children}
      </Wrapper>
    );
}

export default Bar;
