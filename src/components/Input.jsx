import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
/** 
  on mobile we need to attach keydown and text input to correctly detect change!
  It works for desktop browser too.
*/
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    & input {
      color: black;
      font-family: monospace;
      font-size: 20px;
      width: 100%;
      background: white;
      outline: none;
      border: none;
      border-bottom: 1px solid rgb(150, 150, 150);
      opacity: 1;
      transition: opacity .2s ease-in-out;
      ${props => props.mini && css`
        max-width: 35px;
        text-align: center;
      `}
    }
    & input:disabled {
      opacity: .4;
    }
    & input:focus {
      border-bottom: 1px solid black;
    }
    & input:read-only {
      
    }
    & input[readonly] {
      pointer-events: none;
    }
`

const noop = () => {}
class Input extends Component {
  static defaultProps = {
    name: 'name',
    placeholder: '',
    type: 'text',
    required: false,
    style: {},
    inputStyle: {},
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    autoFocus: false,
    disabled: false,
    initialValue: '',
    className: '',
    readOnly: false,
    maxLength: 524288,
    autoComplete: 'off'
  }

  static propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    autoComplete: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    invalid: PropTypes.bool,
    inputStyle: PropTypes.object,
    type: PropTypes.oneOf([
      'text'
    ]),
    required: PropTypes.bool,
    style: PropTypes.object,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    initialValue: PropTypes.string,
    readOnly: PropTypes.bool,
    maxLength: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
      focused: false,
      mounted: false
    };
    this._previous = '';
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ value: this.props.initialValue, mounted: true }, () => {
      this.props.autoFocus && this.inputRef.current.focus();
    });
  }

  componentWillUnmount() {
    this._previous = '';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.initialValue !== this.props.initialValue) {
      this.setState({ value: this.props.initialValue });
    }
  }

  _onFocus = (evt) => {
    evt.persist();
    this.setState({ focused: true }, () => {
      this.props.onFocus(evt);
    });
  }

  _onBlur = (evt) => {
    evt.persist();
    this.setState({ focused: false }, () => {
      this.props.onBlur(evt);
    });
  }

  _onChange = (evt) => {
    this.setState({
      value: evt.target.value
    });
  }

  _handleKeyDown = (evt) => {
    this._previous = evt.target.value;
  }

  _handleInput = (evt) => {
    const current = evt.target.value;
    if (this._previous !== current) {
      // on change
      this.props.onChange(evt, current, this._previous);
    }
  }

  render() {
    const {
      label,
      style, 
      placeholder, 
      required,
      type,
      name, 
      inputStyle, 
      readOnly, 
      disabled, 
      maxLength,
      autoComplete,
      mini
    } = this.props;
    const { 
      value,
      focused,
      mounted
    } = this.state;
    return (
      <InputContainer 
        key={mounted}
        style={style}
        mini={mini}
      >
        <input
          aria-label={label}
          placeholder={placeholder}
          ref={this.inputRef}
          id={name}
          name={name}
          type={type}
          value={value}
          required={required}
          onChange={this._onChange}
          onKeyDown={this._handleKeyDown}
          onInput={this._handleInput}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          readOnly={readOnly}
          style={inputStyle}
          disabled={disabled}
          maxLength={maxLength}
          autoComplete={autoComplete}
        />
      </InputContainer>
    );

  }
}

export default Input;