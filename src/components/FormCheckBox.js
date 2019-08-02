import React from "react";
import { CheckBoxWrapper, CheckBoxLabel, CheckBox, CustomCheckBox } from "../StyledComponents/index";

export default function FormCheckBox(props) {
    return (
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
    );
}
