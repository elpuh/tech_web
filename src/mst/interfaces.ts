import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'
import {RootStore} from "./RootStore.store";
import {ProductsModel} from "./ProductModel";


export interface IRootStore extends Instance<typeof RootStore> {}
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof RootStore> {}
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof RootStore> {}


export interface IProductModel extends Instance<typeof ProductsModel> {}
export interface IProductModelSnapshotIn extends SnapshotIn<typeof ProductsModel> {}
export interface IProductModelSnapshotOut extends SnapshotOut<typeof ProductsModel> {}
