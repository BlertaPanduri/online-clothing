import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
/** Butoni per me kry pagesen */
const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HeyW9FW3RW1C9wQyueg34HiQR0J5z6NzFilEfXgOY9ZfMoom0gqVrGEBEGet2jICs2Mky1SWvULImlwd6PMKvAS00yTEjUUdR';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    
    return(
        <StripeCheckout 
         label='Pay Now'
         name ='CRWN Clothing'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description ={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}

        />
         )
}
export default StripeCheckoutButton;