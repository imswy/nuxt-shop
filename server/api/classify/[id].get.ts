export default defineEventHandler(async (event) => {
  const classifyId = getRouterParam(event, 'id')
  const classifyData = await usePrisma.classify.findUnique({
    where: {
      id: Number(classifyId)
    }
  })
  return classifyData
})
