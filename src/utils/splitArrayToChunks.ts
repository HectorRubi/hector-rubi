export const splitArrayToChunks: <Type>(
  array: Type[],
  limit: number
) => Type[][] = function <Type>(array: Type[], limit: number) {
  let offset = 0
  let result: Type[][] = []

  while (offset + (array.length % limit) <= array.length) {
    const isArrayDataInsideResult =
      result.length && result[0].length === array.length
    if (isArrayDataInsideResult) break

    const nextEnd = offset + limit
    const isUpperThanArraySize = nextEnd >= array.length
    const end = isUpperThanArraySize ? array.length : nextEnd

    result.push(array.slice(offset, end))
    offset += limit
  }

  return result
}
