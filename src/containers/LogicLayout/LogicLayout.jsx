import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { Context } from './context';
import { chechAuth } from './checkAuth';
import { auth } from './auth';
import { register } from './register';
import { removeToken } from './removeToken';
import { getCartItems } from './getCartItems';
import { getFrigeItems } from './getFrigeItems';
import { deleteCartItem } from './deleteCartItem';
import { deleteFrigeItem } from './deleteFrigeItem';
import { addCartItem } from './addCartItem';
import { changeItemStatus } from './changeItemStatus';
import { addFrigeItem } from './addFrigeItem';

const LogicLayout = ({
  children
}) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [cartItems, setCartItems] = useState(null);
  const [frigeItems, setFrigeItems] = useState(null);

  useEffect(() => {
    chechAuth().then((token) => {
      if (token) {
        setToken(token);
      }
    })
  }, []);

  const handleAuth = async ({
    username,
    email,
    password,
  }) => {
    return auth({
      username,
      email,
      password,
    }).then((token) => {
      if (token) {
        setToken(token);
        navigate('/');
      }

      return false;
    });
  };

  const handleRegister = async ({
    username,
    email,
    password,
  }) => {
    return register({
      username,
      email,
      password,
    });
  };

  const handleLogout = () => {
    removeToken();
    setToken(null);
    navigate('/');
  };

  const handleGetCartItems = () => {
    getCartItems(token)
      .then((items) => setCartItems(items))
      .catch(() => null);
  };

  const handleGetFrigeItems = () => {
    getFrigeItems(token)
      .then((items) => setFrigeItems(items))
      .catch(() => null);
  };

  const handleDeleteCartItem = (id) => {
    deleteCartItem(token, id)
      .then(() => {
        const newCartItems = cartItems.filter((item) => {
          return item.id !== id;
        });

        setCartItems(newCartItems);
      })
      .catch(() => null);
  };
  const handleDeleteFrigeItem = (id) => {
    deleteFrigeItem(token, id)
      .then(() => {
        const newFrigeItems = frigeItems.filter((item) => {
          return item.id !== id;
        });

        setFrigeItems(newFrigeItems);
      })
      .catch(() => null);
  };

  const handleAddCartItem = (name) => {
    addCartItem(token, name)
      .then((item) => {
        setCartItems([...cartItems, item]);
      })
      .catch(() => null);
  };

  const handleAddFrigeItem = (name, expires, foodType) => {
    addFrigeItem(token, name, expires, foodType)
      .then((item) => {
        setFrigeItems([...frigeItems, item]);
      })
      .catch(() => null);
  };

  const handleChangeItemStatus = (id, status) => {
    changeItemStatus(token, id, status)
      .then((status) => {
        const item = cartItems.find((item) => {
          return item.id === id;
        });

        item.isChecked = status;
        setCartItems([...cartItems]);
      })
      .catch(() => null);
  };

  return (
    <Context.Provider value={{
      token,
      isAuthorized: !!token,
      cartItems,
      frigeItems,

      setFrigeItems,
      handleAuth,
      handleRegister,
      handleLogout,
      handleGetCartItems,
      handleDeleteCartItem,
      handleAddCartItem,
      handleChangeItemStatus,
      handleAddFrigeItem,
      handleGetFrigeItems,
      handleDeleteFrigeItem
    }}>
      {children}
    </Context.Provider>
  );
};

export default LogicLayout;
