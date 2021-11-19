export const required = (value: string) => {
  if (value) {
    return undefined;
  }
  return 'is required';
};

export const maxLength15 = (value: string) => {
  if (value.length > 15) {
    return 'Max length is 15 symbols';
  }
  return undefined;
};

export const emailCorrect = (value: string) => {
  const regularExpression: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

  if (regularExpression.test(String(value).toLowerCase())) {
    return undefined;
  } else {
    return 'is not correct @';
  }
};
