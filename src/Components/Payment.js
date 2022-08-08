import React from "react";
import "./Payment.css";
import PaymentForm from "./PaymentForm"
import { useStateValue } from "../StateProvider";
import BasketItem from "./BasketItem";
import { Link } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

export default function Payment() {
  function totalAmount() {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
      sum = sum + parseFloat(basket[i].price);
    }

    return sum.toFixed(2);
  }




  const [{ basket, userEmail }, dispatch] = useStateValue();

  const display = basket.map((item) => {
    return <BasketItem item={item} />;
  });

  return (
    <div class="payment-container">
      <header className="payment-header">
        <h2>
          Checkout (
          <Link className="no-of-items" to="./checkout">
            {basket.length} items
          </Link>
          ){" "}
        </h2>
      </header>
      <div className="payment-delivery-detail">
        <h5>Delivery Address</h5>
        <div className="payment-address-detail">
          <p>{userEmail}</p>
          <p>123Lane</p>
          <p>LosAngeles, California</p>
        </div>
      </div>
      <div className="payment-review-items">
        <h5>Review items and delivery</h5>
        <div className="payment-pdts">
          <TransitionGroup>{display}</TransitionGroup>
        </div>
      </div>
      <div className="payment-method">
        <h5>Payment Method</h5>
        <div>
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}
