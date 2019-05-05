import React, { Component } from 'react';
import { Container } from './components';
import Game from './Game';
import styled from 'styled-components';
const Header = styled.header`
  & h1 {
    margin: 0;
    padding: 0;
    font-family: monospace
  }
`;
export class App extends Component {
  

  render() {
    return (<Container>
      <Header>
        <h1>MasterMind!</h1>
      </Header>
      <Game
        difficulty={3}
        maxAttempts={5}
      />
      <footer>
        made by @eatsjobs
      </footer>
    </Container>)
  }
}

export default App;
