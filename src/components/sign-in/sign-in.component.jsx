import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.component.styles.scss'



class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password:''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email ,password} = this.state;
        try {
          await signInWithEmailAndPassword(auth,email, password);
          this.setState({email:'',password:''})
        } catch (error) {
          console.log(error);
        }
    }

    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
    
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
              />
              <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
              />
              <div className='buttons'>
              <CustomButton className='custom-button'> Sign in </CustomButton>
              <CustomButton className='custom-button' onClick={signInWithGoogle}> Sign in with Google</CustomButton>
              </div>
            </form>
          </div>
        )
    }
}

export default SignIn;

//Custom button check type={submit} error with ui-neomorphisme button 