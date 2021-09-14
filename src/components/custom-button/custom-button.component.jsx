import React from 'react'
import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import './custom-button.styles.scss'



const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <Button 
        className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`}
        rounded 
        size='medium' 
        dark 
        {...otherProps} 
    >
        {children}
    </Button>  
);

export default CustomButton;