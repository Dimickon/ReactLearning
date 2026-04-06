import UserContext from '../context/UserContext';
import { useState, useContext } from 'react';

export default function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);

  const [data, setData] = useState('');

  const style = {
    padding: '20px 24px',
    fontSize: '20px',
  };

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(text) {
    setData(text);
    console.log(text);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>Введите имя</h1>
        <label>
          <input
            type="text"
            onChange={(e) => handleInputChange(e.target.value)}
            style={style}
          />
        </label>
        <button
          onClick={() => {
            changeUserName(data);
          }}
        >
          Change user
        </button>
      </form>
    </>
  );
}
