import { atom } from 'recoil'

export const productList = atom({
  key: 'productList',
  default: [{}],
})

export const selectedProductId = atom({
  key: 'selectedProductId',
  default: '',
})
