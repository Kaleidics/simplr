import styled, { css } from 'styled-components';

export const GeneralButton = css`
    padding: 1.5rem 5rem;
    color: #fff;
    font-size: 1.8rem;
    background-color: #000;
    border: none;
    display: inherit;
    cursor: pointer;
    text-transform: uppercase;
    margin: 0 auto;
`;

export const BlueButton = styled.button`
    ${GeneralButton}
    background-color: #44b1df;
`;
