import { types } from 'mobx-state-tree'

export const ProductsModel = types.model('ProductsModel', {
    id: types.identifierNumber,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',

    images: types.array(types.string),
})