"use client";
import { Button } from "@/components/ui/button";
import { urlForImage } from "@/sanity/lib/image";
import { ProductCart } from "@/typings";
import { useShoppingCart } from "use-shopping-cart";

const AddToBag = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlForImage(image),
    id: price_id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product) 
        // handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
};

export default AddToBag;
