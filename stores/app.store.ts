import { defineStore } from 'pinia'

function storeSetup() {
  const isCollapse = ref(false)
  const isLogin = ref(false)
  const getToken = ref()

  const setCollapse = (flag: boolean) => (isCollapse.value = flag)

  return {
    isCollapse,
    isLogin,
    getToken,
    setCollapse
  }
}

export const useAppStore = defineStore('app', storeSetup, { persist: { storage: sessionStorage } })
