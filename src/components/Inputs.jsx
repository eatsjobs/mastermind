import React, { Component, createRef } from 'react';
import styled from 'styled-components';

const InputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    & input {
        text-align: center;
        font-family: monospace;
        font-size: 1em;
        max-width: 50px;
        width: 100%;
        background: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid black;
        margin: 0px 1.5px
    }
    
    & input:focus {
        border-bottom: 1px solid green;
    }
    & input:read-only {
        background: gray;
    }
    & input[readonly] {
        pointer-events: none;
    }
`

export class Inputs extends Component {
    static defaultProps = {
        readOnly: false,
        length: 3
    }
    constructor(props) {
        super(props);
        this.values = [];
    }

    onChange = (evt) => {
        const value = parseInt(evt.target.value);
        const id = parseInt(evt.target.dataset.id);
        if (!isNaN(value)) {
            this.values[id] = value;
            if (this[`input${id + 1}`]) {
                // focus next input if exist
                this[`input${id + 1}`].focus();
            } else {
                this.props.onEntered({ values: this.values, id: this.props.id });
                this.values = [];
                this[`input${id}`].blur();
            }
        }
    }

    render() {
        const { readOnly } = this.props;
        return <InputsContainer>
            {new Array(this.props.length).fill(1).map((v, i) => {
                return <input
                    aria-label={`attempt_${i}`}
                    data-id={i}
                    key={i}
                    name={`attempt_${i}`}
                    onChange={this.onChange}
                    readOnly={readOnly}
                    ref={(node) => this[`input${i}`] = node}
                    type='text'
                    maxLength={1}
                />
            })}
        </InputsContainer>
    }
}