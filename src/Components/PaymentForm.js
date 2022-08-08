import React from "react";
import { PaymentElement} from '@stripe/react-stripe-js';
import { useStateValue } from "../StateProvider";
import {
    Elements,
    CardElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    
    const [{ basket, userEmail }, dispatch] = useStateValue();

    function totalAmount() {
        let sum = 0;
        for (let i = 0; i < basket.length; i++) {
          sum = sum + parseFloat(basket[i].price);
        }
    
        return sum.toFixed(2);
      }

    const handleSubmit = (stripe, elements) => async () => {
    
    
      const cardElement = elements.getElement(CardElement);
  
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });
  
      if (error) {
        console.log("[error]", error);
      } else {
        console.log("[PaymentMethod]", paymentMethod);
        // ... POST: /api/charge/user
      }
    };

    return (
      <>
        <CardElement />
        <CurrencyFormat
          decimalScale={2}
          value={totalAmount()}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          renderText={(value) => (
            <div>
              <p>
                <b>{value}</b>{" "}
              </p>
            </div>
          )}
        />

        <button onClick={handleSubmit}>Buy</button>
      </>
    );
  };

export default PaymentForm