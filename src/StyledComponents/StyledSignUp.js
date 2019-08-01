import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65.6rem;
    height: 90.6rem;
    margin: 5% 0;
    padding: 8.4rem 16.8rem;
    background-color: #fff;
    box-shadow: 1px 1px 3px 2px #f5f5f5;
`;

export const Form = styled.form`
    width: 32rem;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
`;

export const Legend = styled.legend`
    margin: 0 auto 2rem 0;
    color: #44b1df;
    text-transform: uppercase;
    text-align: center;
    font-size: 3.2rem;
    font-weight: 300;
`;
