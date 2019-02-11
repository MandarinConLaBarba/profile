import React, { useState, useEffect } from 'react';
import Bar from './Bar'
import styled, { keyframes } from 'styled-components'

const getMovementKeyframes = (from, to) => {

  return keyframes`
  from {
    top: ${from}vh;
  }

  to {
    top: ${to}vh;
  }
`;

}

const randy = (min, max) => Math.floor(Math.random() * (+max - +min)) + +min

const getAnimWrapper = (movement) => {

  const min = 1;
	const max = 3;
  const random = randy(min, max);


  return styled.div`
    position: relative;
    animation-fill-mode: forwards;
    animation-duration ${random}s;
    animation-name ${movement};
    `;
}

const AnimatedBar = ({ children, bgColor, color, height, direction = 'down' }) => {

  const minTop = (height * -1) + 2;
  const maxTop = 0;

  const [{
    from, to
  }, setTopPositions] = useState({from: minTop, to: randy(minTop, maxTop)});

  useEffect(() => {
    const intervalLength = randy(20, 40);

    const interval = setInterval(() => {
      setTopPositions({from: to, to: randy(minTop, maxTop)})
    }, intervalLength * 500)

    return () => {
      clearInterval(interval);
    }
  });

  const Animated = getAnimWrapper(getMovementKeyframes(from, to));

  return (
    <Animated>
      <Bar {...{color, bgColor, height}}>
        {children}
      </Bar>
    </Animated>
  )


}


export default AnimatedBar