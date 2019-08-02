import React from "react";
import { InputWrapper, Label, Input, ToolTip, InputError } from "../StyledComponents/index";

export default function FormInput(props) {
    return (
        <InputWrapper>
            <Label htmlFor={props.id}>
                {props.label}
                <ToolTip>{props.tooltip}</ToolTip>
            </Label>
            <Input id={props.id} type={props.type} onChange={e => props.onChange(e)} value={props.value}/>
            <InputError>{props.error}</InputError>
        </InputWrapper>
    );
}
