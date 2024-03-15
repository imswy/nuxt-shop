import { usePrisma } from '..'

/**
 * @description 添加分类
 * @param data 分类信息
 * @returns 分类信息
 */
export const addClassify = async (data: any) => {
  return await usePrisma.classify.create({ data })
}

/**
 * @description 获取分类
 * @param data 分类信息
 * @returns 分类信息
 */
export const getClassifyList = async () => {
  return await usePrisma.classify.findMany()
}
