export default defineEventHandler(async () => {
  return await usePrisma.product.findMany()
})
