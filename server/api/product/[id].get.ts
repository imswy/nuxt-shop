export default defineEventHandler(async (event) => {
  const sellNoId = getRouterParam(event, 'id')
  return await usePrisma.product.findFirst({
    where: {
      sellNo: sellNoId
    }
  })
})
