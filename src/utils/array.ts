export const sortFunBuilder = (fieldName: string, isAscending = true) => {
  const mult = isAscending ? 1 : -1;

  return (first: any, second: any) =>
    first[fieldName] > second[fieldName] ? mult : mult * -1;
};
