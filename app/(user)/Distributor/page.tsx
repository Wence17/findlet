"use client"
import { client } from '@/sanity/lib/client'
import { allProductsQuery} from '@/sanity/lib/query'
import { SimplifiedProduct } from '@/typings'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import FacebookPixel from 'react-facebook-pixel';

const AllProducts = () => {
    const [products, setProducts] = useState<SimplifiedProduct[]>([])

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const product = await client.fetch(allProductsQuery)
        setProducts(product)
      } catch (error) {
        console.log("encountered error while trying to fetch AllProducts",error)
      }
    }

        //   FacebookPixel.pageView();
          
    handleFetch()
  }, [])

  return (
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 md:px-6 lg:max-w-7xl lg:px-8'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
                    Want To Be A Distributor?
                </h2>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-2xl font-semibold tracking-tight text-gray-600 pt-16'>
                    Get a discount for every order above 30 pieces
                </p>
            </div>

            <div className='mt-6 grid md:grid-cols-3 gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {products.map((product) =>(
                    <div key={product._id} className='group relative'>
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
                                    <Link href={`/product/${product.slug}`}>
                                        {product.name}
                                    </Link>
                                </h3>
                                <p className='mt-1 text-sm text-gray-500'>
                                    {product.categoryName}
                                </p>
                            </div>
                            <p className='text-sm font-medium text-gray-900'>
                            ₦{product.price - 5001}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllProducts