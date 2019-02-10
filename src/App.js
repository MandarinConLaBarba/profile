import React, { Component } from 'react';
import AnimatedSquare from './components/AnimatedSquare'
import styled from 'styled-components'

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
  {top: "-200", left: "-260", rotate: "-10"},
  {top: "-250", left: "260", rotate: "10"},
  {top: "250", left: "-260", rotate: "10"},
  {top: "250", left: "260", rotate: "-10"}
]

const colors = [
  "dfe2e2",
  "dfe2e2",
  "738598",
  "dfe2e2",
]

const bgColors = [
  "3c415e",
  "738598",
  "dfe2e2",
  "1cb3c8"
]

const initIntroTextItems = [
  "Hello! Hola!",
  "Thank you for visiting! Bienvenidos!",
  "Every day is a great day!",
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
      introTextItems:  Object.assign([], initIntroTextItems)
    }

    anims.forEach((anim, i) => {
      this[`_handleClick${i}`] = this._handleClick.bind(this, i);
    })

    this._clearClicks = this._clearClicks.bind(this);

  }

  render() {

    const { clickedItems, textForSquares } = this.state;

    const squareNodes = anims.map((anim, i) => (
      <AnimatedSquare
        key={`anim-square-${i}`}
        indx={i}
        color={colors[i]}
        bgColor={bgColors[i]}
        anim={anims[i]}
        onClick={this[`_handleClick${i}`]}
        clicked={clickedItems[i]}>
        {clickedItems[i] && textForSquares[i]}
        </AnimatedSquare>
    ))

    return (
      <div>
        <OuterWrapper onClick={this._clearClicks}>
          <MandarinWrapper>
            <MandarinImage src="/cell_mandarin.png" />
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
      introTextItems: Object.assign([], initIntroTextItems)})
  }

  _handleClick(indx, e) {

    const { clickedItems, textForSquares, introTextItems } = this.state;

    e.stopPropagation();

    clickedItems[indx] = clickedItems[indx] ? false : true;

    if (textForSquares[indx]) {
      introTextItems.unshift(textForSquares[indx]);
      textForSquares[indx] = "";
    } else {
      textForSquares[indx] = introTextItems.shift();
    }

    this.setState({
      clickedItems,
      textForSquares
    })

  }

}

export default App;

