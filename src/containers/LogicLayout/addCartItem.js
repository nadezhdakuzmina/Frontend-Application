import request from '../../utils/request';

export const addCartItem = async (token, name) => {
  return request(`cart/add`, {
    method: 'POST',
    body: JSON.stringify({
      token,
      name,
    }),
  })
    .then((data) => {
      if (data.error) {
        throw data.error;
      }

      return {
        id: data.id,
        name,
        isChecked: false,
      };
    });
};
