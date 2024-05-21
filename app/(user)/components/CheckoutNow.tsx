"use client";
import { Button } from "@/components/ui/button";
import { ProductCart } from "@/typings";
import { useState } from "react";
import CheckoutEmail from "./CheckoutEmail";
import { useShoppingCart } from "use-shopping-cart";
import { urlForImage } from "@/sanity/lib/image";

const CheckoutNow = ({
  currency,
  // description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const [clicked, setClicked] = useState(false);
  const { addItem, handleCartClick } = useShoppingCart();


  const product = {
    name: name,
    // description: description,
    price: price,
    currency: currency,
    image: urlForImage(image),
    price_id: price_id,
  };

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
      <Button variant={"secondary"} onClick={() => {
        // setClicked(!clicked)
        handleCartClick();
        addItem(product) 
        }}>
        Checkout Now
      </Button>

    </div>
  );
};

export default CheckoutNow;
