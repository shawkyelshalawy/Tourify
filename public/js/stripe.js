/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';
import { Stripe } from "stripe";
export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51M1YR6Kd3PsNE7G3ZiNs8U452AXRPhDrWXhP6tJWW7W9W0jkUDrrnHEv1Jl7RLNeofWwSsAzMFt0tdJFBJmK9tTc00JFkgFXw5');
  try {
    // 1) Get checkout session from API
    const session = await axios(`localhost:3000/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
