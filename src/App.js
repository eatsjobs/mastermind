import React, { Component } from 'react';
import styled from 'styled-components';
import routes from './routes';
const Header = styled.header`
  & h1 {
    margin: 0;
    padding: 0;
    font-family: monospace
  }
`;

const Footer = styled.footer`
  font-size: 10px;
  padding: 10px 0px;
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
    return (
        <Container>
          <Header>
            <h1>MasterMind!</h1>
          </Header>
          {routes}
          <Footer>
            <strong>madeBy @eatsjobs</strong>, 2019
          </Footer>
        </Container>
    )
  }
}

export default App;
