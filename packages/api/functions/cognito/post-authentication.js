import { getUser, createUser } from '../../controllers/user'

exports.handler = async (event) => {
  const {
    sub: userId,
    email,
    name,

  } = event.request.userAttributes
  console.info(`Successfully authenticated ${email} (${userId}), ${JSON.stringify(event.request.userAttributes)}`)
  const user = await getUser({ userId })

  if (!user.Item) {
    console.info(`User doesn't exist. Creating user with id ${userId}...`)
    await createUser({
      userId,
      email,
      name
    })
  }

  return event
}
