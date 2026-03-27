export default function LoginUncontrolled() {
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
    <form onSubmit={handleFormSubmit}>
      <h1>Login form Uncontrolled</h1>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
