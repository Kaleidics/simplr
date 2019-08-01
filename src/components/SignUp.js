import React from 'react';
import { FormWrapper, Form, Fieldset, Legend, ImageTopLeft } from "../StyledComponents/index";

import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

import logo from '../assets/logo.svg';


export default class SignUp extends React.Component {

    render() {
        return (
            <FormWrapper>
                <ImageTopLeft src={logo} alt="simplr" />
                <Form>
                    <Fieldset>
                        <Legend>let's get started</Legend>
                        <FormInput id={"business"} label={"Business Name"} type={"text"} />
                        <FormInput id={"email"} label={"Business Email"} type={"email"} />
                        <FormInput id={"username"} label={"Create a Username"} type={"text"} />
                        <FormInput id={"password"} label={"Password"} type={"password"} />
                        <FormInput id={"website"} label={"Website"} type={"text"} />
                        <FormSelect id={"type"} label={"Type of Business"} options={["Daycare", "Restaurant", "Dealership"]} />
                    </Fieldset>
                </Form>
            </FormWrapper>
        );
    }
}