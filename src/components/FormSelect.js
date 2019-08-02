import React from "react";
import { InputWrapper, Label, Select, InputError } from "../StyledComponents/index";

export default function FormSelect(props) {
    //create options based on props.options array
    const options = props.options.map((option, index) => {
        return (
            <option value={option.toLowerCase()} key={index}>
                {option}
            </option>
        );
    });

    return (
        <InputWrapper>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Select id={props.id} value={props.value} onChange={props.onChange}>
                <option value="">Select your business</option>
                {options}
            </Select>
            <InputError>{props.error}</InputError>
        </InputWrapper>
    );
}
