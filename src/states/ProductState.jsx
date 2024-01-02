import { atom } from 'recoil'

export const selectedProductId = atom({
  key: 'selectedProductId',
  default: '',
})

export const addedProductList = atom({
  key: 'addedProductList',
  default: [],
})
