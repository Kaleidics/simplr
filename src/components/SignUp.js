import React from 'react';
import { FormWrapper, Form, Fieldset, Legend, ImageTopLeft, CheckBox, BlueButton } from "../StyledComponents/index";

import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import FormCheckBox from '../components/FormCheckBox'

import logo from '../assets/logo.svg';


export default class SignUp extends React.Component {

    render() {
        return (
            <FormWrapper>
                <ImageTopLeft src={logo} alt="simplr" />
                <Form noValidate>
                    <Fieldset>
                        <Legend>let's get started</Legend>
                        <FormInput id={"business"} label={"Business Name"} type={"text"} />
                        <FormInput id={"email"} label={"Business Email"} type={"email"} />
                        <FormInput id={"username"} label={"Create a Username"} type={"text"} />
                        <FormInput id={"password"} label={"Password"} tooltip={" 6 characters | 1 uppercase | 1 lowercase | 1 digit"} type={"password"} />
                        <FormInput id={"website"} label={"Website"} tooltip={" (Optional)"} type={"text"} />
                        <FormSelect id={"type"} label={"Type of Business"} options={["Daycare", "Restaurant", "Dealership"]} />
                        <FormCheckBox id={"terms"} label={"Terms of Service"} labelOption={"terms of services"} optionLink={"https://www.simplr.ai/"} type={"checkbox"} />
                        <FormCheckBox id={"policy"} label={"Privacy Policy"} labelOption={"privacy policy"} optionLink={"https://www.simplr.ai/"} type={"checkbox"} />
                    </Fieldset>
                    <BlueButton>Register</BlueButton>
                </Form>
            </FormWrapper>
        );
    }
}