import { atom } from 'recoil'

export const productIds = atom({
  key: 'productIds',
  default: [],
})

export const selectedProductId = atom({
  key: 'selectedProductId',
  default: '',
})
