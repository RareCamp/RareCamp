import { ValidationError } from 'yup'
import UserInputValidationError from '../errors/UserInputValidationError'

export function validateDTO(dto, schema) {
  try {
    schema.validateSync(dto, { abortEarly: false })
  } catch (err) {
    if (err instanceof ValidationError) {
      const errors = err.inner.map(({ path, message, value }) => ({ path, message, value }))
      throw new UserInputValidationError(errors)
    }
    throw err
  }
}
