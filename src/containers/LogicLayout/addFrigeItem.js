import request from '../../utils/request';

export const addFrigeItem = async (token, name, expires, foodType) => {
  return request(`frige/add`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      expires,
      token,
      foodType,
    }),
  })
    .then((data) => {
      if (data.error) {
        throw data.error;
      }

      return {
        id: data.id,
        name,
        expires,
        foodType,
      };
    });
};
