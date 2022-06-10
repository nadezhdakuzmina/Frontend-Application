import request from '../../utils/request';

export const chechAuth = async () => {
  const token = window.localStorage.getItem('user_token');
  
  if (!token) {
    return false;
  }

  return request(`users/checkAuth`, {
    method: 'POST',
    body: JSON.stringify({ token })
  })
    .then((data) => {
      if (data.error) {
        return false;
      }

      return token;
    })
    .catch(() => false);
};
