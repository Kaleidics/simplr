import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65.6rem;
    height: 90.6rem;
    margin: 5% 0;
    padding: 8.4rem 16.8rem;
    background-color: #fff;
    box-shadow: 1px 1px 3px 2px #f5f5f5;
`;

const Form = styled.form`
    width: 32rem;
`;

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
`;

const Legend = styled.legend`
    margin: 0 auto 2rem 0;
    color: #44b1df;
    text-transform: uppercase;
    text-align: center;
    font-size: 3.2rem;
    font-weight: 300;
`;

export default class SignUp extends React.Component {

    render() {
        return (
            <FormWrapper>
                <Form>
                    <Fieldset>
                        <Legend>let's get started</Legend>
                        <FormInput id={'business'} label={'Business Name'} type={'text'}/>
                        <FormInput id={'email'} label={'Business Email'} type={'email'}/>
                        <FormInput id={'username'} label={'Create a Username'} type={'text'}/>
                        <FormInput id={'password'} label={'Password'} type={'text'}/>
                        <FormInput id={'website'} label={'Website'} type={'text'}/>
                    </Fieldset>
                </Form>
            </FormWrapper>
        )
    }
}