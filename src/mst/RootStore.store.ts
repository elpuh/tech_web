import { applySnapshot, flow, toGenerator, types } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import {ProductsModel} from "./ProductModel";
import {IProductModelSnapshotIn, IRootStore} from "./interfaces";

export const RootStore = types.model('RootStore', {
    products: types.array(ProductsModel),
}).actions((self) => ( {
    fetchProducts: flow(function * () {
        try {

            const products: IProductModelSnapshotIn[] = yield * toGenerator(fetch('https://dummyjson.com/products').then((res) => res.json()).then((res) => res.products))

            applySnapshot(self.products, products)

        } catch (e) {
            console.log('>>e', e)
        }
    }),

} ))

export const store = RootStore.create({})


export const ContextRootStore = createContext<IRootStore>(store)

export const useRootStore = () => useContext(ContextRootStore)
