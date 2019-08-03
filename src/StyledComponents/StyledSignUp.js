import styled from "styled-components";

//outer form wrapper
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65.6rem;
    min-height: 90.6rem;
    margin: 10rem 0;
    padding: 3rem;
    background-color: #fff;
    box-shadow: 1px 1px 3px 2px #d3d3d3;
    position: relative;

    @media (max-width: 560px) {
        margin: 0;
    }
`;

export const Form = styled.form`
    width: 32rem;

    @media (max-width: 360px) {
        width: 26rem;
    }
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
    margin: 3rem 0;
`;

export const Legend = styled.legend`
    margin: 0 auto 2rem 0;
    color: #44b1df;
    text-transform: uppercase;
    text-align: center;
    font-size: 3.2rem;
    font-weight: 300;

    @media (max-width: 320px) {
        font-size: 2.8rem;
    }
`;
