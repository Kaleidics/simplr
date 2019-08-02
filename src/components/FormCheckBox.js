import React from "react";
import {InputWrapper, CheckBoxWrapper, CheckBoxLabel, CheckBox, CustomCheckBox, InputError } from "../StyledComponents/index";

export default function FormCheckBox(props) {
    return (
        <InputWrapper>
        <CheckBoxWrapper>
            <div>{props.label}</div>
            <CheckBoxLabel htmlFor={props.id}>
                <CheckBox id={props.id} type={props.type} onChange={e => props.onChange(e)} value={props.value} checked={props.value ? "checked" : ""} />
                <CustomCheckBox />I have read and I do accept &nbsp;
                <a target="_blank" href={props.optionLink} rel="noopener noreferrer">
                    {props.labelOption}
                </a>
            </CheckBoxLabel>
        </CheckBoxWrapper>
        <InputError>{props.error}</InputError>
        </InputWrapper>
    );
}
