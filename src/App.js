import React, { Component } from 'react';
import Game from './Game';
import styled from 'styled-components';
const Header = styled.header`
  & h1 {
    margin: 0;
    padding: 0;
    font-family: monospace
  }
`;

const Footer = styled.footer`
  font-size: 10px;
`;

export const Container = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
    height: 100%;
`;

export class App extends Component {
  render() {
    return (<Container>
      <Header>
        <h1>MasterMind!</h1>
      </Header>
      <Game
        difficulty={3}
        maxAttempts={10}
      />
      <Footer>
        made by @eatsjobs
      </Footer>
    </Container>)
  }
}

export default App;
