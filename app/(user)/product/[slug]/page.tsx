import { cachedClient, client } from "@/sanity/lib/client"
import { productPathsQuery, productQuery } from "@/sanity/lib/query"
import { Products } from "@/typings"

export async function generateStaticParams() {
    const products = await cachedClient(productPathsQuery)
    // console.log(products)
  
    return products
  }
  
  export const revalidate = 60
  
  export default async function Page({ params }: { params: any }) {
    const product: Products = await client.fetch(productQuery, params)

  console.log("this is the clicked product",product)
    return (
        <div className="">
            smile for the camera
        </div>
    )
  }
  