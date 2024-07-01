export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return await usePrisma.product.create(body)
})
