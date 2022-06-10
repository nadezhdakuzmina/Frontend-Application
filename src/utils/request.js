import { BASE_URL } from './constants';

const request = async (uri, params = null) => {
  return fetch(`${BASE_URL}/${uri}`, {
    headers: {
      ...params?.headers,
      'Content-Type': 'application/json',
    },
    ...params,
  }).then(res => res.json());
}

export default request;
