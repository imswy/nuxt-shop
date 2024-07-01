import type { FetchResponse, SearchParameters } from 'ofetch'
// import { useUserStore } from '~/stores/user.store'
import type { Result } from '~/types'

function handleError<T>(response: FetchResponse<Result<T>> & FetchResponse<ResponseType>) {
  const err = (text: string) => {
    // ElMessage.error({
    //   message: response?._data?.msg ?? text
    // })
    console.error(response?._data?.msg ?? text)
  }
  if (!response._data) {
    err('请求超时，服务器无响应！')
    return
  }
  if (response._data.code === 400) {
    // token过期
    // const userStore = useUserStore()

    err('登录状态已过期，需要重新登录')
    navigateTo('/login')
    return
  }

  const handleMap: { [key: number]: () => void } = {
    401: () => err('还未授权，不能访问'),
    500: () => err('服务器异常，请稍后再试'),
    403: () => err('没有权限，禁止访问')
  }
  handleMap[response.status] ? handleMap[response.status]() : err('未知错误！')
}
// get方法传递数组形式参数
function paramsSerializer(params?: SearchParameters) {
  if (!params) return

  const query = useCloneDeep(params)
  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === 'object' && Array.isArray(val) && val !== null) {
      query[`${key}[]`] = toRaw(val).map((v: any) => JSON.stringify(v))
      delete query[key]
    }
  })
  return query
}

const fetch = $fetch.create({
  // 请求拦截器
  onRequest({ options }) {
    // get方法传递数组形式参数
    options.params = paramsSerializer(options.params)
    // 添加baseURL,nuxt3环境变量要从useRuntimeConfig里面取
    // const {
    //   public: { apiBase }
    // } = useRuntimeConfig()
    // options.baseURL = apiBase
    // 添加请求头,没登录不携带token
    const userStore = useAppStore()
    if (!userStore.isLogin) return
    options.headers = new Headers(options.headers)
    options.headers.set('Authorization', `Bearer ${userStore.getToken}`)
  },
  // 响应拦截
  onResponse({ response }) {
    if (response.headers.get('content-disposition') && response.status === 200) {
      return response._data.data
    }

    // 在这里判断错误
    if (response._data.code !== 200) {
      handleError(response)
      return Promise.reject(response._data)
    }
    console.log(response._data.data)
    return response._data.data
  },
  // 错误处理
  onResponseError({ response }) {
    handleError(response)
    return Promise.reject(response?._data ?? null)
  }
})

// 自动导出
export const useHttp = {
  get: <T>(url: string, params?: any) => {
    return fetch<T>(url, { method: 'get', params })
  },

  post: <T>(url: string, body?: any) => {
    return fetch<T>(url, { method: 'post', body })
  },

  put: <T>(url: string, body?: any) => {
    return fetch<T>(url, { method: 'put', body })
  },

  delete: <T>(url: string, body?: any) => {
    return fetch<T>(url, { method: 'delete', body })
  }
}
