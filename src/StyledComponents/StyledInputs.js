import styled, { css } from "styled-components";

//general label for input
export const Label = styled.label`
    font-size: 1.6rem;
    color: #2b2b2b;
    font-weight: 400;
    line-height: 1.5;
`;

//general tooltip
export const ToolTip = styled.span`
    font-weight: 400;
    font-size: 1.2rem;
    color: #6f6f6f;
`;

//Base styled component for grey input boxes
export const GeneralInput = css`
    width: 100%;
    height: 3.6rem;
    padding: 0 1rem;
    border: 1px solid #c3c3c3;
    font-family: "Lato", sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    background-color: #f2f2f2;
    margin-bottom: 1.5rem;

    &:active,
    &:focus {
        outline-color: #00a2e7;
    }
`;

//general input element inheriting styles from General input
export const Input = styled.input`
    ${GeneralInput}
`;

//custom select input, inherits general input and has some custom styles
export const Select = styled.select`
    ${GeneralInput}
    color: #6f6f6f;
    font-weight: 400;
    box-shadow: 0 2px 2px -1px #e5e5e5;
    background-color: transparent;
`;

//custom checkbox input with center aligned text
export const CheckBoxWrapper = styled.div`
    margin-bottom: 1.5rem;

    div {
        color: #2b2b2b;
        font-size: 1.4rem;
        line-height: 3;
        font-weight: 700;
    }

    a,
    a:link,
    a:visited {
        color: #00a2e7;
    }
`;

export const CheckBoxLabel = styled.label`
    font-size: 1.4rem;
    color: #6f6f6f;
`;

export const CheckBox = styled.input`
    width: 1.3rem;
    height: 1.3rem;
    padding: 0;
    margin: 0 0.5rem 0 0;
    vertical-align: bottom;
    position: relative;
    top: -1px;
    *overflow: hidden;
`;
