import React from "react";
import { FormWrapper, Form, Fieldset, Legend, ImageTopLeft, BlueButton } from "../StyledComponents/index";

import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import FormCheckBox from "../components/FormCheckBox";

import logo from "../assets/logo.svg";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            business: "",
            email: "",
            username: "",
            password: "",
            website: "",
            type: "",
            terms: false,
            policy: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("success", this.state);
        console.log(this.state);
    }

    render() {
        return (
            <FormWrapper>
                <ImageTopLeft src={logo} alt="simplr" />
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Fieldset>
                        <Legend>let's get started</Legend>
                        <FormInput id={"business"} label={"Business Name"} type={"text"} onChange={e => this.setState({ business: e.target.value })} />
                        <FormInput id={"email"} label={"Business Email"} type={"email"} onChange={e => this.setState({ email: e.target.value })} />
                        <FormInput id={"username"} label={"Create a Username"} type={"text"} onChange={e => this.setState({ username: e.target.value })} />
                        <FormInput id={"password"} label={"Password"} tooltip={" 6 characters | 1 uppercase | 1 lowercase | 1 digit"} type={"password"} onChange={e => this.setState({ password: e.target.value })} />
                        <FormInput id={"website"} label={"Website"} tooltip={" (Optional)"} type={"text"} onChange={e => this.setState({ website: e.target.value })} />
                        <FormSelect id={"type"} label={"Type of Business"} options={["Daycare", "Restaurant", "Dealership"]} />
                        <FormCheckBox id={"terms"} label={"Terms of Service"} labelOption={"terms of services"} optionLink={"https://www.simplr.ai/"} type={"checkbox"} onChange={e => this.setState({ terms: e.target.checked })} />
                        <FormCheckBox id={"policy"} label={"Privacy Policy"} labelOption={"privacy policy"} optionLink={"https://www.simplr.ai/"} type={"checkbox"} onChange={e => this.setState({ policy: e.target.checked })} />
                    </Fieldset>
                    <BlueButton>Register</BlueButton>
                </Form>
            </FormWrapper>
        );
    }
}
