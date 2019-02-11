import React, { Component } from 'react';
import styled from 'styled-components'
import AnimatedBarGroup from './components/AnimatedBarGroup'
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


const palette = Orangey;


const barSizes = [
  40,
  50,
  35,
  42
];

/**
 * App component
 */
class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

    }

  }

  render() {

    const {

     } = this.state;

    return (
      <div>
         <AnimatedBarGroup
          direction={'down'}
          palette={palette}
          sizes={barSizes}
          />

        <AnimatedBarGroup
          direction={'up'}
          palette={palette}
          sizes={barSizes}
          />

      </div>
    );

  }

}

export default App;

