import React, { Component } from 'react';
import { Inputs } from './components';
import styled from 'styled-components';
import { checkAttempt, generateSecretCode } from './utils';

const GameContainer = styled.div`
  max-width: 700px;
  min-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

const Table = styled.table`
    width: 100%;
    height: 350px;
    background: #7c8aa5;
    padding: 1em 0em;
    & tr {
        opacity: 0.35;
    }
    & tr.active {
        opacity: 1;
    }

    & tr td {

    }
`;

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRow: 0,
            remainingAttempts: this.props.maxAttempts,
            currentSecretCode: generateSecretCode({ difficulty: this.props.difficulty })
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
                readOnly: false
            },
            remainingAttempts: this.state.remainingAttempts - 1,
            currentRow: this.state.currentRow + 1,
            winning
        });
    }

    render() {
        const { difficulty } = this.props;
        const { currentRow, remainingAttempts, winning } = this.state;
        return (<GameContainer>
            <div style={{ textAlign: 'left' }}>
                Remaining Attempts {remainingAttempts}
            </div>
            <Table>
            <thead>
                <tr className='active'>
                    <th>Attempts</th>
                    <th>Results</th>
                </tr>
            </thead>
            <tbody>
                {new Array(this.props.maxAttempts).fill(1).map((_, i) => {
                    return <tr className={currentRow === i ? 'active' : undefined} key={i}>
                        <td style={{ width: '70%' }}>
                            <Inputs
                                length={difficulty}
                                id={`attempt_${i}`}
                                onEntered={this.onInputsEnter} 
                                readOnly={false}
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
        </Table>
    </GameContainer>)
    }
}