import { cachedClient, client } from "@/sanity/lib/client";
import { productPathsQuery, productQuery } from "@/sanity/lib/query";
import { Products } from "@/typings";
import ImageGalery from "../../components/ImageGalery";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import AddToBag from "../../components/AddToBag";
import CheckoutNow from "../../components/CheckoutNow";
import { myPortableTextComponents } from "../../components/myPortableTextComponent";
import { PortableText } from "@portabletext/react";


export async function generateStaticParams() {
  const products = await cachedClient(productPathsQuery);
  // console.log(products)

  return products;
}

export const revalidate = 60;

export default async function Page({ params }: { params: { slug: string } }) {
  const product: Products = await client.fetch(productQuery, params);
 


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGalery images={product.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {product.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {product.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ₦{product.price-1}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ₦{product.price + 5000 - 1}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Vat plus free shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm"> 2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="NGN"
                description={product.description}
                image={product.images[0]}
                name={product.name}
                price={product.price}
                key={product._id}
                price_id={product.price_id}
              />
              {/* <Button variant={"secondary"}>Checkout now</Button> */}
              <CheckoutNow
                currency="NGN"
                description={product.description}
                image={product.images[0]}
                name={product.name}
                price={product.price}
                price_id={product.price_id}
              />
            </div>

            {/* <div className="md:hidden mt-12 text-base text-gray-500 tracking-wide text-justify">
            <PortableText 
              value={product.description}
              components={myPortableTextComponents}
            />
            </div> */}

            <p className="flex mt-12 text-base text-gray-500 tracking-wide text-justify">
              {product.description}
            </p>
          </div>
        </div>
        {/* iframe for video*/}
        <div>Hello video</div>
      </div>
    </div>
  );
}
