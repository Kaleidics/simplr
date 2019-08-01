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
    background-color: transparent;
`;
