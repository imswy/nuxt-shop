export default defineEventHandler(async (event) => {
  const classifyId = getRouterParam(event, 'id')
  return await usePrisma.classify.findUnique({
    where: {
      id: Number(classifyId)
    }
  })
})
