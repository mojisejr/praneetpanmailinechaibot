export const isArray = (value: any) => {
  if (!value.hasOwnProperty("length")) {
    return false;
  }
  return true;
};
