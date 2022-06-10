import { createContext } from "react";

export const Context = createContext({
  token: null,
  isAuthorized: false,
  cartItems: null,
  frigeItems: null,
  handleAuth: null,
  handleRegister: null,
  handleLogout: null,
  handleGetCartItems: null,
  handleDeleteCartItem: null,
  handleAddCartItem: null,
  handleAddFrigeItem: null,
  handleChangeItemStatus: null,
});
