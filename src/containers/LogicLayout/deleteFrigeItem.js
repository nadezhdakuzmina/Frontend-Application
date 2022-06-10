import request from '../../utils/request';

export const deleteFrigeItem = async (token, id) => {
  return request(`frige/delete`, {
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
