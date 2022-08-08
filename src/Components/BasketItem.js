import React from "react";
import { useStateValue } from "../StateProvider";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BasketItem.css";
import ReactStarRating from "react-star-ratings-component";
import CurrencyFormat from "react-currency-format";
import Collapse from "@mui/material/Collapse";

export default function BasketItem({ item }) {
  const [state, setState] = React.useState(true);
  const [{ basket }, dispatch] = useStateValue();

  function RemoveFromBasket(id) {
    console.log(basket);
    setState(false);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: id,
    });
  }

  return (
    <>
      <Collapse in={state}>
        <div className="flex flex-row justify-start items-center p-3 hover:scale-y-105 z-10  rounded-3xl mb-4"
      style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
          <div className="flex justify-center items-center w-1/5">
            <img src={item.image} className="h-48 mr-5 object-contain" />
          </div>
          <div className="flex flex-col  w-4/5">
            <div>
            <h3 className="inter text-lg font-normal">{item.title}</h3>

            <CurrencyFormat
              decimalScale={2}
              value={item.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
              renderText={(value) => (
                <h3 className="inter text-lg font-bold">{value}</h3>
              )}
            />

            <ReactStarRating
              numberOfStar={5}
              numberOfSelectedStar={parseInt(item.rating)}
              colorFilledStar="orange "
              colorEmptyStar="black"
              starSize="20px"
              spaceBetweenStar="10px"
              disableOnSelect={true}
              onSelectStar={(val) => {
                console.log(val);
              }}
            />
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="w-3/5">
            <Button
              variant="warning"
              
              onClick={() => RemoveFromBasket(item.id)}
            >
              Remove from Basket
            </Button>
            </div>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}
