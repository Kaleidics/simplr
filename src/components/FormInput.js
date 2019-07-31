import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size: 1.6rem;
    color: #2b2b2b;
    font-weight: 400;
    line-height: 1.5;
`;

const Input = styled.input`
    width: 100%;
    height: 3.6rem;
    padding: 0 1rem;
    border: 1px solid grey;
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

export default function FormInput(props) {
    return (
        <>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Input id={props.id} type={props.type}></Input>
        </>
    )
}
