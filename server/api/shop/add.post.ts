export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return await usePrisma.shop.create(body)
})
