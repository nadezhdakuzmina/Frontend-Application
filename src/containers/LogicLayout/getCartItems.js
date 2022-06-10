import request from '../../utils/request';

export const getCartItems = async (token) => {
  return request(`cart/?token=${token}`, {
    method: 'GET',
  })
    .then((data) => {
      if (data.error || !data.items) {
        throw data.error;
      }

      return data.items;
    });
};
