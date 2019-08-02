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
        this.setState({
            business: "",
            email: "",
            username: "",
            password: "",
            website: "",
            type: "",
            terms: false,
            policy: false
        });
    }

    render() {
        return (
            <FormWrapper>
                <ImageTopLeft src={logo} alt="simplr" />
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Fieldset>
                        <Legend>let's get started</Legend>
                        <FormInput id={"business"} label={"Business Name"} type={"text"} onChange={e => this.setState({ business: e.target.value })} value={this.state.business} />
                        <FormInput id={"email"} label={"Business Email"} type={"email"} onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
                        <FormInput id={"username"} label={"Create a Username"} type={"text"} onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
                        <FormInput id={"password"} label={"Password"} tooltip={" 6 characters | 1 uppercase | 1 lowercase | 1 digit"} type={"password"} onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                        <FormInput id={"website"} label={"Website"} tooltip={" (Optional)"} type={"text"} onChange={e => this.setState({ website: e.target.value })} value={this.state.website} />
                        <FormSelect id={"type"} label={"Type of Business"} options={["Daycare", "Restaurant", "Dealership"]} onChange={e => this.setState({ type: e.target.value })} value={this.state.type} />
                        <FormCheckBox id={"terms"} label={"Terms of Service"} labelOption={"terms of services"} optionLink={"https://www.simplr.ai/"} type={"checkbox"} onChange={e => this.setState({ terms: e.target.checked })} value={this.state.terms} />
                        <FormCheckBox id={"policy"} label={"Privacy Policy"} labelOption={"privacy policy"} optionLink={"https://www.simplr.ai/"} type={"checkbox"} onChange={e => this.setState({ policy: e.target.checked })} value={this.state.policy} />
                    </Fieldset>
                    <BlueButton>Register</BlueButton>
                </Form>
            </FormWrapper>
        );
    }
}
