export default class BaseError extends Error {
  constructor(name, message, rootCause, ...params) {
    super(...params)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseError)
    }
    this.name = name
    this.message = message
    this.rootCause = rootCause
  }
}
