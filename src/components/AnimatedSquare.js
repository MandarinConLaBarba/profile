import React, { PureComponent } from 'react';
import Square from './Square'
import styled, { keyframes } from 'styled-components'
import FadeIn from './FadeIn';

const getSquareKeyframes = (top, left, rotate) => {

  const enter = keyframes`
  from {
    top: 0vh;
    left: 0vw;
    transform: rotate(0deg);
  }

  to {
    top: ${top}vh;
    left: ${left}vw
    transform: rotate(${rotate}deg);
  }
`;

const leave = keyframes`
  from {
    top: ${top}vh;
    left: ${left}vw
    transform: rotate(${rotate}deg);
  }

  to {
    top: 0vh;
    left: 0vw;
    transform: rotate(0deg);
  }
`;

  return {enter, leave}

}

 const getAnimWrapper = ({ enter , leave }) => {

  const min = 4;
	const max = 8;
	const random = Math.floor(Math.random() * (+max - +min)) + +min;

  return styled.div`
    position: relative;
    animation-fill-mode: forwards;
    animation-duration .${random}s;
    animation-name ${props => props.clicked ? enter : leave};
    `;

 }

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  font-size: 20px;
`;

/**
 * An animated square
 */
class AnimatedSquare extends PureComponent {

  render() {

    const { anim, clicked, onClick, indx, children, bgColor, color } = this.props;

    const { top, left, rotate } = anim;
    const StyledComponent = getAnimWrapper(getSquareKeyframes(top, left, rotate));

    return (
      <StyledComponent clicked={clicked} onClick={onClick}>
        <Square position={indx} {...{color, bgColor}}>
          {children && <TextWrapper><FadeIn>{children}</FadeIn></TextWrapper>}
        </Square>
      </StyledComponent>
    )
  }

}



export default AnimatedSquare