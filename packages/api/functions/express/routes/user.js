import express from 'express'
import wrapAsync from '../wrap-async'
import { scanUsers, getUser } from '../../../controllers/user'

const userRouter = express.Router()
userRouter.get('/', wrapAsync(async (req, res) => {
  const users = await scanUsers()
  res.json({ users })
}))

userRouter.get('/:userId', wrapAsync(async (req, res) => {
  const { userId } = req.params
  const users = await getUser({ id: userId })
  res.json({ users })
}))

export default userRouter
