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

//checkbox input container used to help align elements
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
        text-decoration: none;
        border-bottom: 1px solid #00a2e7;
    }
`;

//default checkbox input is hidden
export const CheckBox = styled.input`
    height: 0;
    width: 0;
    padding: 0;
    margin: 0 0.5rem 0 0;
    vertical-align: bottom;
    top: -1px;

    position: absolute;
    opacity: 0;
    cursor: pointer;
    *overflow: hidden;
`;

export const CustomCheckBox = styled.span`
    height: 2rem;
    width: 2rem;
    position: absolute;
    top: 0;
    left: 0;

    background-color: transparent;
    border: 1px solid #4b4b4b;

    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;

//label for checkbox, also holds css state logic
export const CheckBoxLabel = styled.label`
    font-size: 1.4rem;
    color: #6f6f6f;
    position: relative;
    display: block;
    position: relative;
    padding-left: 2.5rem;
    cursor: pointer;

    &:hover ${CheckBox} ~ span {
        background-color: #c3c3c3;
    }

    & > ${CheckBox}:checked ~ span {
        background-color: #4b4b4b;
    }

    & > ${CheckBox}:checked ~ ${CustomCheckBox}:after {
        display: block;
    }

    & > ${CustomCheckBox}:after {
        left: 0.6rem;
        top: 0.2rem;
        width: 0.7rem;
        height: 1.2rem;
        border: 1px solid #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`;
