import React, { Component } from 'react'
import FormInput from '../sign-up/sign-in/form-input/form-input.component'
import CustomButton from '../sign-up/CustomButton/CustomButton.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss';
import firebase from 'firebase/app';


class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email:'',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("passwords are not same")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

         await createUserProfileDocument(user, { displayName });
    this.setState({
        displayName: '',
        email:'',
        password: '',
        confirmPassword: ''
    })
        }
        catch (error) {
            console.log(error)
        }
    }

    handleChange=event=>{
        const {name,value}=event.target
        this.setState({[name]:value})
    }

    // onSignOut=()=>{
    //     firebase.auth().signOut();
    // }
    render() {

        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2>Create a new Account</h2>
                <span>Sign Up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                   
                </form>
            </div>
        )
    }
}

export default SignUp