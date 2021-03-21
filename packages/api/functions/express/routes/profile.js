import express from 'express'
import wrapAsync from '../wrap-async'
import { getUser } from '../../../controllers/user'

const profileRouter = express.Router()
profileRouter.get('/', wrapAsync(async (req, res) => {
  const { id } = req.cognitoUser
  const { Item } = await getUser({ id })
  res.json({ profile: Item })
}))

export default profileRouter
