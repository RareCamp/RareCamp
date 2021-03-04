import User from '../models/User'
import { generateId } from '../utils/id'

export function createUser({
  id = generateId(),
  name,
}) {
  return User.put({
    id,
    name,
  })
}

export function getUser({ id }) {
  return User.get({ id })
}
export function getCurrentUser(req) {
  return getUser({
    id: req.cognitoUser.id,
  })
}
