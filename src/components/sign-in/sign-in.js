import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {signInWithGoogle} from '../firebase/firebase.utils.js';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
        handleSubmit = event =>{
            event.preventDefault();

            this.setState({ email: '', password: ''})
        }

        handleChange = event => {
            const {value, name} = event.target;

            this.setState({ [name]: value})
        }

        render(){
            return(
                <div className='sign-in'>
                    <h1> I already have an account </h1>
                    <span> Sign in with your email and password </span>

                    <form onSubmit = {this.handleSubmit}>
                        <FormInput  name='email' type='email' value={this.state.email} label='email' required handleChange={this.handleChange} />
                        <FormInput name='password' type='password' value={this.state.email} label='password' required handleChange={this.handleChange} />
                      
                      <div className='buttons'>
                      <CustomButton type='submit'>Sign In</CustomButton>
                      <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                      </div>
                        
                      
                    </form>
                </div>
            )
        }

}



export default SignIn;