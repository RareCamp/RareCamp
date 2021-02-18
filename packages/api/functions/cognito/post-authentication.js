import { getUser, createUser } from '../../controllers/user'

exports.handler = async (event) => {
  const {
    sub: userId,
    email,
  } = event.request.userAttributes
  console.info(`Successfully authenticated ${email} (${userId})`)
  const user = await getUser({ id: userId })

  if (!user) {
    console.info(`User doesn't exist. Creating user with id ${userId}...`)
    await createUser({
      id: userId,
    })
  }

  return event
}
