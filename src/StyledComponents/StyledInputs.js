import styled, { css } from "styled-components";

export const Label = styled.label`
    font-size: 1.6rem;
    color: #2b2b2b;
    font-weight: 400;
    line-height: 1.5;
`;

export const GeneralInput = css`
    width: 100%;
    height: 3.6rem;
    padding: 0 1rem;
    border: 1px solid #c3c3c3;
    font-family: "Lato", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    background-color: #f2f2f2;
    outline: none;
    margin-bottom: 2.5rem;

    &:active,
    &:focus {
        border-color: #00a2e7;
    }
`;

export const Input = styled.input`
    ${GeneralInput}
`;

export const Select = styled.select`
           ${GeneralInput}
           color: #6f6f6f;
           font-weight: 400;
           box-shadow: 0 2px 2px -1px #e5e5e5;
           appearance: none;
           

           background-image: linear-gradient(45deg, transparent 50%, #6f6f6f 50%), linear-gradient(135deg, #6f6f6f 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
           background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
           background-size: 5px 5px, 5px 5px, 1px 0;
           background-repeat: no-repeat;

           &:active,
           &:focus {
               background-image: linear-gradient(45deg, #6f6f6f 50%, transparent 50%), linear-gradient(135deg, transparent 50%, #6f6f6f 50%), linear-gradient(to right, #ccc, #ccc);
               background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;
               background-size: 5px 5px, 5px 5px, 1px 0;
               background-repeat: no-repeat;
               outline: 0;
           }
       `;
