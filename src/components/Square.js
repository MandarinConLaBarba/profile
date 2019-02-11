import React from 'react';

import styled from 'styled-components'

const Wrapper = styled.div`
  border-top-left-radius: ${props => props.position === 0 ? "10px" : "0"};
  border-top-right-radius: ${props => props.position === 1 ? "10px" : "0"};
  border-bottom-left-radius: ${props => props.position === 2 ? "10px" : "0"};
  border-bottom-right-radius: ${props => props.position === 3 ? "10px" : "0"};
  flex: 1;
  text-align: center;
  height: 10vw;
  width: 10vw;
  @media only screen and (max-width: 600px) {
    height: 30vw;
    width: 30vw;
  }
  color: #${props => props.color};
  background-color: #${props => props.bgColor};
  color: #${props => props.color};
  border-color: #000;
  border-right-width .5px;
  boder-top-width: 1px;
`;


const Square = ({ children, position, bgColor, color }) => {
  return (
      <Wrapper
        {...{color, bgColor, position}}>
        {children}
      </Wrapper>
    );
}

export default Square;
