import React, { Component } from 'react';
import styled from 'styled-components';
import routes from './routes';
const Header = styled.header`
  & h1 {
    margin: 0;
    padding: 0;
    font-family: monospace;
  }
`;

const Footer = styled.footer`
  font-size: 10px;
  padding: 10px 0px;
`;

export const Page = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    overflow: hidden auto;
    font-size: calc(10px + 2vmin);
    color: white;
`;
export class App extends Component {
  render() {
    return (
        <Page>
          <Header>
            <h1>MasterMind!</h1>
          </Header>
          {routes}
          <Footer>
            <strong>madeBy @eatsjobs</strong>, 2019
          </Footer>
        </Page>
    )
  }
}

export default App;
