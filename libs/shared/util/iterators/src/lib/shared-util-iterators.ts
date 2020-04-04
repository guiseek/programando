export function sortBy<T = any>(column: string) {
  return (list: T[]): T[] => {
    return list.sort((a, b) => {
      return a[column] > b[column] ? -1 : 1;
    })
  }
}
