export const generateId = (data) => data.reduce((acc, { id }) => {
  return id > acc ? id : acc
}, 0) + 1;

