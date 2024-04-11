import { Image } from "sanity";

interface Heroes {
    image1:Image
    image2:image
    alt:string
}

export type Base = {
    _id: string
    _rev: string
    _createdAt: string
    _updatedAt: string
    _type: 'post'
  }
  
  interface SimplifiedProduct extends Base {
    imageUrl: string
    price:number
    slug:string
    name:string
    categoryName: string
  }
  
  interface Products extends Base {
    images:Image
    price:number
    price_id:string
    slug:string
    name:string
    // description:string
    description:Block[]
    categoryName:string
  }

  interface IAppsProps{
    images:any
  }

  interface ProductCart{
    name:string
    // description:Block[]
    price:number
    currency:string
    image:any
    price_id:string
  }

  
interface Block {
  _key: string
  _type: 'block'
  children: span[]
  markDefs: any[]
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}