import React from "react";
import { FormWrapper, Form, Fieldset, Legend, ImageTopLeft, BlueButton } from "../StyledComponents/index";

import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import FormCheckBox from "../components/FormCheckBox";

import validate from '../validation/validate';

import logo from "../assets/logo.svg";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            //programmatic error handling
            businessError: "",
            emailError: "",
            usernameError: "",
            passwordError: "",
            typeError: "",
            termsError: "",
            policyError: "",

            ////////////
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

    checkErrors(obj) {
        for (var key in obj) {
            if (obj[key] != "")
                return false;
        }
        return true;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(validate(this.state));
        if (this.checkErrors(validate(this.state))) {
            this.setState({
                businessError: "",
                emailError: "",
                usernameError: "",
                passwordError: "",
                typeError: "",
                termsError: "",
                policyError: "",
                business: "",
                email: "",
                username: "",
                password: "",
                website: "",
                type: "",
                terms: false,
                policy: false
            });
            console.log("Success!", this.state);
            alert("Success!");
        } 
        return;
    }

    render() {
        return (
            <FormWrapper>
                <ImageTopLeft src={logo} alt="simplr" />
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Fieldset>
                        <Legend>let's get started</Legend>
                        <FormInput id={"business"} label={"Business Name"} type={"text"} error={this.state.businessError} onChange={e => this.setState({ business: e.target.value })} value={this.state.business} />
                        <FormInput id={"email"} label={"Business Email"} type={"email"} error={this.state.emailError} onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
                        <FormInput id={"username"} label={"Create a Username"} type={"text"} error={this.state.usernameError} onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
                        <FormInput id={"password"} label={"Password"} tooltip={" 6 characters | 1 uppercase | 1 lowercase | 1 digit"} type={"password"} error={this.state.passwordError} onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                        <FormInput id={"website"} label={"Website"} tooltip={" (Optional)"} type={"text"} onChange={e => this.setState({ website: e.target.value })} value={this.state.website} />
                        <FormSelect id={"type"} label={"Type of Business"} options={["Daycare", "Restaurant", "Dealership"]} error={this.state.typeError} onChange={e => this.setState({ type: e.target.value })} value={this.state.type} />
                        <FormCheckBox id={"terms"} label={"Terms of Service"} labelOption={"terms of services"} error={this.state.termsError} optionLink={"https://www.simplr.ai/"} type={"checkbox"} onChange={e => this.setState({ terms: e.target.checked })} value={this.state.terms} />
                        <FormCheckBox id={"policy"} label={"Privacy Policy"} labelOption={"privacy policy"} error={this.state.policyError} optionLink={"https://www.simplr.ai/"} type={"checkbox"} onChange={e => this.setState({ policy: e.target.checked })} value={this.state.policy} />
                    </Fieldset>
                    <BlueButton>Register</BlueButton>
                </Form>
            </FormWrapper>
        );
    }
}
