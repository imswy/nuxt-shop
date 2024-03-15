export default defineEventHandler(async (event) => {
  const body = getQuery(event)
  const { pageNumber, pageSize } = body as any

  return await usePrisma.shop.findMany({
    skip: (pageNumber - 1) * pageSize,
    take: Number(pageSize)
  })
})
