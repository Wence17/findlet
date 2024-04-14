"use client";
import { Button } from "@/components/ui/button";
import { ProductCart } from "@/typings";
import { useState } from "react";
import CheckoutEmail from "./CheckoutEmail";

const CheckoutNow = ({
  currency,
  // description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const [clicked, setClicked] = useState(false);

  // console.log("hecking out now",product.price_id)
  return (
    <div className="relative">
      {clicked && (
        <CheckoutEmail
          currency="NGN"
          // description={product.description}
          image={image}
          name={name}
          price={price}
          price_id={price_id}
        />
      )}
      <Button variant={"secondary"} onClick={() => setClicked(!clicked)}>
        Checkout Now
      </Button>

    </div>
  );
};

export default CheckoutNow;
