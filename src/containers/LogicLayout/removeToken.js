export const removeToken = () => {
  window.localStorage.setItem('user_token', null);
};
