export const AS_REQUIRED = { required: 'Required' };
export const AS_EMAIL = {
  pattern: {
    value: /^\S+@\S+$/i,
    message: 'Entered value does not match email format',
  },
};
export const AS_PASSWORD = {
  ...AS_REQUIRED,
  minLength: {
    value: 5,
    message: 'Min length is 5',
  },
};

export const AS_NAME = {
  ...AS_REQUIRED,
  minLength: {
    value: 3,
    message: 'Min length is 3',
  },
};
