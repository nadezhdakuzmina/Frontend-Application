import { useState, useContext } from 'react';

import { Context } from '../../containers/LogicLayout';

function Enter () {
  const { handleAuth } = useContext(Context);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [error, setError] = useState(null);
  const [isSuccess, setSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    handleAuth({
      email,
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
      <span>Введите почту</span>
      <input onChange={handleEmailChange} type='email' />
      <span>Введите пароль</span>
      <input onChange={handlePasswordChange} type='password' />
      <button onClick={handleSubmit}>Войти</button>
      {error && <b className="error">{JSON.stringify(error)}</b>}
      {isSuccess && <b className="success">Успешно</b>}
    </div>
  );
}
export default Enter;