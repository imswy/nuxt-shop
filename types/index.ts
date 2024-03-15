export interface Result<T> {
  data: T
  code: number
  msg: string
}

export interface Classify {
  id: number
  name: string
  state: number
  icon: string
  sort: number
}

export interface Shop {
  id: number
  sellNo: string
  categoryId: number
  name: string
  icon: string
  sort: number
  price: number
  remark: string
  shipmentType: number
}
