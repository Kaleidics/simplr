import React from 'react';
import { Label, Input, ToolTip } from '../StyledComponents/index';

export default function FormInput(props) {
    return (
        <>
            <Label htmlFor={props.id}>{props.label}<ToolTip>{props.tooltip}</ToolTip></Label>
            <Input id={props.id} type={props.type}></Input>
        </>
    )
}
