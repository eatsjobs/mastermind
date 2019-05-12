import React, { Component } from 'react';
import styled from 'styled-components';

import { Inputs, Button } from '../components';
import { observer, inject } from 'mobx-react';

const GameContainer = styled.div`
  max-width: 700px;
  width: 100%;
`;

const Table = styled.table`
    width: 100%;
    min-height: 350px;
    background: rgba(255,255,255, 0.3);
    padding: 1rem 2rem;
    border-radius: 10px;

    & tbody tr {
        opacity: 0.35;
    }
    & tbody tr.active {
        opacity: 1;
        & td:first-child {
            width: 80%;
        }
        & td:last-child {
            width: 20%;
        }
    }

    & tr td {

    }

    & tfoot tr td {
        text-align: center;
    }
`;

const HeadRow = styled.div`
    display: flex; 
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Message = styled.div`
    font-size: .8rem;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-size: .8rem;
`;

class Game extends Component {

    componentDidMount() {
        const { gameStore } = this.props;
        if (!gameStore.hasStarted) {
            this.props.history.push('/');
        }
    }

    gotToGameOver = () => {
        this.props.history.push('/gameover');
    }

    onInputsEnter = ({ values, id }) => {
        console.log('onInputs',{ values, id });
        const { gameStore } = this.props;
        gameStore.playAttempt({ values });
        if (gameStore.hasFinished) {
            this.gotToGameOver();
        }
    }

    render() {
        const { gameStore } = this.props;
        const { currentRow, remainingAttempts, attempts } = gameStore;
        return (<GameContainer>
            <HeadRow>
                <Message>
                    Remaining Attempts {remainingAttempts}
                </Message>
            </HeadRow>
            <Table>
            <thead>
                <tr>
                    <th>Attempts</th>
                    <th>
                        <div>Results:</div>
                        <div style={{ fontSize: '.7rem' }}>Right Number and Place | Wrong Place</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {attempts.map((_, i) => {
                    return <tr className={currentRow === i ? 'active' : undefined} key={i}>
                        <td>
                            <Inputs
                                focus={currentRow === i}
                                initialValues={attempts[i].values}
                                id={i}
                                onEntered={this.onInputsEnter} 
                                disabled={currentRow !== i}
                                played={attempts[i].played}
                            />
                        </td>
                        <td>
                            <div style={{ display: 'flex' }}>
                                <span style={{ flex: 1, textAlign: 'center' }}>
                                    {attempts[i].whites}
                                </span>
                                <span style={{ flex: 1, textAlign: 'center' }}>
                                    {attempts[i].blacks}
                                </span>
                            </div>
                        </td>
                    </tr>
                })}
        </tbody>
        <tfoot>
            <tr>
                <td style={{ width: '70%' }}>
                    {/*<Inputs
                        length={this.state.currentSecretCode.length}
                        id='secret'
                        readOnly={true}
                    />*/}
                </td>
                <td style={{ width: '30%' }}>
                    <Button 
                        onClick={this.gotToGameOver}>
                        Show Solution
                    </Button>
                </td>
            </tr>
        </tfoot>
        </Table>
    </GameContainer>)
    }
}

export default inject('gameStore')(observer(Game));