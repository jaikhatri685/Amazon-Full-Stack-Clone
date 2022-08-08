import React from "react";
import "./Checkout.css";
import banner from "../images/bannerr.jpg";
import banner2 from "../images/bannerr2.jpg";
import banner3 from "../images/bannerr3.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { TransitionGroup } from "react-transition-group";
import { useStateValue } from "../StateProvider";
import Carousel from "react-bootstrap/Carousel";

export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const display = basket.map((item) => {
    return <BasketItem item={item} />;
  });

  return (

    <div className="lg:flex lg:flex-row lg:justify-between p-3 sm:flex sm:flex-col sm:justify-between sm:items-center lg:items-start">
      <div className="lg:w-4/5 sm:4/5">
        <Carousel fade>
          <Carousel.Item>
            <div className="checkout-banner">
              <img src={banner} className="checkout-banner-img"></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="checkout-banner">
              <img src={banner2} className="checkout-banner-img"></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="checkout-banner">
              <img src={banner3} className="checkout-banner-img"></img>
            </div>
          </Carousel.Item>
        </Carousel>

        <h1 className="font-bold inter text-3xl border-b-2 pb-2 border-gray-400 border-solid">Your Shopping Basket</h1>
        <div className="pb-5 pt-2 pl-2"><TransitionGroup>{display}</TransitionGroup></div>
      </div>
      <div className="p-3 lg:w-1/5 sm:w-3/4 rounded-md ml-3 border-2 border-gray-400 border-solid">

        <Subtotal />
      </div>
    </div>
  );
}
