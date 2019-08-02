import React from "react";
import { Label, Select } from "../StyledComponents/index";

export default function FormSelect(props) {

    const options = props.options.map( (option, index) => {
        return <option value={option.toLowerCase()} key={index}>{option}</option>
    });

    return (
        <>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Select id={props.id}>
                <option value="">Select your business</option>
                {options}
            </Select>
        </>
    );
}
