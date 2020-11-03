import React from 'react';
import './custom-button.styles.scss';
/** Butonat qe i kena perdore psh te SignIn, SignUp, SihnIn with Google */
const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
  <button className={` ${inverted ? 'inverted': ''}  ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
      {children}
  </button>
);

export default CustomButton;

