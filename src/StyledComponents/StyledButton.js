import styled, { css } from 'styled-components';

//general purpose button with default black color
export const GeneralButton = css`
    width: 16rem;
    height: 4.4rem;
    color: #fff;
    font-size: 1.8rem;
    background-color: #000;
    border: none;
    display: inherit;
    cursor: pointer;
    text-transform: uppercase;
    margin: 10rem auto 2rem auto;
`;

//custom button, inherits the general purpose button style and we set it blue for the form
//redundant but this way we can create multiple different color buttons through inheriting GeneralButton without copy-pasting
export const BlueButton = styled.button`
    ${GeneralButton}
    background-color: #44b1df;
`;
