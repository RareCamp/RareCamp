export function sortByCreated(a, b) {
  const keyA = new Date(a.created)
  const keyB = new Date(b.created)
  // Compare the 2 dates
  if (keyA < keyB) return -1
  if (keyA > keyB) return 1
  return 0
}
