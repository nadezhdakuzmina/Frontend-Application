import request from '../../utils/request';

export const auth = async ({
  username,
  email,
  password,
}) => {
  return request(`users/auth`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
    })
  })
    .catch(() => null)
    .then((data) => {
      if (data.error || !data.token) {
        throw data.error;
      }

      window.localStorage.setItem('user_token', data.token);

      return data.token;
    });
};
