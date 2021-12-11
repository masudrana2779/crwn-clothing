import React from 'react';
import FormInput from "../form-input/form-input.component";

import './signIn.style.scss';
import CustomButton from "../custom-button/custom-button.component";
import {singInWithGoogle} from "../../firebase/firebase-utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
        console.log(event.target.value)
    }

    render() {
        return (
                <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sing in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                        label={'E-mail'}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                        label={'password'}
                    />

                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>

                    <CustomButton onClick={singInWithGoogle}>
                        Sign In With Google
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
;