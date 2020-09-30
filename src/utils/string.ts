export const isFirstLetterUpperCase = (text: string) =>
  text[0] === text[0]?.toUpperCase();

export const neutralizeString = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .split('')
    .map(sign => (sign === ' ' ? '' : sign))
    .join('');
