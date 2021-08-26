export const queryToObject = (query?: string): any => query ? query
  .replace('?', '')
  .split('&')
  .reduce((acc,item) => {
    const [key, value] = item.split('=');
    return { ...acc, [key]: value };
  }, {}) : {};

export const queryToString = (query: any): string => Object.entries(query)
  .reduce((acc, [key, value], index) => acc + `${index ? '&' : '?'}${key}=${value}`, '');
