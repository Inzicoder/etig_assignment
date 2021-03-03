import React from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../CustomButton/CustomButton.component';
import {auth} from '../../../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: 'inzu2021@gmail.com',
            password: 'hey'
        }
    }

    handleSubmit =async event => {
        event.preventDefault();

        const {email,password} =this.state

        try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: '', password: '' })
        }
   catch(error){
 console.log(this.error)
        }
     
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                
                <h3>Sign in with your email and password</h3>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />
                    
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    
                      <div className="buttons">
                      <CustomButton type="submit"  >
                        Sign In
                    </CustomButton >
                      </div>

                </form>
            </div>
        )
    }
}


export default SignIn