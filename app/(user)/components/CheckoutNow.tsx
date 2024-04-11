"use client";
import { Button } from "@/components/ui/button";
import { urlForImage } from "@/sanity/lib/image";
import { ProductCart } from "@/typings";
import { useShoppingCart } from "use-shopping-cart";
import FacebookPixel from "react-facebook-pixel";

const CheckoutNow = ({
  currency,
  // description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceID: string) {
    checkoutSingleItem(priceID);
  }

  const product = {
    name: name,
    // description: description,
    price: price,
    currency: currency,
    image: urlForImage(image),
    id: price_id,
  };
  return (
    <Button
      variant={"secondary"}
      onClick={() => {
        buyNow(product.id);
        // FacebookPixel.track("ButtonClicked", { buttonType: "CheckOutNow" });
      }}
    >
      Checkout Now
    </Button>
  );
};

export default CheckoutNow;
