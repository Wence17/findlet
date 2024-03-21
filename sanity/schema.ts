import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import product from './schemaTypes/product'
import category from './schemaTypes/category'
import heroImages from './schemaTypes/heroImages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,heroImages, blockContent],
}
