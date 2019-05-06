import React, { Component } from 'react';
import styled from 'styled-components';

import { Inputs } from '../components';
import { checkAttempt, generateSecretCode } from '../utils';

const GameContainer = styled.div`
  max-width: 700px;
  min-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  
`;

const Table = styled.table`
    width: 100%;
    min-height: 350px;
    background: #7c8aa5;
    padding: 1em 0em;
    & tbody tr {
        opacity: 0.35;
    }
    & tbody tr.active {
        opacity: 1;
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

const Button = styled.button`
    border-radius: 3px;
    padding: 0.5rem 0;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
`;

const Message = styled.div`
    font-size: .8rem;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export default class Game extends Component {
    constructor(props) {
        super(props);
        const { attempts, difficulty } = this.props.location.state;
        console.log({attempts, difficulty });
        this.state = {
            currentRow: 0,
            remainingAttempts: attempts,
            currentSecretCode: generateSecretCode({ difficulty })
        }
    }
    
    onInputsEnter = ({ values, id }) => {
        const { currentSecretCode } = this.state;
        const { difficulty } = this.props;
        const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ 
            attempt: values, 
            code: this.state.currentSecretCode
        });

        let winning = false;
        
        if (rightNumberRightPlace === difficulty) {
            winning = true
        }
        console.log({ rightNumberRightPlace, rightNumberWrongPlace, currentSecretCode });
        this.setState({ 
            [id]: {
                rightNumberRightPlace,
                rightNumberWrongPlace,
                readOnly: true
            },
            remainingAttempts: this.state.remainingAttempts - 1,
            currentRow: this.state.currentRow + 1,
            winning
        });
    }

    render() {
        const { 
            difficulty, 
            attempts: maxAttempts 
        } = this.props.location.state;
        const { currentRow, remainingAttempts, winning } = this.state;
        return (<GameContainer>
            <HeadRow>
                <Message style={{ textAlign: 'left', fontSize: '.8rem' }}>
                    Remaining Attempts {remainingAttempts}
                </Message>
                <Button onClick={() => {}}>Restart</Button>
            </HeadRow>
            
            <Table>
            <thead>
                <tr>
                    <th>Attempts</th>
                    <th>
                        Results:
                        <div style={{ fontSize: '.4rem' }}>Right Number and Place | Wrong Place</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {new Array(maxAttempts).fill(1).map((_, i) => {
                    return <tr className={currentRow === i ? 'active' : undefined} key={i}>
                        <td style={{ width: '70%' }}>
                            <Inputs
                                length={difficulty}
                                id={`attempt_${i}`}
                                onEntered={this.onInputsEnter} 
                                readOnly={currentRow !== i}
                            />
                        </td>
                        <td style={{ width: '30%' }}>
                            <div style={{ display: 'flex' }}>
                                <span style={{ flex: 1, textAlign: 'center' }}>
                                    {this.state[`attempt_${i}`] ? this.state[`attempt_${i}`].rightNumberRightPlace : 0}
                                </span>
                                <span style={{ flex: 1, textAlign: 'center' }}>
                                    {this.state[`attempt_${i}`] ? this.state[`attempt_${i}`].rightNumberWrongPlace : 0}
                                </span>
                            </div>
                        </td>
                    </tr>
                })}
        </tbody>
        <tfoot>
            <tr>
                <td style={{ width: '70%' }}>
                    <Inputs
                        length={this.state.currentSecretCode.length}
                        id='secret'
                        readOnly={true}
                    />
                </td>
                <td style={{ width: '30%' }}>
                    <Button>Show Solution</Button>
                </td>
            </tr>
        </tfoot>
        </Table>
    </GameContainer>)
    }
}