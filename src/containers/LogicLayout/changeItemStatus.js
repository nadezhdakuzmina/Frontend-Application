import request from '../../utils/request';

export const changeItemStatus = async (token, id, status) => {
  return request(`cart/check`, {
    method: 'POST',
    body: JSON.stringify({
      token,
      id,
      status
    }),
  })
    .then((data) => {
      if (data.error) {
        throw data.error;
      }

      return status;
    });
};
