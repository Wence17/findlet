import { groq } from 'next-sanity'
// import { client } from './client'






// Get Hero Images
export const heroQuery = groq`*[_type == "heroImage"]{
  ...,
}
`

// Get Products
export const productsQuery = groq`*[_type == "product"][0...4]{
  _id,
    price,
    name,
    "imageUrl":images[0].asset->url,
    "slug":slug.current,
    "categoryName":categories[0]->name
  } | order(_createdAt asc)
`

// Get a single product by its slug
export const productQuery = groq`*[_type == "product" && slug.current == $slug][0]{ 
    ...,
    images,
    price,
    name,
    description,
    "slug":slug.current,
    "categoryName":categories[0]->name
  }
  `

// Get all product slugs
export const productPathsQuery = groq`*[_type == "product" && defined(slug.current)]{
    "params": { "slug": slug.current }
  }
`
