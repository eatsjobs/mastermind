import React, { Component } from 'react';
import styled from 'styled-components';
//import { Platform } from '../utils';
import { Button } from './';

const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    & input {
        color: white;
        text-align: center;
        font-family: monospace;
        font-size: 1em;
        max-width: 50px;
        width: 100%;
        background: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid rgb(200,200,200);
        margin: 0px 1.5px
    }
    & input::-webkit-outer-spin-button, & input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    & input[type='number'] {
        -moz-appearance: textfield;
    }
    
    & input:focus {
        border-bottom: 1px solid rgb(255,255,255);
    }
    & input:read-only, & input:disabled {
        background: gray;
    }
    & input[readonly] {
        pointer-events: none;
    }
`;

const BACK_SPACE = 'Backspace';
//const ENTER = 'Enter';
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
    
    _validate = (value, min, max) => {
        if (isNaN(value)) {
            return false;
        }
        const _value = Number(value);
        const _max = Number(max);
        const _min = Number(min);
        if (_value >= _min && _value <= _max) {
            return true;
        }
        return false;
    }

    onChange = (evt) => {
        evt.persist();
        const { 
            dataset,
            value, 
            min,
            max
        } = evt.target;
        if (!this._validate(value, min, max)) {
            return false;
        }
        
        console.log({ name: 'onChange', evt, value, min, max, dataset });
        const index = parseInt(dataset.id);
        let newValues = [ 
            ...this.state.values
        ];

        newValues[index] = value;
        const isRowValid = newValues.every((v) => {
            if (typeof v === 'undefined' || v === '') {
                return false;
            } else {
                return this._validate(v, min, max);
            }
        });
        this.setState({ 
            values: newValues, 
            isRowValid
        });
    }

    onKeyUp = (evt) => {
        evt.preventDefault();
        const { dataset } = evt.target;
        const { charCode, key } = evt;
        const index = parseInt(dataset.id);
        console.log({ name: 'onKeyUp', evt, charCode, key });
        if (key === BACK_SPACE) {
            if (this[`input${index - 1}`]) {
                this[`input${index - 1}`].focus()
            } 
        } else if (!isNaN(key)) { //number pressed? give focus to the next if
            if (this[`input${index + 1}`]) {
                this[`input${index + 1}`].focus();
            } else {
                // this.refSubmitButton.current.focus();
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
        return <FormContainer
            autoComplete='off'
            onSubmit={this.onSubmit}
        >
            {values.map((value, i) => {
                return <input
                    onFocus={this.onFocus}
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
                    type='number'
                    min='0'
                    max='9'
                />
            })}
            <Button size='s' ref={this.refSubmitButton} type='submit' disabled={played || !isRowValid}>CheckRow</Button>
        </FormContainer>
    }
}