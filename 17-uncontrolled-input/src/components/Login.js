export function Login() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(userData);
    alert(JSON.stringify(userData));
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username"></input>
        </label>
        <label>
          Password:
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
}
