import BaseError from './BaseError'

export default class UserInputValidationError extends BaseError {
  constructor(errors, rootCause, ...params) {
    super('UserInputValidationError', 'invalid data', rootCause, ...params)
    this.errors = errors
  }
}
