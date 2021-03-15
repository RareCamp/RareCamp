import BaseError from './BaseError'

export default class NotFoundError extends BaseError {
  constructor(message, rootCause, ...params) {
    super('NotFoundError', message, rootCause, ...params)
  }
}
