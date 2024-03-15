export async function getClassify(params: number) {
  return await useHttp.get(`/api/classify/${params}`)
}
