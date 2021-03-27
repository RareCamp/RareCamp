import User from '../models/User'
import { generateId } from '../utils/id'

export function createUser({
  userId = generateId(),
  name,
}) {
  if (!name) throw new Error('name is required')

  return User.put({
    userId,
    name,
  })
}

export function getUser({ userId }) {
  if (!userId) throw new Error('userId is required')

  return User.get({ userId })
}

export function getCurrentUser(req) {
  if (!req) throw new Error('req is required')

  return getUser({
    userId: req.cognitoUser.userId,
  })
}
