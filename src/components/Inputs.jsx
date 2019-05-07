import React, { Component } from 'react';
import styled from 'styled-components';

const InputsContainer = styled.form`
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
        initialValues: [],
        focus: false
    }
    constructor(props) {
        super(props);
        this.state = {
            values: this.props.initialValues
        }
    }

    componentDidMount() {
        if (this.props.focus) {
            this[`input0`].focus();
        }
    }

    onChange = (evt) => {
        console.log('change', evt);
        const id = parseInt(evt.target.dataset.id);
        let newValues = [
            ...this.state.values
        ];
        
        if (evt.target.value.length < 2) {
            newValues[id] = evt.target.value;
            this.setState({ values: newValues });
        }    
    }
    
    onSubmit = (evt) => {
        evt.preventDefault();
        const values = this.state.values.map((v) => parseInt(v, 10));
        this.props.onEntered({ values, id: this.props.id });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.focus !== this.props.focus) {
            if (this.props.focus) {
                this[`input0`].focus();
            } else {
                this[`input0`].blur();
            }
        }
    }

    render() {
        const { readOnly } = this.props;
        const { values } = this.state;
        return <InputsContainer
            onSubmit={this.onSubmit}>
            {values.map((v, i) => {
                return <input
                    autoComplete='off'
                    aria-label={`input_${i}`}
                    data-id={i}
                    key={i}
                    value={v}
                    name={`input_${i}`}
                    onChange={this.onChange}
                    readOnly={readOnly}
                    ref={(node) => this[`input${i}`] = node}
                    type='number'
                    min={0}
                    max={9}
                />
            })}
            <button type='submit'>check</button>
        </InputsContainer>
    }
}