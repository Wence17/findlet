import { cachedClient, client } from '@/sanity/lib/client'
import { categoryPathsQuery, categoryQuery } from '@/sanity/lib/query'
import { SimplifiedProduct } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import FacebookPixel from 'react-facebook-pixel';

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'




// export async function generateStaticParams() {
//     const products = await cachedClient(categoryPathsQuery)
//     // const encodedCategory = encodeURIComponent(products?.params?.category);
//     // console.log(encodedCategory)
//     return products;
//   }

export async function generateStaticParams(): Promise<{ params: { category: string } }[]> {
    const products = await cachedClient(categoryPathsQuery);
    const encodedCategories: { params: { category: string } }[] = [];

    if (Array.isArray(products)) {
        for (const product of products) {
            const encodedCategory = encodeURIComponent(product?.params?.category);
            encodedCategories.push({ params: { category: encodedCategory } });
        }
    } else if (products) {
        const encodedCategory = encodeURIComponent(products?.params?.category);
        encodedCategories.push({ params: { category: encodedCategory } });
    }
        // console.log(encodedCategories)

    return encodedCategories;
}



  export const revalidate = 60


const page = async ({ params }: { params: {category:string} }) => {

    // console.log(params.category)
    // FacebookPixel.pageView();
    const decodedCategory = decodeURIComponent(params.category);
    const category: SimplifiedProduct[] = await client.fetch(categoryQuery, { category: decodedCategory });
    // const category: SimplifiedProduct[] = await client.fetch(categoryQuery, params)
    // console.log(decodedCategory)


  return (
    <div className='bg-white my-5'>
    <div className='mx-auto max-w-2xl md:px-4 px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
                Our Products for {decodedCategory}
                {/* Our Products for {category.map(product => product.categoryName)} */}
            </h2>
        </div>
        
        <div className='mt-6 grid md:grid-cols-3 gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {category.map((product) =>(
                <div key={product._id} className='group relative'>
                                <Link href={`/product/${product.slug}`}>
                    <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                        <Image 
                        src={product.imageUrl}
                        alt='product image'
                        className='w-full h-full object-cover object-center lg:h-full lg:w-full'
                        width={300}
                        height={300}
                        />
                    </div>

                    <div className='mt-4 flex justify-between'>
                        <div>
                            <h3 className='text-sm text-gray-700'>
                                    {product.name}
                            </h3>
                            <p className='mt-1 text-sm text-gray-500'>
                                {product.categoryName}
                            </p>
                        </div>
                        <p className='text-sm font-medium text-gray-900'>
                        ₦{product.price}
                        </p>
                    </div>
                                </Link>
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default page