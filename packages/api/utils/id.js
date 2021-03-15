import { nanoid } from 'nanoid'
import { ID_SIZE } from '../common/constant'

export function generateId() {
  return nanoid(ID_SIZE)
}
