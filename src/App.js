import React, { Component } from 'react';
import styled from 'styled-components'

import AnimatedSquare from './components/AnimatedSquare'
import IntroText from './components/IntroText'
import { Orangey, DarkSky } from './ColorPalettes'


const MandarinImage = styled.img`
  width: 100%;
  height: 100%;
`

const MandarinWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
`;

const OuterWrapper = styled.div`
  position: absolute;
  background: white;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  resize: both;
  overflow: auto;
`;

const InnerWrapper = styled.div`
  color: white;
  display: flex;
`;

const anims = [
  {top: "-10", left: "-10", rotate: "-13"},
  {top: "-9", left: "10", rotate: "8"},
  {top: "11", left: "-8", rotate: "12"},
  {top: "11", left: "12", rotate: "-11"}
]

const palette = Orangey;


const initIntroTextItems = [
  "Hello! Hola!",
  "Bienvenidos!",
  "Today is a great day!",
  "Están de acuerdo?"
]

/**
 * App component
 */
class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      clickedItems: [],
      textForSquares: [],
      textForLeftSide: [],
      introTextItems:  Object.assign([], initIntroTextItems)
    }

    anims.forEach((anim, i) => {
      this[`_handleClick${i}`] = this._handleClick.bind(this, i);
    })

    this._clearClicks = this._clearClicks.bind(this);

  }

  render() {

    const {
      clickedItems,
      textForSquares,
      textForLeftSide
     } = this.state;

    const squareNodes = anims.map((anim, i) => (
      <AnimatedSquare
        key={`anim-square-${i}`}
        indx={i}
        color={palette.colors[i]}
        bgColor={palette.bgColors[i]}
        anim={anims[i]}
        onClick={this[`_handleClick${i}`]}
        clicked={clickedItems[i]}>
        {clickedItems[i] && textForSquares[i]}
        </AnimatedSquare>
    ))

    return (
      <div>
        <IntroText>
          {textForLeftSide}
        </IntroText>
        <OuterWrapper onClick={this._clearClicks}>
          <MandarinWrapper>
            <MandarinImage src="cell_mandarin.png" />
          </MandarinWrapper>
          <InnerWrapper>
            {squareNodes[0]}
            {squareNodes[1]}
          </InnerWrapper>
          <InnerWrapper>
            {squareNodes[2]}
            {squareNodes[3]}
          </InnerWrapper>
        </OuterWrapper>
      </div>
    );

  }

  _clearClicks() {
    this.setState({
      clickedItems: {},
      textForSquares: [],
      textForLeftSide: [],
      introTextItems: Object.assign([], initIntroTextItems)
    })
  }

  _handleClick(indx, e) {

    const {
      clickedItems,
      textForSquares,
      introTextItems,
      textForLeftSide
     } = this.state;

    e.stopPropagation();

    clickedItems[indx] = clickedItems[indx] ? false : true;

    if (textForSquares[indx]) {
      //introTextItems.unshift(textForSquares[indx]);
      //textForSquares[indx] = "";
    } else {
      textForSquares[indx] = introTextItems.shift();
      if (textForLeftSide.length < initIntroTextItems.length) {
        textForLeftSide.push(textForSquares[indx]);
      }

    }

    this.setState({
      clickedItems,
      textForSquares,
      textForLeftSide
    })

  }

}

export default App;

