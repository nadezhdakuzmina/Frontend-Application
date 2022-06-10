import request from '../../utils/request';

export const deleteCartItem = async (token, id) => {
  return request(`cart/delete`, {
    method: 'POST',
    body: JSON.stringify({
      token,
      id,
    }),
  })
    .then((data) => {
      if (data.error) {
        throw data.error;
      }

      return true;
    });
};
