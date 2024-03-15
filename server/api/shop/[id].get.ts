export default defineEventHandler(async (event) => {
  const sellNoId = getRouterParam(event, 'id')
  return await usePrisma.shop.findFirst({
    where: {
      sellNo: sellNoId
    }
  })
})
