/**
 *A function that capitalizes a the first word in a string
 * @param {string} str -
 * @returns {string}
 */
export const capitalizeFormatter = (str: string) => {
  if (!str) return;

  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
};
