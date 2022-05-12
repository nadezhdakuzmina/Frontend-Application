function Registration () {
  return (
    <div className="wrapper">
      <span>Введите имя</span>
      <input type='text' />
      <span>Введите почту</span>
      <input type='email' />
      <span>Введите пароль</span>
      <input type='password' />
      <button>Зарегистрироваться</button>
    </div>
  );
}
export default Registration;