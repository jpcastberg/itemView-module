import { resolve } from 'dns';

export default async (id) => {
  return fetch(`http://localhost:3002/${id}`).then(item => item.json(),
    error => console.error(error)).then((item) => {
    resolve(item);
  });
};
