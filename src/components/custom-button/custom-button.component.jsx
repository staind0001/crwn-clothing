import React from 'react'
import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'



const CustomButton = ({children,...otherProps}) => (
    <Button rounded size='medium' dark {...otherProps}>
        {children}
    </Button>  
);

export default CustomButton;