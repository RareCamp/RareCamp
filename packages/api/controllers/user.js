import shortId from 'shortid'
import User from '../models/User'

export function createUser({
  id = shortId.generate(),
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

export function scanUsers() {
  return User.scan()
}
