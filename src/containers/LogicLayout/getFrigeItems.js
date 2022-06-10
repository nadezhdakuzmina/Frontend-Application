import request from '../../utils/request';

export const getFrigeItems = async (token) => {
  return request(`frige/?token=${token}`, {
    method: 'GET',
  })
    .then((data) => {
      if (data.error || !data.items) {
        throw data.error;
      }

      return data.items;
    });
};
