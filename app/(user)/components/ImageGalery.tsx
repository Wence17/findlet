"use client"
import { urlForImage } from '@/sanity/lib/image'
import { IAppsProps } from '@/typings'
import Image from 'next/image'
import React, { useState } from 'react'
// import FacebookPixel from 'react-facebook-pixel';

const ImageGalery = ({images}:IAppsProps) => {

    const[bigImage, setBigImage] = useState(images[0])

    const handleSmallImageClick = (image:IAppsProps) =>{
        setBigImage(image)
        // FacebookPixel.track('ButtonClicked', { buttonType: 'Checked out the product images' });
    }
    
  return (
    <div className='grid gap-4 lg:grid-cols-5'>
        <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
            {images.map((image:any, i:any) => (
                    <div key={i} className='oveerflow-hidden rounded-lg bg-gray-100'>
                        <Image 
                        src={urlForImage(image)}
                        alt={image.alt?image.alt:''}
                        width={200}
                        height={200}
                        className='h-full w-full object-cover object-center cursor-pointer'
                        onClick={() => handleSmallImageClick(image)}
                        />
                    </div>
                ))
            }
        </div>

        <div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
            <Image 
            src={urlForImage(bigImage)}
            alt='photo'
            width={500}
            height={500}
            className='h-full w-full object-cover object-center'
            />

            <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-small uppercase tracking-wider text-white'>
                sale
            </span>
        </div>
    </div>
  )
}

export default ImageGalery