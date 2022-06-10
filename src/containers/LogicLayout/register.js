import request from '../../utils/request';

export const register = async ({
  username,
  email,
  password,
}) => {
  return request(`users/create`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
    })
  })
    .catch(() => null)
    .then((data) => {
      if (data.error) {
        throw data.error;
      }

      return true;
    });
};
