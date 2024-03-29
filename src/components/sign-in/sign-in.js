import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
/**Komponenti per mu kyc */
import CustomButton from '../custom-button/custom-button';

import {signInWithGoogle, auth} from '../firebase/firebase.utils.js';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    /** Me mujt mu kyc me email e password qe jena regjistru ma heret ne databaze */
        handleSubmit = async event =>{
            event.preventDefault();

            const {email, password} = this.state;

            try{
                await auth.signInWithEmailAndPassword(email, password);
            } catch (error) {
                console.log(error);
            }

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
                        <FormInput name='password' type='password' value={this.state.password} label='password' required handleChange={this.handleChange} />
                      
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
