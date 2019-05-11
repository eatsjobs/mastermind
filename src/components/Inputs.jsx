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
    & input:read-only, & input:disabled {
        background: gray;
    }
    & input[readonly] {
        pointer-events: none;
    }
`;

const regex = /[0-9]{0,1}/g;
const BACK_SPACE = 8;
const ENTER = 13;
export class Inputs extends Component {
    static defaultProps = {
        readOnly: false,
        initialValues: [],
        focus: false
    }
    constructor(props) {
        super(props);
        this.refSubmitButton = React.createRef();
        this.state = {
            values: this.props.initialValues,
            isRowValid: false
        }
    }

    componentDidMount() {
        if (this.props.focus) {
            this[`input0`].focus();
        }
    }

    onChange = (evt) => {
        evt.persist();
        const index = parseInt(evt.target.dataset.id);
        const { value } = evt.target;
        let newValues = [ ...this.state.values ];
        newValues[index] = value;
        const isRowValid = newValues.every((v) => {
            if (typeof v !== 'undefined' && v !== '') {
                return regex.test(v);
            } else {
                return false;
            }
        });
        this.setState({ 
            values: newValues, 
            isRowValid
        });
    }

    onKeyUp = (evt) => {
        const index = parseInt(evt.target.dataset.id);
        const code = evt.keyCode || evt.which;
        console.log({ code, index });
        if (code === BACK_SPACE) {
            this[`input${index - 1}`] && this[`input${index - 1}`].focus();
        } else if (code !== ENTER) {
            console.log({ code });
            if (this[`input${index + 1}`]) {
                this[`input${index + 1}`].focus();
            } else {
                this.refSubmitButton.current.focus();
            }
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
        const { disabled, played } = this.props;
        const { values, isRowValid } = this.state;
        return <InputsContainer
            onSubmit={this.onSubmit}
        >
            {values.map((value, i) => {
                return <input
                    autoComplete='off'
                    aria-label={`input_${i}`}
                    data-id={i}
                    key={i}
                    value={value}
                    name={`input_${i}`}
                    onKeyUp={this.onKeyUp}
                    onChange={this.onChange}
                    disabled={disabled}
                    ref={(node) => this[`input${i}`] = node}
                    type='text'
                    maxLength={1}
                />
            })}
            <button ref={this.refSubmitButton} type='submit' disabled={played || !isRowValid}>CheckRow</button>
        </InputsContainer>
    }
}