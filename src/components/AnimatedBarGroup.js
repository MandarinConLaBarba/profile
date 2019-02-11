import React from 'react';
import styled from 'styled-components'
import AnimatedBar from './AnimatedBar'

const BarWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  resize: both;
  overflow: auto;
  ${props => props.direction === "up" ? "transform: rotate(180deg);" : ""}

`;

const AnimatedBarGroup = ({ palette, sizes, direction }) => {

  const barNodes = palette.colors.map((x, i) => (
    <AnimatedBar
      key={`bar-${i}`}
      direction={direction}
      color={palette.colors[i]}
      bgColor={palette.bgColors[i]}
      height={sizes[i]}
      />
  )).concat(palette.colors.map((x, i) => (
    <AnimatedBar
      key={`bar-${i}`}
      direction={direction}
      color={palette.colors[i]}
      bgColor={palette.bgColors[i]}
      height={sizes[i]}
      />
  )))

  return (
    <BarWrapper direction={direction}>
      {barNodes}
    </BarWrapper>
  );


}

export default AnimatedBarGroup