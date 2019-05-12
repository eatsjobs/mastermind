import styled, { css } from 'styled-components';
const Button = styled.button`
    border-radius: 3px;
    padding: 0.5rem 0;
    width: 11rem;
    ${props => {
        return props.size === 's' && css`
            width: 7rem
        `;
    }};
    background: transparent;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    transition: background .2s ease;
    outline:none;
    &:hover:not([disabled]) {
        background: white;
        color: black;
    }
    &:focus:not([disabled]) {
        box-shadow:0 0 10px #9ecaed;
    }
    &:disabled {
        color: gray;
        border: 2px solid gray;
        opacity: 0.85;
    }
`;

export default Button;