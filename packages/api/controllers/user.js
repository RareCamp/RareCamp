import User from '../models/User'
import { generateId } from '../utils/id'

export function createUser({
  id = generateId(),
  name,
}) {
  if (!name) throw new Error('name is required')

  return User.put({
    id,
    name,
  })
}

export function getUser({ id }) {
  if (!id) throw new Error('id is required')

  return User.get({ id })
}

export function getCurrentUser(req) {
  if (!req) throw new Error('req is required')

  return getUser({
    id: req.cognitoUser.id,
  })
}
