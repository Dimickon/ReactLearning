import { useState } from 'react';

export default function LoginControlled() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Login form controlled</h1>
      <label>
        Username:
        <input
          type="text"
          value={data.username}
          onChange={(e) => handleInputChange(e.target.value, 'username')}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={data.password}
          onChange={(e) => handleInputChange(e.target.value, 'password')}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
