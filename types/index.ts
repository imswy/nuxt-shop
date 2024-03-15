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
