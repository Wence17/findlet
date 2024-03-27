import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const OnDelivery = () => {
  return (
    <div>
        <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
            page
        </div>
        
        <div className="mt-6 flex justify-center">
              <Button className="w-fit rounded-full font-semibold text-lg px-8 py-4">
                <Link href={"https://forms.gle/RpWLtNdLqKg3ASqJ7"} target='_blank'>
                Proceed</Link>
              </Button>
            </div>
    </div>
  )
}

export default OnDelivery