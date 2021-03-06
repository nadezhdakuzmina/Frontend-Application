import { useState, useContext } from 'react';

import { Context } from '../../containers/LogicLayout';

function Registration () {
  const { handleRegister } = useContext(Context);

  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const [error, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    handleRegister({
      email,
      username,
      password,
    })
      .then(() => {
        setSuccess(true);
        setError(null);
      })
      .catch((error) => {
        setSuccess(false);
        setError(error);
      });
  }

  return (
    <div className="wrapper">
      <input placeholder="Имя" onChange={handleUsernameChange} type='text' />
      <input placeholder="Почта" onChange={handleEmailChange} type='email' />
      <input placeholder="Пароль" onChange={handlePasswordChange} type='password' />
      <button onClick={handleSubmit}>Зарегистрироваться</button>
      {error && <b className="error">{JSON.stringify(error)}</b>}
      {isSuccess && <b className="success">Успешно</b>}
    </div>
  );
}

export default Registration;
