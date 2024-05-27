"use client";
import { Button } from "@/components/ui/button";
import { urlForImage } from "@/sanity/lib/image";
import { ProductCart } from "@/typings";
import { useShoppingCart } from "use-shopping-cart";
import { showToast } from '../../../utils/toast';

const AddToBag = ({
  currency,
  // description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    // description: description,
    price: price,
    currency: currency,
    image: urlForImage(image),
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product) 
        showToast("Product Added To Cart!")
        // FacebookPixel.track('ButtonClicked', { buttonType: 'Add To Cart' });
        // handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
};

export default AddToBag;
