import { nanoid } from 'nanoid'

export const ID_SIZE = 10

export function generateId() {
  return nanoid(ID_SIZE)
}
