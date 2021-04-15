import { getUser, createUser } from '../../controllers/user'
import { createWorkspace } from '../../controllers/workspace'

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
    await createWorkspace({
      userId,
      workspace: {
        name: 'Default Workspace',
        description: 'Default user workspace',
      },
  })
  }

  return event
}
