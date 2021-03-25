import BaseError from './BaseError'

export default class UnAuthenticatedError extends BaseError {
  constructor(errors, rootCause, ...params) {
    super('UnAuthorizedError', 'Not Authenticated', rootCause, ...params)
    this.errors = errors
  }
}
