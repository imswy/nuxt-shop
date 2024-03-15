import { usePrisma } from '~/server/utils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineEventHandler(async (event) => {
  return await usePrisma.classify.findMany()
})
