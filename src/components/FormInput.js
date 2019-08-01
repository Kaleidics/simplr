import React from 'react';
import { Label, Input } from '../StyledComponents/index';

export default function FormInput(props) {
    return (
        <>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Input id={props.id} type={props.type}></Input>
        </>
    )
}
